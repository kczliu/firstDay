import React,{Component} from 'react'

import {Form, Icon, Input, Button, Checkbox} from 'antd'
import 'antd/dist/antd.css'
import './style.css'


class Login extends Component{
    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.form.validateFields((err,values)=>{
            if(!err){
                if(values.userName !== "liujing"){
                    message.error('用户名错误')
                    return false
                }else if(values.password !=="116118"){
                    message.error("密码错误")
                    return false
                }
            }
        })
    }
    render(){
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login">
                <div className="login-warp">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('userName',{
                            rules:[{required:true,message:"请输入用户名"}]
                        })(
                            <Input prefix={<Icon type="user" style={{color:'rgba(0,0,0,0.25)'}}/>} placeholder="用户名"/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password',{
                            rules:[{required:true, message:"请输入密码"}]
                        })(
                            <Input prefix={<Icon type="lock" style={{color:'rgba(0,0,0,0.25)'}}/>} placeholder="密码"/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember',{
                            valuePropName:'checked',
                            initialValue:false
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
                </div>
            </div>
        )
    }
}

const LoginForm = Form.create()(Login)

export default LoginForm
