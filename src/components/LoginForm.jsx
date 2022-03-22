import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useCallback } from 'react';


export const LoginForm = () => {

  const onFinish = useCallback((values) => {
    console.log('Received values of form: ', values);
    message.warning('Usuario no registrado', 3);
  }, []);


  return (
    <div 
      className="form-container"
      style={{
        width: "400px",
        height:"auto",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div >
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Ingresá tu nombre de usuario!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Nombre de usuario" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Ingresá tu contraseña!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Contraseña"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Recordan usuario</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          
        </Form.Item>
        </Form>
      </div>
        
    </div>
  )
}
