// import React, { useEffect, useState, useCallback } from "react";
// import "./React_Rouleta.css";
// import Wheel from "./Wheel";
// import Table from "./Table";

// function RouletaGame() {
//   const [winningBet, setWinningBet] = useState("-1");
//   const [bet_Price, setBet_Price] = useState(0);
//   const [Multiplier_Number, setMultiplier_Number] = useState();
//   const [bets, setBets] = useState({});
//   const [Total_Amount_Userhave, setTotal_Amount_Userhave] = useState(5000);
//   const [Total_Amount_Bets, setTotal_Amount_Bets] = useState(0);
//   const [resetBets, setResetBets] = useState(false);
//   const [Betted_Amount, setBetted_Amount] = useState(0); // State to hold Betted_Amount

//   const handleSpin = (winningBet, betPrice, multiplierNumber) => {
//     setWinningBet(winningBet);
//     setBet_Price(betPrice);
//     setMultiplier_Number(multiplierNumber);
//   };

//   const handleTotalAmountBet = useCallback(() => {
//     if (
//       bet_Price > 0 &&
//       Multiplier_Number > 0 &&
//       Object.keys(bets).length > 0
//     ) {
//           // setTotal_Amount_Bets((PrevState) => PrevState + Betted_Amount);
//       setTotal_Amount_Bets((PrevState) => PrevState + bet_Price);
//       // setTotal_Amount_Userhave(5000 - Total_Amount_Bets);
//       if(Total_Amount_Bets === 0){
//         setTotal_Amount_Userhave(5000  - (bet_Price));
//       }
//       else{
//         setTotal_Amount_Userhave(5000 - Total_Amount_Bets);
//       }
//     } else {
//       setTotal_Amount_Bets(0);
//     }
//   }, [bet_Price, Multiplier_Number, bets, Betted_Amount, Total_Amount_Bets]);

//   console.log(Betted_Amount, "---------BettedAmount");
//   console.log(Total_Amount_Bets, "---------Total_Amount_Userhave");
//   console.log(Total_Amount_Userhave, "---------Total_Amount_Userhave");

//   useEffect(() => {
//     handleTotalAmountBet();
//   }, [bet_Price, Multiplier_Number, bets, Betted_Amount]);

//   const handleBetsChange = useCallback(
//     (newBets) => {
//       setBets(newBets);
//     },
//     []
//   );

//   const handleResetBets = () => {
//     setResetBets(false);
//   };

//   const handleBetAmountChange = useCallback(
//     (amount) => {
//       setBetted_Amount(amount);
//     },
//     []
//   );

//   return (
//     <>
//       <div className="Rouleta_Game_main_div">
//         <div className="Rouleta_Game_Game_div">
//           <div className="Rouleta_Game_Board_div">
//             <Wheel
//               onSpin={handleSpin}
//               winningBet={winningBet}
//               betPrice={bet_Price}
//               multiplierNumber={Multiplier_Number}
//               bets={bets}
//               Betted_Amount={Betted_Amount}
//             />
//           </div>
//           <div className="Rouleta_Game_DashBoard">
//             <Table
//               betPrice={bet_Price}
//               onBetsChange={handleBetsChange}
//               resetBets={resetBets}
//               onResetBets={handleResetBets}
//               onBetAmountChange={handleBetAmountChange} // Pass callback to Table component
//             />
//             <p className="Total_Amount_Userhave_style">
//               Total Amount You Have in Your Wallet :{" "}
//               <span
//                 style={{
//                   color: "#fdbe1b",
//                   fontSize: "20px",
//                   marginLeft: "10px",
//                 }}
//               >
//                 ${Total_Amount_Userhave}
//               </span>
//             </p>
//             <p className="Total_Amount_Userhave_style">
//               Total Amount of bet You Have Placed yet :{" "}
//               <span
//                 style={{
//                   color: "#fdbe1b",
//                   fontSize: "20px",
//                   marginLeft: "10px",
//                 }}
//               >
//                 ${Total_Amount_Bets}
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default RouletaGame;

import React, { useEffect, useState, useCallback } from "react";
import "./React_Rouleta.css";
import Wheel from "./Wheel";
import Table from "./Table";

function RouletaGame() {
  const [winningBet, setWinningBet] = useState("-1");
  const [bet_Price, setBet_Price] = useState(0);
  const [Multiplier_Number, setMultiplier_Number] = useState();
  const [bets, setBets] = useState({});
  const [Total_Amount_Userhave, setTotal_Amount_Userhave] = useState(5000);
  const [Total_Amount_Bets, setTotal_Amount_Bets] = useState(0);
  const [resetBets, setResetBets] = useState(false);
  const [Betted_Amount, setBetted_Amount] = useState(0); // State to hold Betted_Amount

  const [FormData, setFormData] = useState({
    bet_Price: 0,
  });

  const handleSpin = (winningBet, betPrice, multiplierNumber) => {
    setWinningBet(winningBet);

    setFormData((prevState) => ({ ...prevState, bet_Price: betPrice }));
    // setBet_Price(betPrice);
    setMultiplier_Number(multiplierNumber);
  };

  const handleTotalAmountBet = useCallback(() => {
    if (
      FormData.bet_Price > 0 &&
      Multiplier_Number > 0 &&
      Object.keys(bets).length > 0
    ) {
      // setTotal_Amount_Bets((PrevState) => PrevState + Betted_Amount);
      setTotal_Amount_Bets((PrevState) => PrevState + FormData.bet_Price);
      // setTotal_Amount_Userhave(5000 - Total_Amount_Bets);
      if (Total_Amount_Bets === 0) {
        setTotal_Amount_Userhave(5000 - FormData.bet_Price);
      } else {
        setTotal_Amount_Userhave(5000 - Total_Amount_Bets);
      }
    } else {
      setTotal_Amount_Bets(0);
    }
  }, [bet_Price, Multiplier_Number, bets, Betted_Amount, Total_Amount_Bets]);

  // console.log(Betted_Amount, "---------BettedAmount");
  // console.log(Total_Amount_Bets, "---------Total_Amount_Userhave");
  // console.log(Total_Amount_Userhave, "---------Total_Amount_Userhave");
  // FormData
  console.log(FormData, "---------FormData");

  useEffect(() => {
    handleTotalAmountBet();
  }, [bet_Price, Multiplier_Number, bets, Betted_Amount]);

  const handleBetsChange = useCallback((newBets) => {
    setBets(newBets);
  }, []);

  const handleResetBets = () => {
    setResetBets(false);
  };

  const handleBetAmountChange = useCallback((amount) => {
    setBetted_Amount(amount);
  }, []);

  return (
    <>
      <div className="Rouleta_Game_main_div">
        <div className="Rouleta_Game_Game_div">
          <div className="Rouleta_Game_Board_div">
            <Wheel
              onSpin={handleSpin}
              winningBet={winningBet}
              betPrice={bet_Price}
              multiplierNumber={Multiplier_Number}
              bets={bets}
              Betted_Amount={Betted_Amount}
            />
          </div>
          <div className="Rouleta_Game_DashBoard">
            <Table
              betPrice={FormData.bet_Price}
              onBetsChange={handleBetsChange}
              resetBets={resetBets}
              onResetBets={handleResetBets}
              onBetAmountChange={handleBetAmountChange} // Pass callback to Table component
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
                ${Total_Amount_Userhave}
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
                ${Total_Amount_Bets}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RouletaGame;
