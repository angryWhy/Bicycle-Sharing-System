import React, { memo } from 'react'
import { Card,Button,message } from 'antd'
import "./ui.less"
export default memo(function Message() {
    const showmessage=(type)=>{
        message[type]("提示信息")
    }
    return (
        <div>
             <Card title="message用法">
                 <Button type="primary" onClick={e=>showmessage("info")}>Success</Button>
                 <Button type="primary" onClick={e=>showmessage("success")}>Info</Button>
                 <Button type="primary" onClick={e=>showmessage("error")}>Warning</Button>
                 <Button type="primary" onClick={e=>showmessage("warning")}>Error</Button>
             </Card>
        </div>
    )
})
