import React, { memo, useState } from 'react'
import { Modal, Button, Card } from 'antd';
import "./ui.less"
export default memo(function Modals() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [isModalVisible3, setIsModalVisible3] = useState(false);
    const [loading, setLoading] = useState(false)
    const { confirm } = Modal;
    function handleOk() {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
            setIsModalVisible3(false);
        }, 3000);

    }
    function info() {
        Modal.info({
            title: "这是提醒",
            content: (
                <div>
                    <p>some messages...some messages...</p>
                    <p>some messages...some messages...</p>
                </div>
            ),
            onOk() { }
        })
    }
    function success() {
        Modal.success({
            title: "成功",
            content: (
                <div>
                    <p>some messages...some messages...</p>
                    <p>some messages...some messages...</p>
                </div>
            ),
            onOk(){}
        })
    }
    function errorabout(){
        Modal.error({
            title:"警告",
            content:(
                <div>
                    <p>some messages...some messages...</p>
                    <p>some messages...some messages...</p>
                </div>
            ),
            onOk(){}
        })
    }
    function alertabout() {
        Modal.warning({
            title:"警告",
            content:(
                <div>
                    <p>some messages...some messages...</p>
                    <p>some messages...some messages...</p>
                </div>
            )
        })
    }
    function showConfirm(params) {
        
    }
    return (
        <div className='button'>
            <Card title="基础模态框">
                <Button type="primary" onClick={e => setIsModalVisible(true)}>打开弹窗</Button>
                <Button type="primary" onClick={e => setIsModalVisible3(true)}>自定义页脚</Button>
                <Button type="primary" onClick={e => setIsModalVisible2(true)}>垂直居中</Button>
            </Card>
            <Modal title="React"
                onOk={e => setIsModalVisible(false)}
                onCancel={e => setIsModalVisible(false)}
                visible={isModalVisible}
                cancelText="取消-"
                okText="确认-"
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            <Modal title="react"
                visible={isModalVisible3}
                footer={[
                    <Button key="back" onClick={e => setIsModalVisible3(false)}>
                        返回
                    </Button>,
                    <Button key="submit"
                        type="primary"
                        loading={loading}
                        onClick={e => handleOk()}>
                        提交
                    </Button>]}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            <Modal title="垂直居中"
                onOk={e => setIsModalVisible2(false)}
                onCancel={e => setIsModalVisible2(false)}
                visible={isModalVisible2}
                cancelText="取消"
                okText="确认"
                wrapClassName='vertical-center-modal'
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            <Card title="信息确认框">
                <Button type="primary" onClick={info}>提醒</Button>
                <Button type="primary" onClick={success}>成功</Button>
                <Button type="primary" onClick={errorabout}>错误</Button>
                <Button type="primary" onClick={alertabout}>警告</Button>
                <Button onClick={showConfirm}>Confirm</Button>
            </Card>
        </div>
    )
})
