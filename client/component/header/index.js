import React,{Component} from 'react'
import {Menu,Icon,Dropdown,Button} from 'antd'
import 'antd/dist/antd.css'
import './style.css'
import {inject,observer} from 'mobx-react'
import {withRouter} from 'react-router-dom'


@inject(stores => {
    return {
        userState: stores.userState,
        subMenu:stores.submenu
    }
})
@observer
class Header extends Component{

    isCollapes=()=>{
        this.props.subMenu.suo()
    }

    exit=()=>{
        this.props.userState.exit()
        this.props.history.push('/login')
    }

    render(){
        return(
            <div id='header' style={this.props.subMenu.collapes?{marginLeft:"90px"}:{marginLeft:"210px"}}>
                <div className="lb">
                    <Button
                        onClick={this.isCollapes}
                        style={{ border: 0, padding: '5px 10px', marginLeft: '15px' }}
                    >
                        <Icon type= {this.props.subMenu.collapes?'menu-unfold' : 'menu-fold'} />
                    </Button>
                </div>
                <div className='rb'>
                    <Dropdown overlay={
                        <Menu>
                            <Menu.Item onClick={this.exit}>
                                退出
                            </Menu.Item>
                        </Menu>
                    }>
                        <a className="ant-dropdown-link" href="#">
                            <Icon type="user" />{this.props.userState.user.userInfo.userName}
                        </a>
                    </Dropdown>
                </div>
            </div>
        )
    }
}

export default  withRouter(Header)