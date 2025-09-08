import React, { useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';

const HomePage = () => {
const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  return (
    <div>
      <h1 className='text-5xl font-bold text-center mt-7 text-sky-600'>HomePage</h1>

      <Button type='primary'>Click Me</Button>
      <Button type='dashed'>Click Me</Button>
      <Button type='default'>Click Me</Button>
      <Button type='text'>Click Me</Button>
      <Button type='link'>Click Me</Button>

      <Form
      name="login"
      initialValues={{ remember: true }}
      style={{ maxWidth: 360 }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a href="">Forgot password</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
        or <a href="">Register now!</a>
      </Form.Item>
    </Form>
    </div>
  )
}

export default HomePage