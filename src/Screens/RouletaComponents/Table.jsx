// import { useState, useEffect } from "react";
// import { RouletteTable } from "react-casino-roulette";
// import "react-casino-roulette/dist/index.css";
// import { toast } from "react-toastify";
// import "./React_Rouleta.css";

// const numberToDataURL = (number) => {
//   const canvas = document.createElement("canvas");
//   const ctx = canvas.getContext("2d");
//   canvas.width = 100;
//   canvas.height = 100;
//   ctx.fillStyle = "#000000";
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
//   ctx.strokeStyle = "orange";
//   ctx.lineWidth = 25;
//   ctx.setLineDash([50, 50]);
//   ctx.strokeRect(0, 0, canvas.width, canvas.height);
//   ctx.fillStyle = "#FFFFFF";
//   ctx.font = "40px Arial";
//   ctx.textAlign = "center";
//   ctx.textBaseline = "middle";
//   ctx.fillText(number, canvas.width / 2, canvas.height / 2);

//   return canvas.toDataURL("image/png");
// };

// export const Table = ({
//   onBetsChange,
//   resetBets,
//   betPrice,
//   winningBet,
//   onResetBets,
//   onBetAmountChange, // New prop to pass Betted_Amount to parent
// }) => {
//   const [bets, setBets] = useState({});
//   const [Betted_Amount, setBetted_Amount] = useState(0);
//   const [dynamicNumber, setDynamicNumber] = useState(0);

//   useEffect(() => {
//     onBetsChange(bets);
//   }, [bets, onBetsChange]);

//   useEffect(() => {
//     if (winningBet === "-1" && resetBets) {
//       onResetBets();
//       setBets({});
//       setBetted_Amount(0);
//     }
//   }, [winningBet, resetBets, onResetBets]);

//   useEffect(() => {
//     if (resetBets) {
//       setBets({});
//       setBetted_Amount(0);
//     }
//   }, [resetBets]);

//   useEffect(() => {
//     handleIcon(betPrice);
//   }, [betPrice]);

//   const handleIcon = (betPrice) => {
//     setDynamicNumber(betPrice);
//   };

//   const handleBet = (betData) => {
//     if (betPrice === 0) {
//       setBets({});
//       toast.error(
//         "Please set a bet amount to place a bet. Currently, you are trying to bet zero."
//       );
//       return;
//     }

//     const { id } = betData;
//     const currentBet = bets[id] ? bets[id].totalBet + betPrice : betPrice;

//     const newDataURL = numberToDataURL(currentBet);
//     setBets((prevState) => ({
//       ...prevState,
//       [id]: {
//         icon: newDataURL,
//         totalBet: currentBet,
//       },
//     }));

//     setBetted_Amount((prevAmount) => {
//       const newAmount = prevAmount + betPrice;
//       if (typeof onBetAmountChange === "function") {
//         onBetAmountChange(newAmount);
//       }
//       return newAmount;
//     });
//   };

//   const renderBetIcon = (bet) => {
//     return (
//       <div
//         className="bet"
//         style={{ backgroundImage: `url(${bet.icon})` }}
//       ></div>
//     );
//   };

//   return (
//     <div style={{ width: "100%", padding: "20px" }}>
//       <RouletteTable
//         bets={bets}
//         onBet={handleBet}
//         renderBetIcon={renderBetIcon}
//       />
//     </div>
//   );
// };

// export default Table;

import { useState, useEffect } from "react";
import { RouletteTable } from "react-casino-roulette";
import "react-casino-roulette/dist/index.css";
import { toast } from "react-toastify";
import "./React_Rouleta.css";

const numberToDataURL = (number) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 100;
  canvas.height = 100;
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "orange";
  ctx.lineWidth = 25;
  ctx.setLineDash([50, 50]);
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "40px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(number, canvas.width / 2, canvas.height / 2);

  return canvas.toDataURL("image/png");
};

export const Table = ({
  onBetsChange,
  resetBets,
  betPrice,
  winningBet,
  onResetBets,
  onBetAmountChange, // New prop to pass Betted_Amount to parent
}) => {
  const [bets, setBets] = useState({});
  const [Betted_Amount, setBetted_Amount] = useState(0);
  const [dynamicNumber, setDynamicNumber] = useState(0);

  useEffect(() => {
    onBetsChange(bets);
  }, [bets, onBetsChange]);

  useEffect(() => {
    if (winningBet === "-1" && resetBets) {
      onResetBets();
      setBets({});
      setBetted_Amount(0);
    }
  }, [winningBet, resetBets, onResetBets]);

  useEffect(() => {
    if (resetBets) {
      setBets({});
      setBetted_Amount(0);
      onResetBets(); // Call this to reset the state in the parent component
    }
  }, [resetBets]);
  
  useEffect(() => {
    handleIcon(betPrice);
  }, [betPrice]);

  const handleIcon = (betPrice) => {
    setDynamicNumber(betPrice);
  };

  const handleBet = (betData) => {
    if (betPrice === 0) {
      setBets({});
      toast.error(
        "Please set a bet amount to place a bet. Currently, you are trying to bet zero."
      );
      return;
    }

    const { id } = betData;
    const currentBet = bets[id] ? bets[id].totalBet + betPrice : betPrice;

    const newDataURL = numberToDataURL(currentBet);
    setBets((prevState) => ({
      ...prevState,
      [id]: {
        icon: newDataURL,
        totalBet: currentBet,
      },
    }));

    setBetted_Amount((prevAmount) => {
      const newAmount = prevAmount + betPrice;
      if (typeof onBetAmountChange === "function") {
        onBetAmountChange(newAmount);
      }
      return newAmount;
    });
  };

  const renderBetIcon = (bet) => {
    return (
      <div
        className="bet"
        style={{ backgroundImage: `url(${bet.icon})` }}
      ></div>
    );
  };

  return (
    <div style={{ width: "100%", padding: "20px" }}>
      <RouletteTable
        bets={bets}
        onBet={handleBet}
        renderBetIcon={renderBetIcon}
      />
    </div>
  );
};

export default Table;
