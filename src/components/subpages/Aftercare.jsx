import React from "react";
import { Jumbotron } from "reactstrap";

import "./styles/Aftercare.css";


export default function AfterCare() {

  return (
    <>
      <div className="wrapper">
        <Jumbotron className="jumbotron">
            <h1>Waxing Aftercare</h1>
        </Jumbotron>
      
        <div className="et-card">
          <h3>Time to Heal</h3>
          <hr />
            <ul>
              <li>Please allow your skin the time it needs after your treatment.</li>
              <li>Your skin will be temporarily sensitive after Waxing.  Slight soreness, small bumps and redness are common and normal temporary reactions. </li>
              <li>If you experience excessive redness and irritation, then apply a cold compress with soothing antiseptic lotion.</li>
              <li>Do take extra care of the waxed area within the first 24-48 hours.</li>
            </ul>
        </div>
        <hr />

        <div className="et-card">
          <h3>Please Avoid...</h3>
          <hr />
            <ul>
              <li>...hot baths, showers (cool to lukewarm only), saunas, hot tubs, stream or heat treatments.</li>
              <li>...exercise and sports.</li>
              <li>...swimming in chlorinated pools.</li>
              <li>...wearing tight clothing (tights for example) and wear loose fitting clothing to avoid friction and irritation.</li>
              <li>...sunbathing and sun beds and fake tan treatments.</li>
              <li>...any use of talcum powder, deodorants, body sprays, lotions or other products to the treated area.</li>
              <li>...touching the treated area with unwashed hands.</li>
              <li>...using make-up if you have had facial waxing.</li>
              <li>...use of harsh soaps or acid based products as these will irritate freshly waxed areas.</li>
              
            </ul>
        </div>
        <hr />

        <div className="et-card">
          <h3>Exfoliation</h3>
          <hr />
            <ul>
              <li>Please avoid exfoliation treatments for 2-3 days.  After this time, gently exfoliate the skin  and moisturise to keep skin soft and smooth to help new hairs to grow through easily.</li>
              <li>Gently use a body scrub or soft-bristled brush/specially designed mitt to exfoliate, it is a great way to rejuvenate and renew your skin.</li>
              <li>Choose a moisturising cream that contains antiseptic properties which will help to alleviate any irritation.</li>
              <li>Why not try out Perron Rigot’s recommended before and after waxing Kits ?  The Anti-Ingrown Hair Essentials Kit and Anti-Regrowth Essentials Kit are available at The Waxing Room.</li>
            </ul>
        </div>
        <hr />

        <div className="et-card">
          <h3>Do Remember ...</h3>
          <hr />
            <ul>
              <li>...to schedule your waxing appointments about a month or so apart.</li>
              <li>...to exfoliate and moisturise between visits.</li>
              <li>...not to shave for the best results!</li>
            </ul>
        </div>
        <hr />

        <div className="et-card">
          <p>Call or text me and I will get you scheduled for your next appointment.</p>
          <p>Thank you for choosing The Waxing Room, Chorleywood, Rickmansworth.</p>
        </div>
      </div>
    </>
  )
}