import { Component } from "react"
import "./index.css"

class AddScenario extends Component{
    state ={
        scenario:"",
        time:'',
        scenarioError:false,
        timeError:false
    }
    onReset = ()=>{
        this.setState({
            scenario:"",
            time:'',
            scenarioError:false,
            timeError:false
        })
    }

    onAddScenario = (event)=>{
        const {scenario,time}=this.state
        event.preventDefault()

        if (scenario==="" && time===""){
            this.setState({scenarioError:true,timeError:true})
        }
        else if (scenario === "" && time!==""){
            this.setState({scenarioError:true,timeError:false})
        }else if (scenario!=="" && time===""){
            this.setState({scenarioError:false,timeError:true})
        }else {
            this.setState({scenarioError:false,timeError:false})
        }
    }

    onChangeScenario = (event)=>{
        this.setState({scenario:event.target.value})
    }

    onChangeTime = (event)=>{
        this.setState({time:event.target.value})
    }

    onBlurScenario = (event)=>{
        const userInput=event.target.value
        const validate = userInput===""
        this.setState({scenarioError:validate})
    }

    onBlurTime = (event)=>{
        const userInput=event.target.value
        const validate = userInput===""
        this.setState({timeError:validate})
    }

    render() {
        const {scenario,time,scenarioError,timeError}=this.state
        const classError1 = scenarioError?"error-style":""
        const classError2 = timeError?"error-style":""

        return (
            <div className="add-scenario-container">
                <p className="small-heading-text">scenario / add</p>
                <h1 className="heading-text">Add Scenario</h1>
                <form onSubmit={this.onAddScenario}>
                    <div className="adding-section">
                    <div className="input-container">
                        <label htmlFor="scenarioName" className="label-text">Scenario Name</label>
                        <input id="scenarioName" type="text" placeholder="Scenario Name" 
                        className={`input-box ${classError1}`} value={scenario}
                        onBlur={this.onBlurScenario}
                         onChange={this.onChangeScenario}/>
                         {scenarioError? <p className="error-msg">Scenario is required</p>:""}
                    </div>
                    <div className="input-container">
                        <label htmlFor="time" className="label-text">Scenario Time (in seconds)</label>
                        <input id="time" type="text" placeholder="Time" 
                        className={`input-box ${classError2}`} value={time}
                        onBlur={this.onBlurTime}
                         onChange={this.onChangeTime}/>
                         {timeError? <p className="error-msg">Scenario is required</p>:""}
                    </div>
                </div>
                <div className="add-secnario-buttons-container">
                    <button type="submit" className="scenario-buttons add" >Add</button>
                    <button type="button" className="scenario-buttons reset" onClick={this.onReset}>Reset</button>
                    <button type="button" className="scenario-buttons go-back" onClick={this.onGoBack}>Go Back</button>
                </div>
                </form>
                
            </div>
        )
    }
}

export default AddScenario