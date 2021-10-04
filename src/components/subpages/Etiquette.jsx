import React from "react";

import { Jumbotron } from "reactstrap";
import "./styles/Etiquette.css";

export default function WaxingEtiquette() {
  
  return(
    <>
      <div className="wrapper">
        <Jumbotron className="jumbotron">
          <h1>IMPORTANT:</h1>
          <h3>Please read the following before attending your appointment.</h3>
        </Jumbotron>
    
        <div className="et-card">
          <h3>Cleanliness</h3>
          <hr />
            <ol>
              <li>Please arrive for your treatment clean.</li>
              <li>Always take the time to shower or freshen up before your waxing treatment. </li>
              <li>Wet wipes will be available to freshen up too for those arriving straight from work.</li>
            </ol>
        </div>
        <hr />
      
        <div className="et-card">
          <h3>Preparation</h3>
          <hr />       
            <ol>
              <li>If possible, please gently exfoliate your skin a few days prior to your appointment to remove dead skin cells.</li>
              <li>This will also help reduce the occurrence of ingrown hairs. </li>
              <li>You should have at least 4 weeks growth from your last wax. </li>
              <li>Please do not shave or use any depilatory products for at least 3 to 4 weeks to ensure you get the best results.</li>
              <li>Hair should be a minimum of ¼ inch long, no shorter than a grain of rice. </li>
              <li>Please resist coming beforehand as you will be wasting your time and money.</li>
            </ol>
        </div>
        <hr />
    
        <div className="et-card">
          <h3>What should I expect after treatment?</h3>
          <hr />  
            <ol>
              <li>After waxing, you will see minimal re-growth during the first 3 weeks. </li>
              <li>Your hair will grow slower and finer but initially you will need to have at least 4-5 waxing treatments for your hair to get into the same growth cycle for you to see better results.</li>
              <li>Results vary from person to person. If you have previously shaved, it may take up to 3 waxing treatments to get rid of stubby growth. </li>
              <li>Shaved hair is tougher, stronger and can be more painful to remove, so please resist shaving when possible.</li>
              <li>Waxing treatments are recommended every 4-5 weeks.  Waxing is not permanent. </li>
            </ol>
        </div>
        <hr />
    
        <div className="et-card">
          <h3>What should I wear to my appointment?</h3>
          <hr />
            <ol>
              <li>Please note that wax, lotions and oils will be used during your treatment.</li> 
              <li>It is recommended that you wear clean, old comfy/casual clothing, on the off chance the products used could stain your clothing. This also helps avoid irritation to the area waxed too.</li>
              <li>Soft towels are provided to ensure that your body is modestly covered at all times.</li>
              <li>Disposable towels are used for intimate treatments and disposable underwear is provided, when needed.</li>
            </ol>
          </div>
          <hr />
      
        <div className="et-card">
          <h3>Good to Know</h3>
          <hr />      
            <ul>
              <li>Please note that there will be a consultation prior to your treatment and all information given is confidential.</li>   
              <li>This process allows me to identify your suitability for treatments plus your needs and expectations of treatment.</li> 
              <li>You should disclose prior to your waxing any medical conditions, allergies and medications, as some treatments may not be appropriate for you.</li>
              <li>A GP letter will be necessary for some clients due to medical conditions. </li>
              <li>Clients that are using acne or steroid cream for the past six months’ on the area to be waxed that contains 'Accutane' cannot be waxed. This is because 'Accutane' thins the skin and therefore can tear the skin during the treatment.</li>
              <li>If you have not previously had a wax before then a simple test patch will be necessary prior to actual treatment.</li>
              <li>If you suffer from an unwanted reaction within 48 hours of the test patch then full treatment should not be undertaken.</li>
            </ul>
          </div>
      
    

        <div className="et-card">
          <p>Please note a client who is under 16 years old must have parental consent.</p>
        </div>
    </div>
  </>
  )
}
