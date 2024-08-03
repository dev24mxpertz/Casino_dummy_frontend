import React from "react";
import "./React_Rouleta.css";
import RouletaGame from "./RouletaGame";
import Chatbox from "../SlotMachine/Chatbox";

function Rouleta() {
  return (
    <>
      <div className="React_Rouleta_div">
        <div className="React_Rouleta_display">
          <RouletaGame />
          <Chatbox />
        </div>
      </div>
    </>
  );
}

export default Rouleta;
