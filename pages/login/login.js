import React from 'react'
import {
    Form, Icon, Input, Button, Checkbox
} from 'antd';
import axios from 'axios'

import 'antd/dist/antd.css'
import '../../static/login/login.scss'

class NormalLoginForm extends React.PureComponent {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                axios.post('/login', {
                    values
                })
                .then(function (res) {
                    console.log('axios执行成功，提交完成')
                    console.log(res);
                })
                .catch(function (err) {
                    console.log('发生错误！！')
                    console.log(err);
                });
            }else{
                console.log('获取值失败\n', err)
            }

        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="ant-form">
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入正确的用户名!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入正确的密码!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                  
                </Form.Item>
            </Form>
        );


    }
}
const LoginPage = Form.create({ name: 'normal_login' })(NormalLoginForm);

class Login extends React.PureComponent{
    render() {
        return(
            <>
                <div className='loginPage-container'>
                <LoginPage />
                </div>
            </>
        )
    }
}


export default Login