import React, { memo,useEffect,useState } from 'react';
import { Card,Table,Spin, Modal, message ,Button} from 'antd';
import {LoadingOutlined} from "@ant-design/icons"
import axios from "axios"
import { pagination } from '../../utils/format-Date';
export default memo(function Basictable() {
    const dataSource=[
        {
            id:"0",
            userName:"lily",
            sex:"1",
            state:"1",
            interest:"1",
            birthdayL:"2000-1-1-",
            address:"杭州市",
            time:"8:00"
        },
        {
            id:"1",
            userName:"wang",
            sex:"1",
            state:"1",
            interest:"1",
            birthdayL:"2000-1-1-",
            address:"杭州市",
            time:"8:00"
        },
        {
            id:"2",
            userName:"jack",
            sex:"1",
            state:"1",
            interest:"1",
            birthdayL:"2000-1-1-",
            address:"杭州市",
            time:"8:00"
        },
        {
            id:"3",
            userName:"poss",
            sex:"1",
            state:"1",
            interest:"1",
            birthdayL:"2000-1-1-",
            address:"杭州市",
            time:"8:00"
        }
    ]
    const columns=[
        {
            title:"id",
            dataIndex:"id"
        },
        {
            title:"用户名",
            dataIndex:"userName",
        },
        {
            title:"性别",
            dataIndex:"sex",
            render(sex){
                return sex===1?"男":"女"
            }
        },
        {
            title:"state",
            dataIndex:"state",
            render(state){
                let config={
                    "1":"风华浪子"
                }
                return config[state]
            }
        },
        {
            title:"兴趣",
            dataIndex:"interest"
        },
        {
            title:"生日",
            dataIndex:"birthdayL"
        },
        {
            title:"地址",
            dataIndex:"address"
        },
        {
            title:"时间",
            dataIndex:"time"
        }
    ]
    const [selectedRowKeys,setSelect] = useState()
    const [selectItem,setSelectItem] = useState()
    const [paga, setPaga] = useState();
    const [pagedata, setPagedata] = useState();
    const [curpage, setCurpage] = useState();
    useEffect(()=>{
        axios.get("/api/tableList.json").then(res=>{
            const a=res.data.result.list.map((item,index)=>{item.key=index;return item})
            setPaga(res)
            setPagedata(a)
        } 
        
        )
        console.log(curpage);
    },[curpage])
    const newdataSource=dataSource.map((item,index)=>{
        item.key=index
        return item
    })
    console.log(newdataSource);
    const [loading,SetLoading] = useState(true)
    const antIcon = <LoadingOutlined style={{ fontSize:40 }} spin />;
    const onRowClick=(record,index)=>{
        let selectKey=[index]
        setSelectItem(record)
        setSelect(selectKey)

    }
   
    // const rowSelection={
    //     type:"radio",
    //     selectedRowKeys
    // }
    //单选框
    const rowSelection={
        type:"radio",
        selectedRowKeys
    }
    //复选框，选一堆
    const rowCheckSelection={
        type:"checkbox",
        selectedRowKeys,
        onChange:(selectedRowKeys,selectedRows)=>{
            setSelect(selectedRowKeys)
            setSelectItem(selectedRows)
        }
    }
    //多选框删除
    const handleDeleted = ()=>{
        let rows=selectItem
        let id=[]
        rows.map((item)=>{
            id.push(item.id)
            return item
        })
        Modal.confirm({
            title:"删除提示",
            content:`您确定要删除这些数据吗？${id.join(",")}`,
            onOk:()=>{
                //请求数据
                message.success("删除成功")
                //把select设置为null和【】
                setSelect([])
                setSelectItem(null)
            }
        })
    }
  return <div>
     
      <Card title="基础表格" >
          <Table columns={columns} dataSource={newdataSource}></Table>
      
      </Card>
      <Spin spinning={loading} indicator={antIcon}  size="large">
      <Card title="动态表格-loading" >
      
          <Table columns={columns} dataSource={newdataSource}></Table>
       
      </Card>
      </Spin>
      <Card title="mock-单选"  >
          <Table columns={columns} 
                 dataSource={newdataSource} 
                 rowSelection={rowCheckSelection}
                 onRow={(record,index) => {
                    return {
                      onClick: event => {onRowClick(record,index)}, // 点击行
                    };
                  }}
                 />
                 <Button onClick={e=>{handleDeleted()}}>删除</Button>
      </Card>
      <Card title="mock-单选"  >
          <Table columns={columns} 
                 dataSource={pagedata} 
                 pagination={e=>{pagination(paga,(page)=>{setCurpage(page)})}}
                 />
      </Card>
  </div>;
});
