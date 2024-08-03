import React, { useState, useEffect } from "react";
import { RouletteWheel } from "react-casino-roulette";
import "./React_Rouleta.css";
import "react-casino-roulette/dist/index.css";

import Coin1image from "../../../Assets/images/Rouleta/Coin1.png";
import Coin2image from "../../../Assets/images/Rouleta/Coin2.png";
import Coin3image from "../../../Assets/images/Rouleta/Coin3.png";
import Coin4image from "../../../Assets/images/Rouleta/Coin4.png";
import Coin5image from "../../../Assets/images/Rouleta/Coin5.png";
import CLEARimage from "../../../Assets/images/Rouleta/CLEAR.png";
import Spinimage from "../../../Assets/images/Rouleta/SPIN.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wheel = ({ onSpin, winningBet, bets }) => {
  const [start, setStart] = useState(false);
  const [bet_Price, setBet_Price] = useState(0);
  const [Multiplier_Number, setMultiplier_Number] = useState("");
  const [isReadyToSpin, setIsReadyToSpin] = useState(false);

  useEffect(() => {
    setIsReadyToSpin(
      !!bet_Price &&
        !!Multiplier_Number &&
        bet_Price > 0 &&
        Multiplier_Number > 0
    );
  }, [bet_Price, Multiplier_Number]);

  useEffect(() => {
    onSpin(winningBet, bet_Price, Multiplier_Number);
  }, [bet_Price, Multiplier_Number, winningBet, onSpin]);

  const handleCoinClick = (amount) => {
    // setBet_Price((prevBet) => prevBet + amount);
    setBet_Price((prevBet) => amount);
    setMultiplier_Number(amount.toString());
  };

  const doSpin = () => {
    if (Object.keys(bets).length === 0) {
      toast.error("You must place a bet before spinning!");
      return;
    }
    if (!isReadyToSpin) {
      toast.error("Bet price and multiplier must not be empty or zero!");
      return; // Prevents spin if not ready
    }
    const randomNumber = Math.floor(Math.random() * 37); // Generates a random number between 0 and 36
    onSpin(randomNumber.toString(), bet_Price, Multiplier_Number); // Passes the winning bet, bet_Price, and Multiplier_Number to the parent component
    setStart(true);
    setBet_Price(0);
    setMultiplier_Number("");
  };

  const handleClearDatabutton = () => {
    setMultiplier_Number("");
    setBet_Price(0);
  };

  return (
    <div>
      <ToastContainer />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <RouletteWheel
          start={start}
          winningBet={winningBet}
          withAnimation={true}
          addRest={true}
        />
      </div>
      <div className="w-100 d-flex" style={{ justifyContent: "center" }}>
        <button
          type="button"
          className="btn btn-danger w-50 mt-5"
          onClick={doSpin}
          disabled={!isReadyToSpin}
        >
          Spin
        </button>
      </div>
      <div className="Coin_box_div">
        <img
          style={{ cursor: "pointer" }}
          onClick={() => handleCoinClick(1)}
          src={Coin1image}
          alt="Coin1"
        />
        <img
          style={{ cursor: "pointer" }}
          onClick={() => handleCoinClick(5)}
          src={Coin2image}
          alt="Coin2"
        />
        <img
          style={{ cursor: "pointer" }}
          onClick={() => handleCoinClick(10)}
          src={Coin3image}
          alt="Coin3"
        />
        <img
          style={{ cursor: "pointer" }}
          onClick={() => handleCoinClick(100)}
          src={Coin4image}
          alt="Coin4"
        />
        <img
          style={{ cursor: "pointer" }}
          onClick={handleClearDatabutton}
          src={CLEARimage}
          alt="Clear"
        />
        <img
          style={{ cursor: "pointer" }}
          onClick={doSpin}
          src={Spinimage}
          alt="Spin"
        />
      </div>
      <div className="input_box_div">
        <input
          className="input_box_div_input"
          placeholder="bet_Price"
          name="bet_Price"
          type="number"
          value={bet_Price}
          onChange={(e) => setBet_Price(parseInt(e.target.value))}
        />
        <input
          placeholder="Multiplier"
          className="input_box_div_input"
          name="Multiplier"
          type="number"
          value={Multiplier_Number}
          min={0}
          max={10}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            if (!isNaN(value) && value >= 0 && value <= 10) {
              setMultiplier_Number(value.toString());
            }
          }}
        />
      </div>
    </div>
  );
};

export default Wheel;
