import React, { memo,useState } from 'react';
import { Card,Table,Badge, Modal, message, Button} from 'antd';
import { columns,dataSource,columns2,dataSource3} from '../../resource/dataSource';
export default memo(function Hightable() {
    const [sort, setSort] = useState();
    const handleDelete=(text,item)=>{
        let id=item.id
        Modal.info({
            title:"确认",
            content:"确认删除吗?",
            onOk:()=>{
                message.success("删除成功")

            }
        })
    }
    const columns3=[
        {
            title:"id",
            dataIndex:"id",
            fixed:"left",
            width:80
        },
        {
            title:"用户名",
            dataIndex:"userName",
            fixed:"left",
            width:80
        },
        {
            title:"性别",
            dataIndex:"sex",
            width:80,
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
            },
            width:80
        },
        {
            title:"兴趣",
            dataIndex:"interest",
            width:80
        },
        {
            title:"生日",
            dataIndex:"birthdayL",
            width:80
        },
        {
            title:"地址",
            dataIndex:"address",
            width:120
        },
        {
            title:"时间",
            dataIndex:"time",
            width:120
        },
        {
            title:"年龄",
            dataIndex:"age",
            width:120,
            sorter:(a,b)=>{
                return a.age-b.age
            },
            sortOrder:sort
        }
    ]
    const columns4=[
            {
                title:"id",
                dataIndex:"id",
                fixed:"left",
                width:80
            },
            {
                title:"用户名",
                dataIndex:"userName",
                fixed:"left",
                width:80
            },
            {
                title:"性别",
                dataIndex:"sex",
                width:80,
                render(sex){
                    return sex==="1"?"男":"女"
                }
            },
            {
                title:"爱好",
                dataIndex:"hooby",
                width:80,
                render(abc){
                    let config={
                        "1":<Badge status='success' text="游泳"/>,
                        "2":<Badge status='error' text="跑步"/>,
                        "3":<Badge status='process' text="跳绳"/>
                    }
                    return config[abc]
                }
            },
            {
                title:"删除",
                render(text,item){
                    return <Button type='primary' onClick={e=>{handleDelete(text,item)}}>删除</Button>
                }
            }
    ]
    const dataSource4=[
        {
            id:"1",
            userName:"boss",
            sex:"1",
            hooby:"3"
        },
        {
            id:"2",
            userName:"boss",
            sex:"2",
            hooby:"2"
        },
        {
            id:"3",
            userName:"boss",
            sex:"2",
            hooby:"1"
        },
    ]
    const handleChange=(pagination,filters,sorter) =>{
        setSort(sorter.order)
    }
  return <div>
       <Card title="头部固定" >
          <Table columns={columns} dataSource={dataSource} pagination={false} scroll={{y:240}} />
      
      </Card>
      <Card title="左侧固定" >
          <Table columns={columns2} dataSource={dataSource} pagination={false} scroll={{x:1700}}></Table>
      </Card>
      <Card title="表格排序" >
          <Table columns={columns3} dataSource={dataSource3} pagination={false} onChange={handleChange}></Table>
      </Card>
      <Card title="打上标记" >
          <Table columns={columns4} dataSource={dataSource4} pagination={false} ></Table>
      </Card>
  </div>;
});

