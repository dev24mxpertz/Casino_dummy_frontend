// import React, { useEffect, useState, useCallback } from "react";
// import "./React_Rouleta.css";
// import Wheel from "./Wheel";
// import Table from "./Table";

// function RouletaGame() {
//   const [resetBets, setResetBets] = useState(false);
//   const [formData, setFormData] = useState({
//     bet_Price: 0,
//     Multiplier_Number: 0,
//     Total_Amount_Userhave: 5000,
//     Total_Amount_Bets: 0,
//     Betted_Amount: 0,
//     winningBet: "-1",
//     bets: {},
//   });

//   const handleSpin = (winningBet, betPrice, multiplierNumber) => {
//     console.log("handle spin running with the flow  --------------------------")
//     setFormData((prevState) => ({
//       ...prevState,
//       bet_Price: betPrice,
//       Multiplier_Number: multiplierNumber,
//       winningBet: winningBet,
//     }));
//   };

//   console.log(formData , "---------------FormData-------");

//   const handleBetsChange = useCallback((newBets) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       bets: newBets,
//     }));
//   }, []);

//   const handleResetBets = () => {
//     setResetBets(false);
//   };

//   const handleBetAmountChange = useCallback((amount) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       Betted_Amount: amount,
//       Total_Amount_Userhave: 5000 - amount,
//       Total_Amount_Bets:amount
//     }));
//   }, []);

//   return (
//     <div className="Rouleta_Game_main_div">
//       <div className="Rouleta_Game_Game_div">
//         <div className="Rouleta_Game_Board_div">
//           <Wheel
//             onSpin={handleSpin}
//             winningBet={formData.winningBet}
//             betPrice={formData.bet_Price}
//             multiplierNumber={formData.Multiplier_Number}
//             bets={formData.bets}
//             Betted_Amount={formData.Betted_Amount}
//           />
//         </div>
//         <div className="Rouleta_Game_DashBoard">
//           <Table
//             betPrice={formData.bet_Price}
//             onBetsChange={handleBetsChange}
//             resetBets={resetBets}
//             onResetBets={handleResetBets}
//             onBetAmountChange={handleBetAmountChange} // Pass callback to Table component
//           />
//           <p className="Total_Amount_Userhave_style">
//             Total Amount You Have in Your Wallet :{" "}
//             <span
//               style={{
//                 color: "#fdbe1b",
//                 fontSize: "20px",
//                 marginLeft: "10px",
//               }}
//             >
//               ${formData.Total_Amount_Userhave}
//             </span>
//           </p>
//           <p className="Total_Amount_Userhave_style">
//             Total Amount of bet You Have Placed yet :{" "}
//             <span
//               style={{
//                 color: "#fdbe1b",
//                 fontSize: "20px",
//                 marginLeft: "10px",
//               }}
//             >
//               ${formData.Total_Amount_Bets}
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RouletaGame;

import React, { useEffect, useState, useCallback } from "react";
import "./React_Rouleta.css";
import Wheel from "./Wheel";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { Fetch_Rouletta_Data } from "../../store/Actions/GameActions";

function RouletaGame() {
  const [resetBets, setResetBets] = useState(false);
  const [formData, setFormData] = useState({
    bet_Price: 0,
    Multiplier_Number: 0,
    Total_Amount_Userhave: 5000,
    Total_Amount_Bets: 0,
    Betted_Amount: 0,
    winningBet: "-1",
    bets: {},
  });

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [showCrashMessage, setShowCrashMessage] = useState(false);
  const [FetchedData, setFetchedData] = useState({});

  const handleSpin = (winningBet, betPrice, multiplierNumber) => {
    setFormData((prevState) => ({
      ...prevState,
      bet_Price: betPrice,
      Multiplier_Number: multiplierNumber,
      winningBet: winningBet,
    }));
  };

  console.log(formData, "---------------FormData-------");

  const handleBetsChange = useCallback((newBets) => {
    setFormData((prevState) => ({
      ...prevState,
      bets: newBets,
    }));
  }, []);

  const handleResetBets = () => {
    setResetBets(false);
  };

  const handleBetAmountChange = useCallback((amount) => {
    setFormData((prevState) => ({
      ...prevState,
      Betted_Amount: amount,
      Total_Amount_Userhave: 5000 - amount,
      // Total_Amount_Userhave: prevState.Total_Amount_Userhave - prevState.bet_Price,
      Total_Amount_Bets: amount,
    }));
  }, []);

  useEffect(() => {
    if (formData.winningBet !== "-1") {
      calculateWinningAmount();
    }
  }, [formData.winningBet]);

  const calculateWinningAmount = () => {
    const betKeys = Object.keys(formData.bets);
    let winningAmount = 0;

    const winningBetNumber = Number(formData.winningBet);

    let winingBets = {};

    betKeys.forEach((key) => {
      const bet = formData.bets[key];
      console.log(bet, "----------------bet ");
      console.log(winningAmount, "at doze ");

      switch (key) {
        case "1ST_COLUMN":
          let winningNumbers1 = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
          if (winningNumbers1.includes(winningBetNumber)) {
            winningAmount += bet.totalBet * 0.9;
            winingBets = { ...winingBets, [key]: bet };
          }
          break;

        case "2ND_COLUMN":
          let winningNumbers2 = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
          if (winningNumbers2.includes(winningBetNumber)) {
            winningAmount += bet.totalBet * 0.9;
            winingBets = { ...winingBets, [key]: bet };
          }
          break;

        case "3RD_COLUMN":
          let winningNumbers3 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
          if (winningNumbers3.includes(winningBetNumber)) {
            winningAmount += bet.totalBet * 0.9;
            winingBets = { ...winingBets, [key]: bet };
          }
          break;

        case "1ST_DOZEN":
          let winningNumbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
          if (winningNumbers4.includes(winningBetNumber)) {
            winningAmount += bet.totalBet * 0.9;
            winingBets = { ...winingBets, [key]: bet };
          }
          break;

        case "2ND_DOZEN":
          let winningNumbers5 = [
            13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
          ];
          if (winningNumbers5.includes(winningBetNumber)) {
            winningAmount += bet.totalBet * 0.9;
            winingBets = { ...winingBets, [key]: bet };
          }
          break;

        case "3RD_DOZEN":
          let winningNumbers6 = [
            25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
          ];
          if (winningNumbers6.includes(winningBetNumber)) {
            winningAmount += bet.totalBet * 0.9;
            winingBets = { ...winingBets, [key]: bet };
          }
          break;

        case "1_TO_18":
          let winningNumbers7 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
          ];
          if (winningNumbers7.includes(winningBetNumber)) {
            winningAmount += bet.totalBet * 0.9;
            winingBets = { ...winingBets, [key]: bet };
          }
          break;

        case "19_TO_36":
          let winningNumbers8 = [
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
            36,
          ];
          if (winningNumbers8.includes(winningBetNumber)) {
            winningAmount += bet.totalBet * 0.9;
            winingBets = { ...winingBets, [key]: bet };
          }
          break;

        case "EVEN":
          let winningNumbers9 = [
            2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36,
          ];
          if (winningNumbers9.includes(winningBetNumber)) {
            winningAmount += bet.totalBet * 0.9;
            winingBets = { ...winingBets, [key]: bet };
          }
          break;

        case "ODD":
          let winningNumbers10 = [
            1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35,
          ];
          if (winningNumbers10.includes(winningBetNumber)) {
            winningAmount += bet.totalBet * 0.9;
            winingBets = { ...winingBets, [key]: bet };
          }
          break;

        case "RED":
          let winningNumbers11 = [
            1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
          ];
          if (winningNumbers11.includes(winningBetNumber)) {
            winningAmount += bet.totalBet * 0.9;
            winingBets = { ...winingBets, [key]: bet };
          }
          break;

        case "BLACK":
          let winningNumbers12 = [
            2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
          ];
          if (winningNumbers12.includes(winningBetNumber)) {
            winningAmount += bet.totalBet * 0.9;
            winingBets = { ...winingBets, [key]: bet };
          }
          break;

        default:
          if (key.includes("-")) {
            const numbers = key.split("-").map((num) => parseInt(num));
            if (numbers.includes(winningBetNumber)) {
              winningAmount += bet.totalBet * formData.Multiplier_Number;
              winingBets = { ...winingBets, [key]: bet };
            }
          } else {
            const number = parseInt(key);
            if (!isNaN(number) && number === winningBetNumber) {
              winningAmount += bet.totalBet * formData.Multiplier_Number;
              winingBets = { ...winingBets, [key]: bet };
            }
          }
          break;
      }

      let updatedTotalAmount = formData.Total_Amount_Userhave;
      updatedTotalAmount += winningAmount;
      setFormData((prevState) => ({
        ...prevState,
        Total_Amount_Userhave: updatedTotalAmount,
      }));
    });

    // console.log(`Winning Amount: ${winningAmount}`);

    setTimeout(() => {
      console.log(`Timeout Euns--------------`);
      ToFetchData(winningAmount, winingBets);
    }, 3000);
  };

  const ToFetchData = (winningAmount, winingBets) => {
    let Datato_Fetched;
    let updatedTotalAmount = formData.Total_Amount_Userhave;
    const objectLength = Object.keys(winingBets).length;

    console.log(winingBets, "winingBets------------------");
    if (winningAmount > 0) {
      updatedTotalAmount += winningAmount;
      Datato_Fetched = {
        ...formData,
        userID: user?._id,
        Winning_amount: winningAmount,
        Lossing_Amount:
          formData.Betted_Amount - (formData.bet_Price + winningAmount),
        Total_Amount_Userhave: updatedTotalAmount,
        winingBets: { ...winingBets },
        Status: `${objectLength} bet win`,
      };
    } else {
      Datato_Fetched = {
        ...formData,
        userID: user?._id,
        Winning_amount: 0,
        Lossing_Amount: formData.Betted_Amount,
        Status: `${objectLength} bet win`,
        // Lossing_bets: Bets,
      };
    }
    setFetchedData((prevState) => ({
      ...prevState,
      ...Datato_Fetched,
    }));
    dispatch(Fetch_Rouletta_Data(Datato_Fetched));
    setShowCrashMessage(true);
    resetGame();
    console.log(Datato_Fetched, "Datato_Fetched--------------------");
  };

  const resetGame = () => {
    setFormData((prevState) => ({
      ...prevState,
      bet_Price: 0,
      Multiplier_Number: 0,
      // Total_Amount_Userhave: 5000,
      Total_Amount_Bets: 0,
      Betted_Amount: 0,
      winningBet: "-1",
      bets: {},
    }));
    setResetBets(true);
    setTimeout(() => {
      setShowCrashMessage(false);
    }, 5000);
  };

  console.log(
    FetchedData,
    "---------------------------------------FetchedData"
  );
  return (
    <div className="Rouleta_Game_main_div">
      <div className="Rouleta_Game_Game_div">
        <div className="Rouleta_Game_Board_div">
          <Wheel
            onSpin={handleSpin}
            winningBet={formData.winningBet}
            betPrice={formData.bet_Price}
            multiplierNumber={formData.Multiplier_Number}
            bets={formData.bets}
            resetBets={resetBets}
            Betted_Amount={formData.Betted_Amount}
          />
        </div>
        <div className="Rouleta_Game_DashBoard">
          <Table
            betPrice={formData.bet_Price}
            onBetsChange={handleBetsChange}
            resetBets={resetBets}
            onResetBets={handleResetBets}
            onBetAmountChange={handleBetAmountChange}
          />
          <p className="Total_Amount_Userhave_style">
            Total Amount You Have in Your Wallet :{" "}
            <span
              style={{
                color: "#fdbe1b",
                fontSize: "20px",
                marginLeft: "10px",
              }}
            >
              ${formData.Total_Amount_Userhave}
            </span>
          </p>
          <p className="Total_Amount_Userhave_style">
            Total Amount of bet You Have Placed yet :{" "}
            <span
              style={{
                color: "#fdbe1b",
                fontSize: "20px",
                marginLeft: "10px",
              }}
            >
              ${formData.Total_Amount_Bets}
            </span>
          </p>
        </div>
        {showCrashMessage &&
          (Object.keys(FetchedData).length > 0 ? (
            <div className="slot-message-container">
              <p style={{ textAlign: "center" }}>{`${FetchedData.winningBet} is the Wining number`}</p>
              <p style={{ textAlign: "center" }}>{FetchedData.Status}</p>
              <p style={{ textAlign: "center" }}>{`Total Betted Amount -  ${
                FetchedData.Betted_Amount
              }  on ${
                Object.keys(FetchedData.bets).length
              } No. of bets and You have won ${
                Object.keys(FetchedData.winingBets).length
              } No.of bets ,Your Wining Amount is ${
                FetchedData.Winning_amount
              }`}</p>
            </div>
          ) : (
            <></>
          ))}
      </div>
    </div>
  );
}

export default RouletaGame;
