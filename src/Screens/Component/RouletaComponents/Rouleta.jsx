import React from "react";
import "./React_Rouleta.css";
import RouletaGame from "./RouletaGame";
import RouletaChat from "./RouletaChat";

function Rouleta() {
    return (
      <>
        <div className="React_Rouleta_div">
          <div className="React_Rouleta_display">
            <RouletaGame />
            <RouletaChat/>
          </div>
        </div>
      </>
    );
}

export default Rouleta;
