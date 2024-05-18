import {Link} from "react-router-dom"
import "./index.css"


const SideBarItem = (props)=>{
    const {itemDetails,onClickItem,isActive}=props
    const {id,name,toPath,}=itemDetails

    const onClickSideItem = () => {
        onClickItem(id)
    }

    const changeItemBg=isActive===true?"item-bg":""
    const changeNameColor = isActive===true?"name-color":""

    return (
        <li className={`list-item ${changeItemBg}`} onClick={onClickSideItem}>
            <Link to={toPath} className="nav-link"><p className={`name-text ${changeNameColor}`}>{name}</p></Link>
        </li>
    )

}

export default SideBarItem