import React, { memo, useState } from 'react'
import { Card, Spin,Alert,Switch } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
export default memo(function Loading() {
    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const toggle=(value)=>{
        console.log(value);
        setLoading(value)
    }
    const toggle2=(value)=>{
        console.log(value);
        setLoading2(value)
    }
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return (
        <div>
            <Card title="Spin用法" className='card-wrap'>
                <Spin indicator={antIcon} style={{ marginRight: "20px" }} />
                <Spin style={{ marginRight: "10px" }} />
            </Card>
            <Card title="内容遮罩">
                <Spin spinning={loading} tip="Loading...">
                    <Alert 
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="info"
                    />
                </Spin>
                <Switch checked={loading} onChange={toggle} />
                <Spin spinning={loading2} tip="Loading..." indicator={antIcon}>
                    <Alert 
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="info"
                    />
                </Spin>
                <Switch checked={loading2} onChange={toggle2} />
            </Card>
        </div>
    )
})
