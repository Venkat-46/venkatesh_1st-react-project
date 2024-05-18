import SideBarItem from "../SideBarItem"
import {Component} from "react"
import "./index.css"

const sideBarListItems=[
    {
        id:1,
        name:"Home",
        toPath:"/"
    },
    {
        id:2,
        name:"Add Scenario",
        toPath:"/add-scenario"
    },
    {
        id:3,
        name:"All Scenario",
        toPath:"/all-scenario"
    },
    {
        id:4,
        name:"Add Vehicle",
        toPath:"/add-vehicle"
    }
]

class SideBar extends Component{
    state={activeItemId:sideBarListItems[0].id}

    onClickItem = (id)=> {
        this.setState({activeItemId:id})
    }

    render() {
        const {activeItemId}=this.state
    return (
    <div className="side-bar-container">
         <ul className="list-container">
            {sideBarListItems.map(eachItem =>
                 <SideBarItem key={eachItem.id}
                  itemDetails={eachItem} 
                  onClickItem={this.onClickItem}
                  isActive={activeItemId===eachItem.id}/>
            )}
         </ul>
    </div>)
    }
}

export default SideBar  