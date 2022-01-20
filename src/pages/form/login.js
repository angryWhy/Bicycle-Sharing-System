import React, { memo } from 'react';
import { Card, Form, Input, Button,Checkbox } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
export default memo(function Login(props) {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    return (<div>
        <Card title="登录行内表单">
            <Form layout='inline'>
                <FormItem
                    label="账号"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input placeholder='请输入用户名' />
                </FormItem>
                <FormItem
                    label="密码"
                    name="userpass"
                    rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input placeholder='请输入密码' />
                </FormItem>
                <FormItem>
                    <Button type='primary'>登录</Button>
                </FormItem>
            </Form>
        </Card>
        <Card title="登录水平表单">
            <Form onFinish={onFinish}>
                <FormItem
                    label="账号"
                    name="username"
                    rules={[{ required: true, message: '输入账号' }, { min: 5, max: 8, message: "不在范围内" }, {
                        pattern: /^\w+$/g,
                        message: "输入字母"
                    }]}>

                    <Input placeholder='请输入用户名' />
                </FormItem>
                <FormItem
                    label="密码"
                    name="userpass"
                    rules={[{ required: true, message: '输入密码!' }]}>
                    <Input placeholder='请输入密码' />
                </FormItem>
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <FormItem>
                    <Button type='primary' htmlType="submit">登录</Button>
                </FormItem>
                
            </Form>
        </Card>
    </div>);
});
