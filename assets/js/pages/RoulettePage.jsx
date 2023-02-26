import React, { useState } from "react";
import Wheel from "../components/Roulette";
import "./roulettepage.css";
import demicercle from './images/demi-cercle.png';
import background from './images/background.gif';


const data = [
  { option: "???", style: { textColor: "#FFFFFF" } },
  { option: "???", style: { textColor: "#FFFFFF" } },
  { option: "???", style: { textColor: "#FFFFFF" } },
  { option: "???", style: { textColor: "#FFFFFF" } },
];

const RoulettePage = (props) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [addData, setAddData] = useState("");

  return (
    <div className="roulette-page">
    <img className='demi-cercle' src={demicercle} />
    <img className='demi-cercle2' src={demicercle} />
    <img className='background-gif' src={background} />
      <h1>Rouroulette</h1>
      <table>
        <tr>
          <td>
            <div className="formulaire">
              <form method="post" name="contact">
                <div>
                  <label for="name">Ajouter votre valeur</label>
                  <input
                    type="text"
                    required
                    id="name"
                    name="name"
                    placeholder="Tu peux mettre ce que tu veux"
                  />
                </div>
                <div class="button">
                  <button id="button-submit" type="submit">
                    Ajouter
                  </button>
                </div>
              </form>
            </div>
          </td>
          <td>
            <div id="roulette">
              <Wheel
                mustSpin={mustSpin}
                prizeNumber={2}
                data={data}
                backgroundColors={["#ff8f43", "#70bbe0", "#0b3351", "#f9dd50"]}
                textColors={["#0b3351"]}
                outerBorderColor={"#eeeeee"}
                outerBorderWidth={10}
                innerBorderColor={"#30261a"}
                innerBorderWidth={0}
                innerRadius={0}
                radiusLineColor={"#eeeeee"}
                radiusLineWidth={8}
                fontSize={17}
                textDistance={60}
              />
              <div class="button">
                <button
                  id="button-submit"
                  className={"spin-button"}
                  onClick={() => setMustSpin(true)}
                >
                  TOURNER
                </button>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default RoulettePage;