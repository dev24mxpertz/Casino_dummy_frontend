// import React, { useState, useEffect } from 'react';
// import seven from '../../Assets/images/7.png';
// import bar from '../../Assets/images/bar.png';
// import cherry from '../../Assets/images/cherry.png';

// function Slotgame() {
//     const [balance, setBalance] = useState(847);
//     const [bet, setBet] = useState(10);
//     const [reels, setReels] = useState([
//         [cherry, seven, bar],
//         [bar, cherry, seven],
//         [seven, bar, cherry]
//     ]);
//     const [message, setMessage] = useState('');
//     const [spinning, setSpinning] = useState([false, false, false]);
//     const [showMessage, setShowMessage] = useState(false);
//     const [totalSpins, setTotalSpins] = useState(0);
//     const [wins, setWins] = useState(0);

//     const symbols = [cherry, bar, seven];

//     const getRandomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];

//     const getThreeRandomSymbols = () => {
//         return Array.from({ length: 3 }, getRandomSymbol);
//     };

//     // const handleSpin = () => {
//     //     if (balance < bet) {
//     //         showMessageForDuration('Insufficient balance!', 2000)
//     //         return;
//     //     }

//     //     setSpinning([true, true, true]);
//     //     setMessage('');
//     //     setBalance(balance - bet);
//     //     setTotalSpins(prev => prev + 1);

//     //     const spinInterval = 100;

//     //     const spin = setInterval(() => {
//     //         setReels([getThreeRandomSymbols(), getThreeRandomSymbols(), getThreeRandomSymbols()]);
//     //     }, spinInterval);

//     //     setTimeout(() => {
//     //         clearInterval(spin);
//     //         setSpinning([false, false, false]);
//     //         const newReels = [getThreeRandomSymbols(), getThreeRandomSymbols(), getThreeRandomSymbols()];
//     //         console.log('New Reels:', newReels); // Debugging output
//     //         setReels(newReels);

//     //         if (newReels[0][1] === newReels[1][1] && newReels[1][1] === newReels[2][1]) {
//     //             console.log('Winning Symbol:', newReels[0][1]); // Debugging output
//     //             setBalance(balance + bet * 10);
//     //             showMessageForDuration('You Win!', 2000);
//     //         } else {
//     //             showMessageForDuration('Better Luck Next Time!', 2000);
//     //         }

//     //         setSpinning([false, false, false]);
//     //     }, 3000);
//     // };

//     const handleSpin = () => {
//         if (balance < bet) {
//             showMessageForDuration('Insufficient balance!', 2000);
//             return;
//         }

//         setSpinning([true, true, true]);
//         setMessage('');
//         setBalance(balance - bet);
//         setTotalSpins(prev => prev + 1);

//         const spinInterval = 100;

//         const spin = setInterval(() => {
//             setReels([getThreeRandomSymbols(), getThreeRandomSymbols(), getThreeRandomSymbols()]);
//         }, spinInterval);

//         setTimeout(() => {
//             clearInterval(spin);
//             setSpinning([false, false, false]);

//             let newReels = [getThreeRandomSymbols(), getThreeRandomSymbols(), getThreeRandomSymbols()];

//             // Determine if the current spin should be a win
//             const shouldWin = Math.random() < 0.1 && wins < (totalSpins + 1) / 10;
//             if (shouldWin) {
//                 const winningSymbol = getRandomSymbol();
//                 newReels = [[winningSymbol, winningSymbol, winningSymbol], [winningSymbol, winningSymbol, winningSymbol], [winningSymbol, winningSymbol, winningSymbol]];
//                 setWins(prev => prev + 1);
//                 setBalance(balance + bet * 10);
//                 showMessageForDuration('You Win!', 2000);
//             } else {
//                 // Regular spin outcome
//                 if (newReels[0][1] === newReels[1][1] && newReels[1][1] === newReels[2][1]) {
//                     setBalance(balance + bet * 10);
//                     setWins(prev => prev + 1);
//                     showMessageForDuration('You Win!', 2000);
//                 } else {
//                     showMessageForDuration('Better Luck Next Time!', 2000);
//                 }
//             }

//             setReels(newReels);
//             setSpinning([false, false, false]);
//         }, 3000);
//     };

//     const showMessageForDuration = (msg, duration) => {
//         setMessage(msg);
//         setShowMessage(true);
//         setTimeout(() => {
//             setShowMessage(false);
//         }, duration);
//     };

//     const handleBetChange = (e) => {
//         const value = parseInt(e.target.value, 10);
//         setBet(value >= 10 ? value : 10);
//     };

//     const [isAutomatic, setIsAutomatic] = React.useState(false);

//     const toggleAutomatic = () => {
//         setIsAutomatic(!isAutomatic);
//     };

//     useEffect(() => {
//         let autoSpinInterval;
//         if (isAutomatic) {
//             autoSpinInterval = setInterval(handleSpin, 5000);
//         } else {
//             clearInterval(autoSpinInterval);
//         }
//         return () => clearInterval(autoSpinInterval);
//     }, [isAutomatic, balance, bet]);

//     return (
//         <div className='w-100 d-flex justify-content-center border-gradient'>
//             <div className="slot-machine ">
//                 <div className='d-flex justify-content-between flex-column'>
//                     <div className='d-flex flex-column align-items-center'>
//                         <div className='m-5 mt-2'>
//                             <div className="slotbalance">Current Balance: {balance}</div>
//                             <div className="slotbet">
//                                 Current Bet: <input type="tel" disabled='true' value={bet} onChange={handleBetChange} />
//                             </div>
//                         </div>
//                         <div className='slot-reel-bg'>
//                             <div className="slot-reels">
//                                 {reels.map((reel, index) => (
//                                     <div className='cvc'>
//                                         <div key={index} className={`slot-reel ${spinning[index] ? `slot-spin-reel-${index + 1}` : ''}`}>
//                                             {reel.map((symbol, symIndex) => (
//                                                 <div key={symIndex} className="slot-symbol"><img className='reel-img' width={55} height={70} src={symbol} alt="" /></div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className='w-100 justify-content-center d-flex mb-4'>
//                             <div className="slot-setbet-box">
//                                 <div className="w-100">
//                                     <div className="slot-setbet-box-inner-box">
//                                         <input className="slot-bet-input" type="tel" defaultValue={10} value={bet} onChange={handleBetChange} />
//                                         <div className="slot-bet-container">
//                                             <div className="slot-line" />
//                                             <div className="slot-line-bet">SET BET</div>
//                                         </div>
//                                     </div>
//                                     <div className="slot-line-2" />
//                                     <img onClick={handleSpin} loading="lazy" src={require('../../Assets/images/roll.png')} className="slot-img-2" />
//                                     <img onClick={toggleAutomatic} loading="lazy" src={require('../../Assets/images/automatic.png')} className="slot-img-2" />
//                                 </div>
//                             </div>
//                         </div>
//                         {showMessage && <div className="slot-message-container">{message}</div>}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Slotgame;

import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import seven from "../../Assets/images/7.png";
import bar from "../../Assets/images/bar.png";
import cherry from "../../Assets/images/cherry.png";

const Slotgame = forwardRef(({
  betAmount,
  onBetChange,
  TotalBetAmount,
  onTotalAmountChange,
  onSpinComplete, // Add this prop
}, ref) => {
  const [balance, setBalance] = useState(TotalBetAmount);
  const [bet, setBet] = useState(betAmount);
  const [reels, setReels] = useState([
    [cherry, seven, bar],
    [bar, cherry, seven],
    [seven, bar, cherry],
  ]);
  const [message, setMessage] = useState("");
  const [spinning, setSpinning] = useState([false, false, false]);
  const [showMessage, setShowMessage] = useState(false);
  const [totalSpins, setTotalSpins] = useState(0);
  const [wins, setWins] = useState(0);

  const symbols = [cherry, bar, seven];

  const getRandomSymbol = () =>
    symbols[Math.floor(Math.random() * symbols.length)];

  const getThreeRandomSymbols = () => {
    return Array.from({ length: 3 }, getRandomSymbol);
  };

  const handleSpin = () => {
    if (balance < bet) {
      showMessageForDuration("Insufficient balance!", 2000);
      return;
    }

    setSpinning([true, true, true]);
    setMessage("");
    const newBalance = balance - bet;
    setBalance(newBalance);
    onTotalAmountChange(newBalance);
    setTotalSpins((prev) => prev + 1);

    const spinInterval = 100;

    const spin = setInterval(() => {
      setReels([
        getThreeRandomSymbols(),
        getThreeRandomSymbols(),
        getThreeRandomSymbols(),
      ]);
    }, spinInterval);


      
    setTimeout(() => {
      clearInterval(spin);
      setSpinning([false, false, false]);

      let newReels = [
        getThreeRandomSymbols(),
        getThreeRandomSymbols(),
        getThreeRandomSymbols(),
      ];

      // Determine if the current spin should be a win
      const shouldWin = Math.random() < 0.1 && wins < (totalSpins + 1) / 10;
      let status;
      if (shouldWin) {
        const winningSymbol = getRandomSymbol();
        newReels = [
          [winningSymbol, winningSymbol, winningSymbol],
          [winningSymbol, winningSymbol, winningSymbol],
          [winningSymbol, winningSymbol, winningSymbol],
        ];
        const winAmount = balance + bet * 0.9;
        setBalance(winAmount);
        onTotalAmountChange(winAmount);
        setWins((prev) => prev + 1);
        showMessageForDuration("You Win!", 2000);
        status = "Win";
      } else {
        // Regular spin outcome
        if (
          newReels[0][1] === newReels[1][1] &&
          newReels[1][1] === newReels[2][1]
        ) {
          const winAmount = balance + bet * 0.9;
          setBalance(winAmount);
          onTotalAmountChange(winAmount);
          setWins((prev) => prev + 1);
          showMessageForDuration("You Win!", 2000);
          status = "Win";
        } else {
          showMessageForDuration("Better Luck Next Time!", 2000);
          const LossAmount = balance - bet;
          onTotalAmountChange(LossAmount);
          status = "Loss";
        }
      }

      setReels(newReels);
      setSpinning([false, false, false]);
      onSpinComplete(status); // Pass the status to the parent component
    }, 3000);
  };

  const showMessageForDuration = (msg, duration) => {
    setMessage(msg);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, duration);
  };

  const handleBetChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setBet(value >= 10 ? value : 10);
    onBetChange(value >= 10 ? value : 10); // Update parent component
  };

  const [isAutomatic, setIsAutomatic] = useState(false);

  const toggleAutomatic = () => {
    setIsAutomatic(!isAutomatic);
  };

  useEffect(() => {
    let autoSpinInterval;
    if (isAutomatic) {
      autoSpinInterval = setInterval(handleSpin, 5000);
    } else {
      clearInterval(autoSpinInterval);
    }
    return () => clearInterval(autoSpinInterval);
  }, [isAutomatic, balance, bet]);

  useEffect(() => {
    setBet(betAmount);
  }, [betAmount]);

  useImperativeHandle(ref, () => ({
    spin: handleSpin
  }));

  return (
    <div className="w-100 d-flex justify-content-center border-gradient">
      <div className="slot-machine ">
        <div className="d-flex justify-content-between flex-column">
          <div className="d-flex flex-column align-items-center">
            <div className="m-5 mt-2">
              <div className="slotbalance">Current Balance: {balance}</div>
              <div className="slotbet">
                Current Bet:{" "}
                <input
                  type="tel"
                  disabled="true"
                  value={bet}
                  onChange={handleBetChange}
                />
              </div>
            </div>
            <div className="slot-reel-bg">
              <div className="slot-reels">
                {reels.map((reel, index) => (
                  <div className="cvc" key={index}>
                    <div
                      className={`slot-reel ${spinning[index] ? `slot-spin-reel-${index + 1}` : ""
                        }`}
                    >
                      {reel.map((symbol, symIndex) => (
                        <div key={symIndex} className="slot-symbol">
                          <img
                            className="reel-img"
                            width={55}
                            height={70}
                            src={symbol}
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-100 justify-content-center d-flex mb-4">
              <div className="slot-setbet-box">
                <div className="w-100">
                  <div className="slot-setbet-box-inner-box">
                    <input
                      className="slot-bet-input"
                      type="tel"
                      defaultValue={10}
                      value={bet}
                      onChange={handleBetChange}
                    />
                    <div className="slot-bet-container">
                      <div className="slot-line" />
                      <div className="slot-line-bet">SET BET</div>
                    </div>
                  </div>
                  <div className="slot-line-2" />
                  <img
                    onClick={handleSpin}
                    loading="lazy"
                    src={require("../../Assets/images/roll.png")}
                    className="slot-img-2"
                  />
                  <img
                    onClick={toggleAutomatic}
                    loading="lazy"
                    src={require("../../Assets/images/automatic.png")}
                    className="slot-img-2"
                  />
                </div>
              </div>
            </div>
            {showMessage && (
              <div className="slot-message-container">{message}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Slotgame;
