import { DatePicker, Form, Input, Modal,Radio, Select } from 'antd';
import axios from 'axios';
import React, { memo, useState } from 'react';
import BaseForm from '../../components/BaseForm';
import Etable from '../../components/Etable';
import 'moment/locale/zh-cn';
import locale from 'antd/lib/date-picker/locale/zh_CN';
export default memo(function User() {
    const [selectedRowKeys, setSelect] = useState()
    const [selectItem, setSelectItem] = useState(null)
    const params={
        page:1
    }
    const {Option} = Select
    const formList = [
        {
            type: "INPUT",
            label: "用户名",
            field: "user_name",
            placeholder: "请输入用户名称",
            width: 100
        },
        {
            type: "INPUT",
            label: "手机号",
            field: "user_mobile",
            placeholder: "请输入用户手机号",
            width: 100
        },
        {
            type: "DATE",
            label: "请选择入职日期",
            field: "user_date",
            placeholder: "请选择日期",
            width: 100
        }

    ]
    const columns = [
        {
            title: "id",
            dataIndex: "id"
        },
        {
            title: "用户名",
            dataIndex: "username"
        },
        {
            title: "性别",
            dataIndex: "sex"
        },
        {
            title: "状态",
            dataIndex: "state"
        },
        {
            title: "爱好",
            dataIndex: "interest"
        },
        {
            title: "生日",
            dataIndex: "birthday"
        },
        {
            title: "联系地址",
            dataIndex: "address"
        },
        {
            title: "早起时间",
            dataIndex: "time"
        },
    ]
    const datasource = [
        {
            "id": 1,
            "username": "name",
            "sex": 1,
            "state": 2,
            "interest": "游泳",
            "birthday": "2000-1-1",
            "address": "海淀区",
            "time": "9:00",
            key:0
        },
        {
            "id": 1,
            "username": "name",
            "sex": 1,
            "state": 2,
            "interest": "游泳",
            "birthday": "2000-1-1",
            "address": "海淀区",
            "time": "9:00",
            key:1,
        }
    ]
    const updateSelectItemList = (selectedRowKeys, selectedRows) => {
        setSelect(selectedRowKeys)
        setSelectItem(selectedRows)
    }
    const updateSelectItem = (selectedRowKeys, selectItem) => {
        setSelectItem(selectItem)
        setSelect(selectedRowKeys)
    }
    const handleFilter = (params) =>{
        axios.requestList()
    }
    return <div>
        <BaseForm formList={formList} />
        <Etable columns={columns}
            dataSource={datasource}
            selectedRowKeys={selectedRowKeys}
            updateSelectItemList={updateSelectItemList}
            updateSelectItem={updateSelectItem}
        />
        <Modal title="111"
               visible={false}
               onOk={e=>{}}
               onCancel={e=>{}}
               >

        </Modal>
        <CreateForm/>
    </div>;
});

const CreateForm = () =>{
    const formLayout = {
        labelCol:{span:5},
        wrapperCol:{span:10}
    }
    return(<>
    <Form>
        <Form.Item label="用户名" {...formLayout}>
            <Input type="text" placeholder='请输入用户名'/>
        </Form.Item>
        <Form.Item label="性别" {...formLayout}>
        <Radio.Group>
          <Radio value="1">男</Radio>
          <Radio value="2">女</Radio>
        </Radio.Group>
        </Form.Item>
        <Form.Item label="状态" {...formLayout}>
            <Select>
                <Option value={1} >学习</Option >
                <Option value={2} >娱乐</Option >
                <Option value={3} >运动</Option >
                <Option value={4} >睡觉</Option >
            </Select>
        </Form.Item>
        <Form.Item label="生日" {...formLayout} >
            <DatePicker locale={locale} />
        </Form.Item>
    </Form>
           </>)
}