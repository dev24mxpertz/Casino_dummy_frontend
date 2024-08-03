import React, { useState, useEffect } from "react";
import { RouletteWheel } from "react-casino-roulette";
import "./React_Rouleta.css";
import "react-casino-roulette/dist/index.css";
import Coin1image from "../../Assets/Rouleta/Coin1.png";
import Coin2image from "../../Assets/Rouleta/Coin2.png";
import Coin3image from "../../Assets/Rouleta/Coin3.png";
import Coin4image from "../../Assets/Rouleta/Coin4.png";
import Coin5image from "../../Assets/Rouleta/Coin5.png";
import CLEARimage from "../../Assets/Rouleta/CLEAR.png";
import Spinimage from "../../Assets/Rouleta/SPIN.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wheel = ({ onSpin, winningBet, bets, resetBets }) => {
  const [start, setStart] = useState(false);
  const [bet_Price, setBet_Price] = useState(0);
  const [Multiplier_Number, setMultiplier_Number] = useState(1);
  const [isReadyToSpin, setIsReadyToSpin] = useState(false);
  const [BetsWheel, setBetsWheel] = useState({});

  useEffect(() => {
    setIsReadyToSpin(
      !!bet_Price &&
        !!Multiplier_Number &&
        !!Multiplier_Number &&
        bet_Price > 0 &&
        Multiplier_Number > 0 &&
        Object.keys(BetsWheel).length > 0
    );
  }, [bet_Price, Multiplier_Number, BetsWheel]);

  // console.log(bets, "----------------------bets-*--------");
  // console.log(BetsWheel, "--------------BetsWheel");

  useEffect(() => {
    setBetsWheel(bets);
  }, [bets]);

  useEffect(() => {
    if (resetBets) {
      setBet_Price(0);
      setMultiplier_Number(1);
    }
  }, [resetBets]);

  useEffect(() => {
    onSpin(winningBet, bet_Price, Multiplier_Number);
  }, [bet_Price, Multiplier_Number, winningBet]);

  const handleCoinClick = (amount) => {
    setBet_Price((prevBet) => amount);
  };

  const doSpin = () => {
    if (!isReadyToSpin) {
      toast.error("Bet price and bet Placed must not be zero or empty!");
      return;
    }
    const randomNumber = Math.floor(Math.random() * 37);
    onSpin(randomNumber.toString(), bet_Price, Multiplier_Number);
    setStart(true);
    setMultiplier_Number(1);
  };

  const handleClearDatabutton = () => {
    setMultiplier_Number(1);
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
              setMultiplier_Number(value);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Wheel;
