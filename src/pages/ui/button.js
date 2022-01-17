import React, { memo,useReducer } from 'react'
import { PlusOutlined,EditOutlined,DeleteOutlined,SearchOutlined,DownloadOutlined,PoweroffOutlined } from '@ant-design/icons';
import { Card,Button } from 'antd'
import "./ui.less"
export default memo(function AntdButton() {
    const initState={
        statusList:[false,false,false,false]
    }
    const [state, dispatch] = useReducer(reducer, initState);
    function reducer(state,action) {
        switch (action.type) {
            case 'change':
              return {...state,statusList:state.statusList.map((item,index)=>{
                  if(index===action.index){
                      return item=!item
                  }
                  else{
                      return item
                  }
              })}
            default:
              throw new Error();
          }
    }
    const enterLoading = index => {
        console.log(index);
        dispatch({type:"change",index})
        setTimeout(() => {
            dispatch({type:"change",index})
        }, 6000);
      };
    return (
        <div className='button'>
            <Card title="基础按钮">
                <Button type='primary'>主题按钮</Button>
                <Button>默认按钮</Button>
                <Button type="dashed">虚线按钮</Button>
                <Button type="primary" danger>危险按钮</Button>
            </Card>
            <Card title="图形按钮">
                <Button icon={<PlusOutlined />}>创建</Button>
                <Button icon={<EditOutlined />}>编辑</Button>
                <Button icon={<DeleteOutlined />}>编辑</Button>
                <Button shape="circle" icon={<SearchOutlined />} />
                <Button icon={<SearchOutlined />}>Search</Button>
                <Button icon={<DownloadOutlined />}>Download</Button>
            </Card>
            <Card title="Loading按钮">
            <Button type="primary" loading>Loading</Button>
            <Button type="primary" icon={<PoweroffOutlined />} loading />
            <Button type="primary" loading={state.statusList[0]} onClick={e => enterLoading(0)}>
            Click me!
          </Button>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={state.statusList[2]}
            onClick={() => enterLoading(2)}
          />
            </Card>
        <Card title="按钮尺寸">
        <Button size="small">Default</Button>
        <Button size="middle">Default</Button>
        <Button size="large">Default</Button>
        </Card>
        </div>
    )
})
