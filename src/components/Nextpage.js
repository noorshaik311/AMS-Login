import React from "react";
import './nextpage.css'
import { useState } from "react";
import { withRouter } from './withRouter';
import Logo from '../images/logo.png';

function Tabs(props) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const onSubmit = () => {
    props.navigate('/');

  }
  
  return (
    <div className="container">
      <div className="header">
      <div>
        <img src={Logo} />
      </div>
         <div className="h1">
         <h1>AMS</h1>
         </div>
         <div>
       <button onClick={() =>onSubmit()} className="logout">Logout</button>
       </div>
       </div>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
          style={{ background: '#df6c4f'}}
        >
          T-Sense
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
          style={{ background: '#1968b3'}}
        >
          Self-Heal
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
          style={{ background: '#d2ab50'}}
        >
          PowerBI
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
          style={{ background: '#008548'}}
        >
          Chat bot
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
          style={{ background: '#3dadb8'}}
        >
         Monitor Bot
        </button>
      </div>
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <iframe className="link" src="http://db-server-india.centralindia.cloudapp.azure.com/t-sense" title="T-Sense"></iframe>
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
           <iframe className="link" src="http://db-server-india.centralindia.cloudapp.azure.com:5008" title="Search-Ticket"></iframe>
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
         <iframe className="link" src="https://app.powerbi.com/groups/me/reports/8c65471c-d208-4e1e-bd99-1b1925ba3b68/ReportSectiona3ce808743eb5c0b67b0?ctid=4cb9e6ee-fc5c-4c69-bd62-eab3a7cad01e&openReportSource=ReportInvitation" title="PowerBI"> </iframe> 
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <iframe className="link" src="http://db-server-india.centralindia.cloudapp.azure.com/SelfHealAgent" title="Self heal"></iframe>
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <iframe className="link" src="http://db-server-india.centralindia.cloudapp.azure.com:5009/" title="Monitor-Bot"> </iframe>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Tabs);
