import {Component} from "react"
import "./index.css"

class Home extends Component {

    render(){
        return (
            <div className="home-container">
                <select className="select-box">
                    <option value="senarioList">senario list</option>
                    <option value="list">list</option>
                </select>
                <ul className="vehicles-list">
                    <li className="home-list-heading">
                        <p className="list-heading-text">Vehicle Id</p>
                        <p className="list-heading-text">Vehicle Name</p>
                        <p className="list-heading-text">vehicle Id</p>
                        <p className="list-heading-text">Position X</p>
                        <p className="list-heading-text">Position Y</p>
                        <p className="list-heading-text">Speed</p>
                        <p className="list-heading-text">Direction</p>
                        <p className="list-heading-text">Edit</p>
                        <p className="list-heading-text">Delete</p>
                    </li>
                </ul>
                <div className="buttons-container">
                    <button type="button" className="button start-button" >Start Stimulation</button>
                    <button type="button" className="button stop-button" >Stop Stimulation</button>
                </div>
            </div>
        )
    }
}

export default Home
