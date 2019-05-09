import React, {Component} from 'react'
import Header from '../../component/header/index'
import Footer from '../../component/footer/index'
import Sider from '../../component/sider/index'

class Home extends Component{
    render(){
        return [
                <Sider></Sider>,
                <Header></Header>,
                <div>this is home</div>,
                <Footer></Footer>
        ]
    }
}

export default Home