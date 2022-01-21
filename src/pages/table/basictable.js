import React, { memo } from 'react';
import { Card,Table } from 'antd';
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
            id:"0",
            userName:"jack",
            sex:"1",
            state:"1",
            interest:"1",
            birthdayL:"2000-1-1-",
            address:"杭州市",
            time:"8:00"
        },
        {
            id:"0",
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
            dataIndex:"userName"
        },
        {
            title:"性别",
            dataIndex:"sex"
        },
        {
            title:"state",
            dataIndex:"state"
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
  return <div>
      <Card title="基础表格" >
          <Table columns={columns} dataSource={dataSource}></Table>
      </Card>
  </div>;
});
