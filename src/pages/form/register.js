import React, { memo, useState } from 'react';
import { Card, Form, Input, Button, Checkbox, Radio, Select, Switch, DatePicker, Upload, TimePicker, InputNumber } from 'antd';
import { Option } from 'antd/lib/mentions';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
export default memo(function Login(props) {
    const { TextArea } = Input;
    const [ loading,setLoading ] = useState(false)
    const [ imgAbout,setImg ] = useState()
    //上传头像
    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
     const handleChange = info => {
        if (info.file.status === 'uploading') {
          setLoading( true );
          return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>{
                setImg(imageUrl)
                setLoading(false)
    
            }
            //   this.setState({
            //     imageUrl,
            //     loading: false,
            //   }),
            );
          }
        }
        const uploadButton = (
            <div>
              {loading ? <LoadingOutlined /> : <PlusOutlined />}
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          );
          const onFinish = (values) => {
            console.log('Received values of form: ', values);}
    return (<div>
        <Card title="登录水平表单">
            <Form labelCol={{
                span: 4,
            }}
                wrapperCol={{
                    span: 12,
                }}
                onFinish={onFinish}>
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

                <Form.Item name="number"label="数字"><InputNumber
                    style={{
                        width: 200,
                    }}
                    defaultValue="1"
                    min="0"
                    max="10"
                    step="0.00000000000001"
                    stringMode
                /></Form.Item>
                <Form.Item name="mul"label="多选">
                    <Select
                        mode="multiple"
                    >
                        <Option value='1'>1</Option>
                        <Option value='2'>2</Option>
                        <Option value='3'>3</Option>
                        <Option value='4'>4</Option>
                        <Option value='5'>5</Option>
                    </Select>
                </Form.Item >
              
                <Form.Item label="是否单身" name="sex">
                    <Switch />
                </Form.Item>
                <Form.Item label="选择日期" name="date">
                    <DatePicker defaultValue={moment('2015-06', 'YYYY-MM')} />
                </Form.Item>
                <Form.Item label="联系地址" name="adress">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item label="上传图片" name="pic">
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        onChange={handleChange}
                    >
                        {imgAbout ? <img src={imgAbout} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                </Form.Item>
                <Form.Item label="协议"><Checkbox >同意协议</Checkbox></Form.Item>
                <Form.Item label="按钮">
                    <Button type='primary' htmlType="submit">登录</Button>
                </Form.Item>
            </Form>
        </Card>
    </div>)
})