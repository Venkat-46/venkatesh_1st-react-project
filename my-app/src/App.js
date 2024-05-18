import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import AddScenario from "./components/AddScenario"
import SideBar from "./components/SideBar"
import AddVehicle from "./components/AddVehicle"
import AllScenario from "./components/AllScenario"
import NotFound from "./components/NotFound"
import './App.css';

const App = ()=>(
  <div className="app-container">
  <SideBar/>
  <div className="routes-container">
     <Routes> 
      <Route exact path="/" Component={Home}/>
      <Route exact path="/add-scenario" Component={AddScenario}/>
      <Route exact path="/add-vehicle" Component={AddVehicle}/>
      <Route exact path="/all-scenario" Component={AllScenario}/>
      <Route path="/bad-path" Component={NotFound}/>
     </Routes>
  </div>
  </div>

)
  


export default App;
