import React from "react"
import './Menu.scss'
class Menu extends React.Component{
    render(){
        return (
            <div className="menu">
                <div className="meunInner">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Menu