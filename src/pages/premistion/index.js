import { DatePicker, Form, Input, Modal, Radio, Select, Button, Card, Tree, Transfer } from 'antd';
import React, { memo, useEffect, useState, forwardRef, useRef } from 'react'
import { formateDate } from "../../utils/format-Date"
import 'moment/locale/zh-cn';
import moment from "moment";
import locale from 'antd/lib/date-picker/locale/zh_CN';
import Etable from "../../components/Etable/index"
import axios from "axios"
import config from "../../config/menuConfig"
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd'
const { Option } = Select
const { TextArea } = Input;
const TreeNode = Tree.TreeNode;
const Index = memo(() => {
    const [data, setData] = useState()
    const [menus, setMenus] = useState();
    const [show, setShow] = useState(false)
    const [preShow, setPreShow] = useState(false)
    const [tranShow, settranShow] = useState(false)
    const [selectedRowKeys, setSelect] = useState()
    const [targetKey, setTargetKey] = useState()
    const [mockData, setMockData] = useState()
    const [selectItem, setSelectItem] = useState(null)
    const formRef = useRef()
    const subRef = useRef()
    const roleRef = useRef()
    useEffect(() => {
        axios.get("./api/role/list.json").then(res => {
            console.log(res.data.result.menus);
            let newData = res.data.result.item_list.map((item, index) => {
                item.key = index
                return item
            })
            setData(newData)
            setMenus(res.data.result.item_list[0].menus)
        })
        axios.get("./api/role/user_list.json").then(res => {
            getAuthUserList(res.data.result)
        })
    }, [])
    const updateSelectItem = (selectedRowKeys, selectItem) => {
        setSelectItem(selectItem)
        setSelect(selectedRowKeys)
    }
    const handleCancle = () => {
        console.log(formRef.current.getFieldsValue());
        formRef.current.resetFields()

        setShow(false)
    }
    const handlePremission = () => {
        console.log(selectItem);
        if (!selectItem) {
            Modal.info({
                title: "提示",
                content: "请选择"
            })
        }
        else {
            setPreShow(true)
        }
        //
    }
    const handlepreCan = () => {
        setPreShow(false)
        subRef.current.resetFields()

    }
    const handlepreok = () => {
        subRef.current.getFieldsValue()
        console.log(subRef.current.getFieldsValue(), menus);
        setPreShow(false)
        subRef.current.resetFields()

    }
    const handleTran = () => {
        settranShow(true)
    }
    const handleTranCan = () => {
        settranShow(false)
    }
    const handleTranok = () => {
        let data={}
        data.user_ids=targetKey
        //操作id
        data.user_id=selectItem.id
        //网络请求
        settranShow(false)
    }
    const setSubTargetKey = (targetKeys) =>{
        setTargetKey(targetKeys)
    }
    //目标用户
    const getAuthUserList = (dataSource) => {
        const mockData = []
        const targetkeys = []
        if (dataSource && dataSource.length > 0) {
            for (let i = 0; i < dataSource.length; i++) {
                const data = {
                    key: dataSource[i].user_id,
                    title: `${dataSource[i].user_name}`,
                    status: dataSource[i].status,
                }
                if (data.status === 1) {
                    targetkeys.push(data.key)
                } 
                    mockData.push(data)
                
            }
        }
        setMockData(mockData)
        setTargetKey(targetkeys)
    }
    const columns = [
        {
            title: "角色ID",
            dataIndex: "id"
        },
        {
            title: "角色名称",
            dataIndex: "role_name"
        },
        {
            title: "创建时间",
            dataIndex: "create_time"
        },
        {
            title: "使用状态",
            dataIndex: "status",
            render(status) {
                return status === 1 ? "停用" : "启用"
            }
        },
        {
            title: "授权时间",
            dataIndex: "authorize_time"
        },
        {
            title: "授权人",
            dataIndex: "authorize__user_name"
        },
    ]
    return (
        <div>
            <Card>
                <Button type="primary" onClick={e => { setShow(true) }} >创建角色</Button>
                <Button type="primary" style={{ marginLeft: "20px" }} onClick={e => { handlePremission() }}>设置权限</Button>
                <Button type="primary" style={{ marginLeft: "20px" }} onClick={e => { handleTran() }}>用户授权</Button>
            </Card>
            <Card>
                <Etable columns={columns} dataSource={data} row_Selection="radio" selectedRowKeys={selectedRowKeys} updateSelectItem={updateSelectItem} />
            </Card>
            <Modal title="创建角色" visible={show} onCancel={e => { handleCancle() }} onOk={e => { handleCancle() }}>
                <CreateForm ref={formRef} />
            </Modal>
            <Modal title="编辑角色" visible={preShow} onCancel={e => { handlepreCan() }} onOk={e => { handlepreok() }}>
                <SubForm detail={selectItem} ref={subRef} menuInfo={menus} patchMenuInfo={(checkedKeys) => { setMenus(checkedKeys) }} />
            </Modal>
            <Modal title="用户授权" visible={tranShow} onCancel={e => { handleTranCan() }} onOk={e => { handleTranok() }}>
                <RoleAuthForm targetkeys={targetKey} mockData={mockData} ref={roleRef} setkey={setSubTargetKey} />
            </Modal>
        </div>
    )
})
const CreateForm = forwardRef((props, ref) => {
    const { userInfo } = props
    const formLayout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 19 }
    }

    console.log(userInfo);
    return (
        <Form ref={ref} autoComplete="off" >
            <Form.Item label="用户名" {...formLayout} name="username" >
                <Input type="text" placeholder='请输入用户名' />
            </Form.Item>
            <Form.Item label="性别" {...formLayout} name="sex" >
                <Radio.Group>
                    <Radio value={1}>男</Radio>
                    <Radio value={2}>女</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="状态" {...formLayout} name="status" >
                <Select>
                    <Option value={1} >开启</Option >
                    <Option value={2} >关闭</Option >
                </Select>
            </Form.Item>
            <Form.Item label="生日" {...formLayout} name="birth" >
                <DatePicker locale={locale} />
            </Form.Item>
            <Form.Item label="联系地址 "  {...formLayout} name="address" >
                <TextArea rows={4} />
            </Form.Item>
        </Form>
    )
})
const SubForm = forwardRef((props, ref) => {
    const { detail, menuInfo } = props
    const fromLayout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 19 }
    }
    const onCheck = (checkedKeys) => {
        props.patchMenuInfo(checkedKeys)
    }
    const renderTree = (config) => {
        return config.map((item, index) => {
            if (item.children) {
                return <TreeNode title={item.title} key={item.link}>
                    {renderTree(item.children)}
                </TreeNode>
            }
            else {
                return <TreeNode title={item.title} key={item.link}></TreeNode>
            }
        })
    }
    return (<div>
        <Form layout='horizontal' ref={ref}>
            <Form.Item label="角色名称" {...fromLayout} name="name" initialValue={detail.role_name} >
                <Input disabled />
            </Form.Item>
            <Form.Item label="状态" {...fromLayout} initialValue="2" name="control">
                <Select  >
                    <Option value="1" >开启</Option >
                    <Option value="2" >关闭</Option >
                </Select>
            </Form.Item>

            <Tree
                checkable
                defaultExpandAll
                onCheck={(checkedKeys) => { onCheck(checkedKeys) }}
                checkedKeys={menuInfo}
            >
                <TreeNode title="平台权限" key="platform_all">
                    {renderTree(config)}
                </TreeNode>
            </Tree>

        </Form>
    </div>)
})
const RoleAuthForm = forwardRef((props, ref) => {
    const {mockData,targetkeys,setkey } = props
    const filterOption =()=>{
        
    }
    const handleChange= ()=>{

    }
    return (<div>
        <ConfigProvider locale={zhCN}>
        <Transfer
            listStyle={{width:200,height:400}}
            dataSource={mockData}
            titles={["待选用户","已选用户"]}
            showSearch
            searchPlaceholder="请输入用户名"
            filterOption={e=>{filterOption()}}
            targetKeys={targetkeys}
            render={item => item.title}
            onChange={(targetKeys)=>{setkey(targetKeys)}}
        />
        </ConfigProvider>
    </div>)

})
export default Index