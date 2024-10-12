import React, { Component } from "react";
import './Home.css';
import { Chart } from "chart.js";
import LineChart from "../components/LineChart";
class Home extends Component {

  state = {
    showLight: true,
    showFan: true,
    showAC: true,
  };

  toggleDevice = (device) => {
    this.setState((prevState) => ({
      [device]: !prevState[device],
    }));
  };
  render(){
    const { showLight, showFan, showAC } = this.state;

  
    return(
      <>
      <div className="thanh">
      <span className="text">WELCOME TO HOME</span>
        
      </div>
      <div className="temperature">
        <span>Temperature</span>
      </div>
      <div className="Humidity">
        <span>Humidity</span>
      </div>
      <div className="Light">
        <span>Light</span>
      </div>
      <LineChart/>

      <div className="Devices">
        <div className="every-device">Light
        {showLight ? (
              <>
              
             
              <div><button className='button-Off' onClick={() => this.toggleDevice('showLight')}>OFF</button></div>

              </>
            ) : (<>
              
              <div><button className='button-On' onClick={() => this.toggleDevice('showLight')}>ON</button></div></>
            )}
        </div>
        <div className="every-device">Fan
        {showFan ? (
              <>
              
              <div><button  className='button-Off' onClick={() => this.toggleDevice('showFan')}>OFF</button></div>
              </>
            ) : (
              <>
              
              <div><button className='button-On' onClick={() => this.toggleDevice('showFan')}>ON</button></div>
              </>
            )}
        </div>
        <div className="every-device">
          AC
          {showAC ? (
              <>
              
              <div><button className='button-Off' onClick={() => this.toggleDevice('showAC')}>OFF</button></div>
              </>
            ) : (
              <>
              
              <div><button className='button-On' onClick={() => this.toggleDevice('showAC')}>ON</button></div>
              </>
            )}
        </div>

      </div>

      </>
    )
  }


}

export default Home;