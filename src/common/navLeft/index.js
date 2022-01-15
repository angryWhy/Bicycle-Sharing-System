import React, { memo } from 'react'
//样式
import logo from "../../assets/img/hello.jpg"
import { Menu } from 'antd'
import "./index.less"
//数据
import routes from '../../config/menuConfig'

export default memo(function NavLeft() {
    const { SubMenu } = Menu;
    function handleClick(e) {
        console.log('click', e);
    }
    function renderMenu(routes) {
        return routes.map((item)=>{
            if(item.children){
                return(
                    <SubMenu title={item.title} key={item.title}>
                        {renderMenu(item.children)}
                    </SubMenu>
                )
            }else{
                return <Menu.Item key={item.title}>{item.title}</Menu.Item>
            }
        })
    }
    return (
        <div>
            <div className='logo'>
                <img className='header-logo' src={logo} alt='' />
                <h1>哈啰单车</h1>
            </div>
            <Menu onClick={handleClick} mode="vertical" theme='dark'>
               {renderMenu(routes)}
            </Menu>
        </div>
    )
})
