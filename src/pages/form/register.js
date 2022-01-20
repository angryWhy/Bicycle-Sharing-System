import React, { memo } from 'react';
import { Card, Form, Input, Button, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, InputNumber } from 'antd';
import { Option } from 'antd/lib/mentions';
export default memo(function Login(props) {
    return (<div>
        <Card title="登录水平表单">
            <Form labelCol={{
                span: 4,
            }}
                wrapperCol={{
                    span: 12,
                }}>
                <Form.Item
                    label="账号"
                    name="username"
                    rules={[{ required: true, message: '输入账号' }, { min: 5, max: 8, message: "不在范围内" }, {
                        pattern: /^\w+$/g,
                        message: "输入字母"
                    }]}>

                    <Input placeholder='请输入用户名' />
                </Form.Item>
                <Form.Item
                    label="密码"
                    name="userpass"
                    rules={[{ required: true, message: '输入密码!' }]}>
                    <Input placeholder='请输入密码' />
                </Form.Item>
                <Form.Item label="性别">
                    <Radio.Group  >
                        <Radio value={1}>男</Radio>
                        <Radio value={2}>女</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item label="数字"><InputNumber
                    style={{
                        width: 200,
                    }}
                    defaultValue="1"
                    min="0"
                    max="10"
                    step="0.00000000000001"
                    stringMode
                /></Form.Item>
                <Form.Item label="多选">
                    <Select
                        mode="multiple"
                    >
                        <Option value='1'>1</Option>
                        <Option value='2'>2</Option>
                        <Option value='3'>3</Option>
                        <Option value='4'>4</Option>
                        <Option value='5'>5</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="按钮">
                    <Button type='primary' htmlType="submit">登录</Button>
                </Form.Item>
                <Form.Item label="是否单身">
                    <Switch/>
                </Form.Item>

            </Form>
        </Card>
    </div>)
})