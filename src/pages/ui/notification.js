import React, { memo } from 'react'
import { Card,Button,notification  } from 'antd'
import "./ui.less"
export default memo(function Notification() {
    const openNotification=(value)=>{
        notification[value]({
            message:"通知提醒",
            description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",
            onClick: () => {
                console.log('Notification Clicked!');
              }
        })
    }
    const close = () => {
        console.log(
          'Notification was closed. Either the close button was clicked or duration time elapsed.',
        );
      };
    const openNotification2=(value,placement)=>{
        const key = `open${Date.now()}`;
        const btn = (
            <Button type="primary" size="small" onClick={() => notification.close(key)}>
              Confirm
            </Button>
          );
          if(placement){
            notification.config({
                placement: placement,
                bottom: 50,
                duration: 3,
                rtl: true,
              });
        }
        notification[value]({
            message:"通知提醒",
            description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",
            btn,
            key,
            onClose:close,
        })
    }
    return (
        <div className='button'>
            <Card title="通知提醒">
            <Button type="primary" onClick={e=>openNotification("open")}> Open</Button>
            <Button type="primary" onClick={e=>openNotification("success")}> success</Button>
            <Button type="primary" onClick={e=>openNotification2("open")}> confirm</Button>
            </Card>
            <Card title="通知提醒">
            <Button type="primary" onClick={e=>openNotification2("open","topRight")}> 左上</Button>
            <Button type="primary" onClick={e=>openNotification2("success","bottomRight")}> 右下</Button>
            <Button type="primary" onClick={e=>openNotification2("open","bottomLeft")}>左下</Button>
            </Card>
        </div>
    )
})
