import React, { memo, useReducer, useState } from 'react'
import { Tabs, Card } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import "./ui.less"
export default memo(function Tabsabout() {
    const tabs = {
        tabList:[{
            title: "tab 1",
            contnet: "content1",
            key: "1"
        },
        {
            title: "tab 2",
            contnet: "content2",
            key: "2"
        },
        {
            title: "tab 3",
            contnet: "content3",
            key: "3"
        }]
    }
    const [state, dispatch] = useReducer(reducer, tabs)
    function reducer(state,action) {
        switch (action.type) {
            case "add":
                return{...state,tabList:state.tabList.concat(action.item)}
            default:
                break;
        }
    }
    const { TabPane } = Tabs;
    
    const [active, setActive] = useState("1")
    const callback = (key) => {
        console.log(key);
    }
   function onEdit(action,targetKey) {
       switch (action) {
           case "add":
               dispatch({type:"add",item:{title: 'New Tab', content: 'New Tab Pane',key:`${state.tabList.length+1}`}});
               setActive(`${state.tabList.length+1}`)
           case "remove":
               
       }
   }
   function handleKey(activeKey) {
    setActive(`${activeKey}`)
   }
    return (
        <div className='button'>
            <Card title="taps">
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Tab 1" key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </Card>
            <Card title="带图的taps">
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab={<span><AppleOutlined />苹果</span>} key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab={<span><AndroidOutlined />安卓</span>} key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab={<span><AndroidOutlined />安卓</span>} key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </Card>
            <Card title="动态的taps">
            <Tabs type="editable-card" onEdit={e=>onEdit("add")}  activeKey={active} onChange={handleKey}>
                {
                   state.tabList.map((item,index)=>{
                       return<TabPane tab={item.title} key={item.key}/>
                   })
                }
            </Tabs>
        </Card>
        </div >
    )
})
