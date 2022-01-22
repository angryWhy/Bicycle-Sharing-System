import React, { memo,useEffect,useState } from 'react';
import { Card,Table,Spin } from 'antd';
import {LoadingOutlined} from "@ant-design/icons"
import axios from "axios"
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
    useEffect(()=>{
        axios.get("/api/tableList.json").then(res=>{
            console.log(res);
        })
    },[])
    dataSource.map((item,index)=>{
        item.key=index
    })
    const [loading,SetLoading] = useState(true)
    const antIcon = <LoadingOutlined style={{ fontSize:40 }} spin />;
    const onRowClick=(record,index)=>{
        let selectKey=[index]
        setSelectItem(record)
        setSelect(selectKey)

    }
    const rowSelection={
        selectedRowKeys
    }
  return <div>
     
      <Card title="基础表格" >
          <Table columns={columns} dataSource={dataSource}></Table>
      
      </Card>
      <Card title="动态表格-loading" >
      <Spin spinning={loading} indicator={antIcon}  size="large">
          <Table columns={columns} dataSource={dataSource}></Table>
        </Spin>
      </Card>
      <Card title="mock-单选"  >
          <Table columns={columns} 
                 dataSource={dataSource} 
                 rowSelection={rowSelection}
                 onRow={(record,index) => {
                    return {
                      onClick: event => {onRowClick(record,index)}, // 点击行
                    };
                  }}
                 />
      
      </Card>
  </div>;
});
