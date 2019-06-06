import React,{Component} from 'react'
import { Menu, Icon, Button } from 'antd';
import "antd/dist/antd.css"
import './styles.css'
import {inject,observer} from 'mobx-react'
const SubMenu = Menu.SubMenu;

class Sider extends Component{
    render(){
        return (
            <div id='sider' style={this.props.subMenu.collapes?{width:"80px"}:{width:"200px"}}>side menu</div>
        )
    }
}


export default (inject(stores => {return {
    subMenu: stores.submenu
}})(observer(Sider)))