import React from "react";
import { Jumbotron } from "reactstrap";

import PRLogo from "../../../public/images/sw-PerronRigot-logo.png";
import pr1 from "../../../public/images/products/nacree_blanche1.gif";
import pr2 from "../../../public/images/products/cristal-ocean1.png";
import pr3 from "../../../public/images/products/happy-cocktail-mojito.png";
import pr4 from "../../../public/images/products/euroblonde.png";
import pr5 from "../../../public/images/products/cristalline1.gif";
import pr6 from "../../../public/images/products/eurose3.gif";
import pr7 from "../../../public/images/products/visage2.png";
import pr8 from "../../../public/images/products/homme.png";
import pr9 from "../../../public/images/products/blue-lotion.png";
import pr10 from "../../../public/images/products/jasmin.png";
import pr11 from "../../../public/images/products/moistursing-milk.png";
import pr12 from "../../../public/images/products/refreshing-gel1.png";
import pr13 from "../../../public/images/products/pre-cooling-gel.png";


export default function PRProducts() {

  return(
    

    <div className="wrapper">
    
      <Jumbotron className="jumbotron">
        <img src={PRLogo} alt="Perron Rigot Logo"></img>
        <div className="about-pr">
      
        <p>
          Perron Rigot, Paris, is a French manufacturer of depilatory waxes used by beauty practitioners and salons the world over.<br />
          Their waxes literally “shrink wrap” the hair, removing the entire hair with its roots from the follicle thus leaving the skin undamaged. The luxurious products for pre and post waxing care from Perron Rigot give superior results.<br />
        </p>
      
        <hr />
        <h4>These are the waxes and products I use for treatments...</h4>
        <hr />
      </div>
      </Jumbotron>
      
      

      <div className="products">

        <div className="card">
          <div className="product-image">
            <img src={pr1} alt="Nacree Blanche strip wax"></img>
          </div>
          <hr />
            <h3 className="product-header">Nacree Blanche, Strip Wax</h3>
            <div className="product-description">
              <p>Off white colour, enriched with nourishing sweet almond oil. Smooth creamy texture.</p>
            </div>
          </div>

        <div className="card">
          <div className="product-image">
            <img src={pr2} alt="Cristal Ocean strip wax"></img>
          </div>
          <hr />
            <h3 className="product-header">Cristal Ocean, Strip Wax</h3>
            <div className="product-description">
              <p>Rosin-free, hypoallergenic, translucent blue colour, non fragranced.</p>
              <p>Developed for sensitive skins.</p>
            </div>
        </div>

        <div className="card">
          <div className="product-image">
            <img src={pr3} alt="Happy Cocktail Mojito, strip wax"></img>
          </div>
          <hr />
            <h3 className="product-header">Happy Cocktail Mojito, Strip Wax</h3>
            <div className="product-description">
              <p>Glittery mint-green colour, fluid texture. </p>
              <p>Contains essential oils of mint arvensis and lime. Refreshing and toning properties. Minty fragrance.</p>
            </div>
        </div>
      
        <div className="card">
          <div className="product-image">
            <img src={pr4} alt="Euroblonde, Non-strip wax"></img>
          </div>
          <hr />
            <h3 className="product-header">Euroblonde, Non-Strip Wax</h3>
            <div className="product-description">
              <p>Gold Glitter colour, honeyed and ultra fluid texture, non-fragranced.</p>
              <p>Suitable for all areas and hair types.</p>
            </div>
        </div>

        <div className="card">
          <div className="product-image">
            <img src={pr5} alt="Cristalline, Non-strip wax"></img>
          </div>
          <hr />
            <h3 className="product-header">Cristalline, Non-Strip Wax</h3>
            <div className="product-description">
              <p>Orange colour, rosin-free, anti-redness.</p>
              <p>Hypo-allergenic, ideal for sensitive areas.</p>
            </div>
        </div>

        <div className="card">
          <div className="product-image">
            <img src={pr6} alt="Eurose, Non-strip wax"></img>
          </div>
          <hr />
            <h3 className="product-header">Eurose, Non-Strip Wax</h3>
            <div className="product-description">
              <p>Rose colour, creamy and smooth texture.</p>
              <p>Suitable for all types of hair.</p>
            </div>
        </div>

        <div className="card">
          <div className="product-image">
            <img src={pr7} alt="Visage, Non-strip wax"></img>
          </div>
          <hr />
            <h3 className="product-header">Visage, Non-Strip Wax</h3>
            <div className="product-description">
              <p>Creamy texture, bright yellow colour.</p>
              <p>Ideal for facial areas.</p>
            </div>
        </div>

        <div className="card">
          <div className="product-image">
            <img src={pr8} alt="Homme, Non-strip wax"></img>
          </div>
          <hr />
            <h3 className="product-header">Homme, Non-Strip Wax</h3>
            <div className="product-description">
              <p>Metallic blue-green coloured wax. Tonic marine fragrance, ultra soft texture.</p>
              <p>Perfect for shoulders and chest.</p>
              <p>Especially suited for tough and difficult to remove hair.</p>
            </div>
        </div>

        <div className="card">
          <div className="product-image">
            <img src={pr9} alt="Blue lotion, Non-strip wax"></img>
          </div>
          <hr />
            <h3 className="product-header">Blue Lotion</h3>
            <div className="product-description">
              <p>Purifying lotion with organic cornflower water.</p>
              <p>Low alcohol, no paraben.</p>
            </div>
        </div>

        <div className="card">
          <div className="product-image">
            <img src={pr10} alt="Jasmine Oil, pre & post depilatory"></img>
          </div>
          <hr />
            <h3 className="product-header">Jasmine Oil, pre & post depilatory</h3>
            <div className="product-description">
              <p>Softening and protective properties.</p>
              <p>Contains refined mineral oil and jasmine scented.</p>
            </div>
        </div>

        <div className="card">
          <div className="product-image">
            <img src={pr11} alt="Moisturising Milk"></img>
          </div>
          <hr />
            <h3 className="product-header">Moisturising Milk</h3>
            <div className="product-description">
              <p>Rich, silk-textured moisturising lotion penetrates easily and leaves no oily film.</p>
            </div>
        </div>

        <div className="card">
          <div className="product-image">
            <img src={pr12} alt="Refreshing Gel"></img>
          </div>
          <hr />
            <h3 className="product-header">Refreshing Gel</h3>
            <div className="product-description">
              <p>Refreshing mentholated gel leaves no sticky residue.</p>
              <p>Contains honey and mimosa extracts.</p>
            </div>
        </div>

        <div className="card">
          <div className="product-image">
            <img src={pr13} alt="Pre-Cooling Gel"></img>
          </div>
          <hr />
            <h3 className="product-header">Pre-Cooling Gel</h3>
            <div className="product-description">
              <p>The Pre-Cooling Gel decreases the skin reactivity which reduces unpleasant sensations such as tingling and overheating for optimal and painless hair removal.</p>
              <p>Can be applied at home from 45 minutes to an hour before waxing. Suitable for most areas of the body particularly sensitive areas. Contains menthol so not suitable for pregnant women.</p>
            </div>
        </div>

      </div>
    </div>

  );
}