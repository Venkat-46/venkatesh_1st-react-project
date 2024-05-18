import { Component } from "react"
import "./index.css"

class AddVehicle extends Component{
    state ={
        vehicleName:"",
        speed:'',
        positionX:"",
        positionY:"",
        direction:"",
        vehicleNameError:false,
        speedError:false,
        positionXError:false,
        positionYError:false
    }
    onReset = ()=>{
        this.setState({
            vehicleName:"",
            speed:'',
            positionX:"",
            positionY:"",
            direction:"",
            vehicleNameError:false,
            speedError:false,
            positionXError:false,
            positionYError:false
        })
    }

    onAddVehicle = (event)=>{
        const {vehicleName,speed,positionX,positionY}=this.state
        event.preventDefault()

        if (vehicleName==="" && speed==="" && positionX==="" && positionY===""){
            this.setState({vehicleNameError:true,speedError:true,positionXError:true,positionYError:true})
        }
        else if (vehicleName === "" && speed!==""){
            this.setState({vehicleNameError:true,speedError:false})
        }else if (vehicleName!=="" && speed===""){
            this.setState({vehicleNameError:false,speedError:true})
        }else {
            this.setState({vehicleNameError:false,speedError:false})
        }
    }

    onChangeVehicle = (event)=>{
        this.setState({vehicleName:event.target.value})
    }

    onChangeSpeed = (event)=>{
        this.setState({speed:event.target.value})
    }
    onChangePositionX = (event)=>{
        this.setState({positionX:event.target.value})
    }

    onChangePositionY = (event)=>{
        this.setState({positionY:event.target.value})
    }


    onBlurVehicle = (event)=>{
        const userInput=event.target.value
        const validate = userInput===""
        this.setState({vehicleNameError:validate})
    }

    onBlurSpeed = (event)=>{
        const userInput=event.target.value
        const validate = userInput===""
        this.setState({speedError:validate})
    }
    onBlurPositionX = (event)=>{
        const userInput=event.target.value
        const validate = userInput===""
        this.setState({positionXError:validate})
    }
    onBlurPositionY = (event)=>{
        const userInput=event.target.value
        const validate = userInput===""   
        this.setState({positionYError:validate})
    }

    render() {
        const {vehicleName,speed,vehicleNameError,speedError,positionX,positionY,positionXError,positionYError}=this.state
        const classError1 = vehicleNameError?"error-style":""
        const classError2 = speedError?"error-style":""
        const classError3 =positionXError?"error-style":""
        const classError4 =positionYError?"error-style":""



        return (
            <div className="add-scenario-container">
                <p className="small-heading-text">Vehicle / add</p>
                <h1 className="heading-text">Add Vehicle</h1>
                <form onSubmit={this.onAddVehicle}>
                    <div className="adding-section">
                        <div className="select-box-container">
                            <label htmlFor="select" className="label-text">Scenarios List</label>
                            <select id="select" className="add-vehicle-select-box">
                                <option>Select</option>
                            </select>
                        </div>
                        <div className="input-container">
                            <label htmlFor="vehicleName" className="label-text">Vehicle Name</label>
                            <input id="vehicleName" type="text" placeholder="Vehicle Name" 
                            className={`input-box ${classError1}`} value={vehicleName}
                            onBlur={this.onBlurVehicle}
                            onChange={this.onChangeVehicle}/>
                            {vehicleNameError? <p className="error-msg">Vehicle name required</p>:""}
                        </div>
                        <div className="input-container">
                            <label htmlFor="speed" className="label-text">Speed</label>
                            <input id="speed" type="text" placeholder="Speed" 
                            className={`input-box ${classError2}`} value={speed}
                            onBlur={this.onBlurSpeed}
                            onChange={this.onChangeSpeed}/>
                            {speedError? <p className="error-msg">Vehicle speed is required</p>:""}
                        </div>
                        <div className="input-container">
                            <label htmlFor="positionX" className="label-text">Position X</label>
                            <input id="positionx" type="text" placeholder="Position X" 
                            className={`input-box ${classError3}`} value={positionX}
                            onBlur={this.onBlurPositionX}
                            onChange={this.onChangePositionX}/>
                            {positionXError? <p className="error-msg">{parseInt(positionX)<0 || parseInt(positionX)>800?
                            "Position X should not be >800 and <0":"Position x is required"}</p>:""}
                        </div>
                        <div className="input-container">
                            <label htmlFor="positionY" className="label-text">Position Y</label>
                            <input id="positionY" type="text" placeholder="Position Y" 
                            className={`input-box ${classError4}`} value={positionY}
                            onBlur={this.onBlurPositionY}
                            onChange={this.onChangePositionY}/>
                            {positionYError? <p className="error-msg">Position x is required</p>:""}
                        </div>
                        <div className="select-box-container">
                            <label htmlFor="directionSlect" className="label-text">Directions List</label>
                            <select id="directionSelect" className="direction-select-box">
                                <option>Select</option>
                            </select>
                        </div>
                    </div>
                    <div className="add-secnario-buttons-container">
                        <button type="submit" className="vehicle-buttons add" >Add</button>
                        <button type="button" className="vehicle-buttons reset" onClick={this.onReset}>Reset</button>
                        <button type="button" className="vehicle-buttons go-back" onClick={this.onGoBack}>Go Back</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default AddVehicle