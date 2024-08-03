// import React, { useState, useEffect, useRef } from 'react';
// import { Line } from 'react-chartjs-2';
// import Plane from './Plane';
// import './Aviator.css';
// import Chatbox from '../SlotMachine/Chatbox';
// import { useDispatch, useSelector } from "react-redux";
// import { Fetch_Aviator_Game_Data } from "../../store/Actions/GameActions";

// function Aviator() {
//   const initialWalletAmount = 1000; // Initial wallet amount
//   const [multiplier, setMultiplier] = useState(0);
//   const [betAmount, setBetAmount] = useState(0);
//   const [walletAmount, setWalletAmount] = useState(initialWalletAmount); // Wallet amount initialized with the initial amount
//   const [isGameRunning, setIsGameRunning] = useState(false);
//   const [isCrashed, setIsCrashed] = useState(false);
//   const [showCrashMessage, setShowCrashMessage] = useState(false);
//   const [showCashOutMessage, setShowCashOutMessage] = useState(false);
//   const [crashMessage, setCrashMessage] = useState('');
//   const [cashOutMessage, setCashOutMessage] = useState('');
//   const [chartData, setChartData] = useState({ labels: [], datasets: [{ label: '', data: [] }] });
//   const intervalRef = useRef(null);
//   const hasCashedOut = useRef(false); // To track if the player has cashed out
//   const [isButtonDisabled, setIsButtonDisabled] = useState(false);

//   useEffect(() => {
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   useEffect(() => {
//     if (isGameRunning) {
//       const crashTime = Math.random() * 10000 + 1000; // Plane crashes randomly between 1 and 10 seconds
//       let startTime = Date.now();
//       intervalRef.current = setInterval(() => {
//         const timeElapsed = (Date.now() - startTime) / 1000; // in seconds
//         const newMultiplier = 0 + timeElapsed * timeElapsed * 0.01; // Quadratic function
//         setMultiplier(newMultiplier);
//         updateChartData(timeElapsed, newMultiplier);
//       }, 100);

//       setTimeout(() => {
//         setIsCrashed(true);
//         setIsButtonDisabled(false); // Optionally re-enable the button after showing the message
//         setIsGameRunning(false);
//         clearInterval(intervalRef.current);

//         if (!hasCashedOut.current) { // Only update wallet if the player hasn't cashed out
//           setCrashMessage(`plane crashed.`);
//           setShowCrashMessage(true);

//           setTimeout(() => {
//             setShowCrashMessage(false);
//             setIsCrashed(false);
//             setMultiplier(0); // Reset multiplier after crash
//           }, 3000); // Reset the game state after 3 seconds
//         }
//       }, crashTime);
//     }
//   }, [isGameRunning, betAmount]);

//   const updateChartData = (time, multiplier) => {
//     setChartData((prevData) => {
//       const labels = [...prevData.labels, time.toFixed(1)];
//       const data = [...prevData.datasets[0].data, multiplier.toFixed(2)];
//       return {
//         labels: labels,
//         datasets: [
//           {
//             label: '',
//             data: data,
//             fill: false,
//             borderColor: 'rgba(0, 0, 0, 0)', // Transparent color for the line
//             cubicInterpolationMode: 'monotone',
//             pointRadius: 0, // Remove points (dots)
//           },
//         ],
//       };
//     });
//   };

//   const startGame = () => {
//     if (betAmount > 0 && betAmount <= walletAmount) {
//       setIsGameRunning(true);
//       setIsCrashed(false);
//       hasCashedOut.current = false; // Reset cash out flag
//       setMultiplier(0); // Reset multiplier at the start of the game
//       setChartData({ labels: [], datasets: [{ label: '', data: [] }] });
//       setWalletAmount(prevWalletAmount => prevWalletAmount - betAmount);
//     } else {
//       alert('Insufficient funds or invalid bet amount. Please enter a valid bet amount.');
//     }
//   };

//   const cashOut = () => {
//     if (isGameRunning) {
//       setIsButtonDisabled(true); // Disable the button immediately when clicked

//       const winnings = betAmount * multiplier;
//       const newWalletAmount = walletAmount + betAmount + winnings;

//       setCashOutMessage(`You cashed out at ${multiplier.toFixed(2)}x and won: ${winnings.toFixed(2)}`);
//       setWalletAmount(newWalletAmount);
//       hasCashedOut.current = true; // Set cash out flag to true

//       // Show cash out message
//       setShowCashOutMessage(true);

//       setTimeout(() => {
//         setShowCashOutMessage(false);
//         setMultiplier(0); // Reset multiplier after cash out

//         // Clear crash message if visible
//         if (isCrashed) {
//           setCrashMessage('Oops! Your plane crashed after cashing out.');
//           setShowCrashMessage(true);
//           setIsCrashed(false); // Reset crash state
//         }
//       }, 2000);
//     }
//   };

//   const [topOption, setTopOption] = useState(0);
//   const [selectOption, setSelectOption] = useState(0)
//   const options = ["1/2", "2x", "CLR"];

//   const handleTopOption = (index) => {
//     setTopOption(index);
//   };
//   const handleSelectOption = (index) => {
//     setSelectOption(index)
//   }

//   return (
//     <div className='w-100 d-flex aviator-container'>
//       <div className='d-flex justify-content-around w-100 wrapper align-items-center'>
//         <div style={{ maxWidth: '300px' }} className="gameBox1">
//           <div className=" innerBox">
//             <div className="topBtn">
//               <button
//                 className={`btn SelctedBtn ${topOption === 0 ? "colorChng" : ""
//                   }`}
//                 onClick={() => handleTopOption(0)}
//               >
//                 Manual
//               </button>
//               <button
//                 className={`btn SelctedBtn ${topOption === 1 ? "colorChng" : ""
//                   }`}
//                 onClick={() => handleTopOption(1)}
//               >
//                 Automated
//               </button>
//             </div>
//             <div>
//               <form className="rocketForm">
//                 <div className="form-group" style={{ width: "100%" }}>
//                   <label className="pb-2">Total Amount</label>
//                   <input
//                     className="form-control"
//                     aria-describedby="emailHelp"
//                     placeholder=""
//                     value={walletAmount.toFixed(2)} // Make sure to use curly braces for dynamic values
//                     readOnly // Make the input read-only if it's for displaying total amount
//                   />
//                 </div>
//                 <div className="form-group" style={{ width: "100%" }}>
//                   <label className="pb-2">Bet Amount</label>
//                   <input
//                     className="form-control"
//                     type="number"
//                     value={betAmount}
//                     onChange={(e) => setBetAmount(parseFloat(e.target.value))}
//                     placeholder="Enter bet amount"
//                     disabled={isGameRunning}
//                   />
//                 </div>
//                 <div className="options" style={{ width: "100%" }}>
//                   <div className="d-flex justify-content-between">
//                     {options.map((item, index) => (
//                       <button
//                         className={`btn slctOptn ${selectOption === index ? "yellowBg" : ""
//                           }`}
//                         onClick={() => handleSelectOption(index)}
//                         disabled
//                       >
//                         {item}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//                 <button className='a-start-btn w-100' onClick={startGame} disabled={isGameRunning}>Start Game</button>
//                 <button className='a-btn' onClick={cashOut} disabled={!isGameRunning || isButtonDisabled}>Cash Out</button>
//               </form>
//             </div>
//             <div>
//               <div>
//                 <div className='d-flex justify-content-between mt-2'>
//                   <p>Hidden</p>
//                   <span style={{ color: '#FDBE1B' }}>0.082456440</span>
//                 </div>
//                 <div className='d-flex justify-content-between mt-2'>
//                   <p>VersaceTLE</p>
//                   <span style={{ color: '#FDBE1B' }}>OSRS 84.92M</span>
//                 </div>
//                 <div className='d-flex justify-content-between mt-2'>
//                   <p>Drain_Fluid</p>
//                   <span style={{ color: '#FDBE1B' }}>OSRS 40M</span>
//                 </div>
//                 <div className='d-flex justify-content-between mt-2'>
//                   <p>Miraclebets</p>
//                   <span style={{ color: '#FDBE1B' }}>OSRS 15M</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="App">
//           <div className="game-board">
//             <div className="background">
//               <Plane isCrashed={isCrashed} isGameRunning={isGameRunning} />
//             </div>
//             <div className="multiplier">
//               {multiplier.toFixed(2)}x
//             </div>
//             <div className="chart-container">
//               <Line
//                 data={chartData}
//                 options={{
//                   animation: {
//                     duration: 0 // Disable animation to sync plane with chart
//                   },
//                   elements: {
//                     line: {
//                       tension: 0.4, // Smooth curve
//                       borderWidth: 2, // Increased line thickness
//                       fill: 'none', // Remove line fill (for transparency)
//                       borderColor: 'white',
//                       z: 10 // Move line to foreground
//                     },
//                     gridLines: {
//                       color: 'rgba(255, 255, 255, 0.2)' // Semi-transparent white grid lines (optional)
//                     },
//                     point: {
//                       radius: 0 // Remove points (dots)
//                     }
//                   },
//                   scales: {
//                     x: {
//                       display: true,
//                       type: 'linear',
//                       position: 'bottom',
//                       grid: {
//                         display: false, // Hide grid lines
//                         borderColor: 'white' // White border for x-axis
//                       },
//                       ticks: {
//                         color: 'white' // White labels for x-axis
//                       }
//                     },
//                     y: {
//                       display: true,
//                       beginAtZero: true, // Ensure the line starts from 0
//                       grid: {
//                         display: false, // Hide grid lines
//                         borderColor: 'white' // White border for y-axis
//                       },
//                       ticks: {
//                         color: 'white' // White labels for y-axis
//                       }
//                     }
//                   }
//                 }}
//               />
//             </div>
//           </div>
//           {showCrashMessage && <div className="aviator-message-container">{crashMessage}</div>}
//           {showCashOutMessage && <div className="slot-message-container">{cashOutMessage}</div>}
//         </div>
//       </div>
//       <div className='mx-100' style={{ width: '100%', maxWidth: '248px', height: '100%', margin: '0px' }}>
//         <Chatbox />
//       </div>
//     </div>
//   );
// }

// export default Aviator;

import React, { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import Plane from "./Plane";
import "./Aviator.css";
import Chatbox from "../SlotMachine/Chatbox";
import { useDispatch, useSelector } from "react-redux";
import { Fetch_Aviator_Game_Data } from "../../store/Actions/GameActions";

function Aviator() {
  const initialWalletAmount = 1000; // Initial wallet amount
  const [multiplier, setMultiplier] = useState(0);
  const [betAmount, setBetAmount] = useState(0);
  const [walletAmount, setWalletAmount] = useState(initialWalletAmount);
  const [Total_Bet_Amount, setTotal_Bet_Amount] = useState(847); // Wallet amount initialized with the initial amount
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [isCrashed, setIsCrashed] = useState(false);
  const [showCrashMessage, setShowCrashMessage] = useState(false);
  const [showCashOutMessage, setShowCashOutMessage] = useState(false);
  const [crashMessage, setCrashMessage] = useState("");
  const [cashOutMessage, setCashOutMessage] = useState("");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{ label: "", data: [] }],
  });
  const intervalRef = useRef(null);
  const dispatch = useDispatch();
  const hasCashedOut = useRef(false); // To track if the player has cashed out
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (isGameRunning) {
      const crashTime = Math.random() * 10000 + 1000; // Plane crashes randomly between 1 and 10 seconds
      let startTime = Date.now();
      intervalRef.current = setInterval(() => {
        const timeElapsed = (Date.now() - startTime) / 1000; // in seconds
        const newMultiplier = 0 + timeElapsed * timeElapsed * 0.01; // Quadratic function
        setMultiplier(newMultiplier);
        updateChartData(timeElapsed, newMultiplier);
      }, 100);

      setTimeout(() => {
        setIsCrashed(true);
        setIsButtonDisabled(false); // Optionally re-enable the button after showing the message
        setIsGameRunning(false);
        clearInterval(intervalRef.current);

        if (!hasCashedOut.current) {
          // Only update wallet if the player hasn't cashed out
          setCrashMessage(`plane crashed.`);
          setShowCrashMessage(true);

          setTimeout(() => {
            setShowCrashMessage(false);
            setIsCrashed(false);
            setMultiplier(0); // Reset multiplier after crash
            plancrash("Loss");
          }, 3000); // Reset the game state after 3 seconds
        }
      }, crashTime);
    }
  }, [isGameRunning, betAmount]);

  const updateChartData = (time, multiplier) => {
    setChartData((prevData) => {
      const labels = [...prevData.labels, time.toFixed(1)];
      const data = [...prevData.datasets[0].data, multiplier.toFixed(2)];
      return {
        labels: labels,
        datasets: [
          {
            label: "",
            data: data,
            fill: false,
            borderColor: "rgba(0, 0, 0, 0)", // Transparent color for the line
            cubicInterpolationMode: "monotone",
            pointRadius: 0, // Remove points (dots)
          },
        ],
      };
    });
  };

  const startGame = () => {
    if (betAmount > 0 && betAmount <= walletAmount) {
      setIsGameRunning(true);
      setIsCrashed(false);
      hasCashedOut.current = false; // Reset cash out flag
      setMultiplier(0); // Reset multiplier at the start of the game
      setChartData({ labels: [], datasets: [{ label: "", data: [] }] });
      setWalletAmount((prevWalletAmount) => prevWalletAmount - betAmount);
    } else {
      alert(
        "Insufficient funds or invalid bet amount. Please enter a valid bet amount."
      );
    }
  };

  const cashOut = () => {
    if (isGameRunning) {
      setIsButtonDisabled(true); // Disable the button immediately when clicked

      const winnings = betAmount * multiplier;
      const newWalletAmount = walletAmount + betAmount + winnings;

      setCashOutMessage(
        `You cashed out at ${multiplier.toFixed(
          2
        )}x and won: ${winnings.toFixed(2)}`
      );
      setWalletAmount(newWalletAmount);
      hasCashedOut.current = true; // Set cash out flag to true

      // Show cash out message
      setShowCashOutMessage(true);

      setTimeout(() => {
        setShowCashOutMessage(false);
        setMultiplier(0); // Reset multiplier after cash out

        // Clear crash message if visible
        if (isCrashed) {
          setCrashMessage("Oops! Your plane crashed after cashing out.");
          setShowCrashMessage(true);
          setIsCrashed(false); // Reset crash state
        }
        plancrash("Win");
      }, 2000);
    }
  };

  const [topOption, setTopOption] = useState(0);
  const [selectOption, setSelectOption] = useState(0);
  const options = ["1/2", "2x", "CLR"];

  const handleTopOption = (index) => {
    setTopOption(index);
  };
  const handleSelectOption = (index) => {
    setSelectOption(index);
  };

  const plancrash = async (status) => {
    console.log(status, "status");
    console.log(Total_Bet_Amount, "-------------------------Total_Bet_Amount");
    // const walletAmount = initialWalletAmount - walletAmount + betAmount;
    let formData;

    if (status === "Loss" && user?._id) {
      formData = {
        bet_Amount: betAmount,
        userID: user?._id,
        Status: status,
        Loss_Amount: betAmount,
        wining_amount: 0,
        Total_Bet_Amount: walletAmount - betAmount,
      };
    } else {
      formData = {
        bet_Amount: betAmount,
        userID: user?._id,
        Status: status,
        wining_amount: betAmount * 1.9,
        Loss_Amount: 0,
        Total_Bet_Amount: walletAmount + betAmount * 0.9,
      };
    }

    console.log(
      formData,
      "------------------------formData as when the plan crash"
    );
    // Dispatch action or handle formData as needed
    dispatch(Fetch_Aviator_Game_Data(formData));
  };

  return (
    <div className="w-100 d-flex aviator-container">
      <div className="d-flex justify-content-around w-100 wrapper align-items-center">
        <div style={{ maxWidth: "300px" }} className="gameBox1">
          <div className=" innerBox">
            <div className="topBtn">
              <button
                className={`btn SelctedBtn ${
                  topOption === 0 ? "colorChng" : ""
                }`}
                onClick={() => handleTopOption(0)}
              >
                Manual
              </button>
              <button
                className={`btn SelctedBtn ${
                  topOption === 1 ? "colorChng" : ""
                }`}
                onClick={() => handleTopOption(1)}
              >
                Automated
              </button>
            </div>
            <div>
              <form className="rocketForm">
                <div className="form-group" style={{ width: "100%" }}>
                  <label className="pb-2">Total Amount</label>
                  <input
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder=""
                    value={walletAmount.toFixed(2)} 
                    readOnly
                  />
                </div>
                <div className="form-group" style={{ width: "100%" }}>
                  <label className="pb-2">Bet Amount</label>
                  <input
                    className="form-control"
                    type="number"
                    value={betAmount}
                    onChange={(e) => setBetAmount(parseFloat(e.target.value))}
                    placeholder="Enter bet amount"
                    disabled={isGameRunning}
                  />
                </div>
                {/* <div className="options" style={{ width: "100%" }}>
                  <div className="d-flex justify-content-between">
                    {options.map((item, index) => (
                      <button
                        className={`btn slctOptn ${
                          selectOption === index ? "yellowBg" : ""
                        }`}
                        onClick={() => handleSelectOption(index)}
                        disabled
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div> */}
                <button
                  className="a-start-btn w-100"
                  onClick={startGame}
                  disabled={isGameRunning}
                >
                  Start Game
                </button>
                <button
                  className="a-btn"
                  onClick={cashOut}
                  disabled={!isGameRunning || isButtonDisabled}
                >
                  Cash Out
                </button>
              </form>
            </div>
            <div>
              <div>
                <div className="d-flex justify-content-between mt-2">
                  <p>Hidden</p>
                  <span style={{ color: "#FDBE1B" }}>0.082456440</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <p>VersaceTLE</p>
                  <span style={{ color: "#FDBE1B" }}>OSRS 84.92M</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <p>Drain_Fluid</p>
                  <span style={{ color: "#FDBE1B" }}>OSRS 40M</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <p>Miraclebets</p>
                  <span style={{ color: "#FDBE1B" }}>OSRS 15M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="App">
          <div className="game-board">
            <div className="background">
              <Plane isCrashed={isCrashed} isGameRunning={isGameRunning} />
            </div>
            <div className="multiplier">{multiplier.toFixed(2)}x</div>
            <div className="chart-container">
              <Line
                data={chartData}
                options={{
                  animation: {
                    duration: 0, // Disable animation to sync plane with chart
                  },
                  elements: {
                    line: {
                      tension: 0.4, // Smooth curve
                      borderWidth: 2, // Increased line thickness
                      fill: "none", // Remove line fill (for transparency)
                      borderColor: "white",
                      z: 10, // Move line to foreground
                    },
                    gridLines: {
                      color: "rgba(255, 255, 255, 0.2)", // Semi-transparent white grid lines (optional)
                    },
                    point: {
                      radius: 0, // Remove points (dots)
                    },
                  },
                  scales: {
                    x: {
                      display: true,
                      type: "linear",
                      position: "bottom",
                      grid: {
                        display: false, // Hide grid lines
                        borderColor: "white", // White border for x-axis
                      },
                      ticks: {
                        color: "white", // White labels for x-axis
                      },
                    },
                    y: {
                      display: true,
                      beginAtZero: true, // Ensure the line starts from 0
                      grid: {
                        display: false, // Hide grid lines
                        borderColor: "white", // White border for y-axis
                      },
                      ticks: {
                        color: "white", // White labels for y-axis
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
          {showCrashMessage && (
            <div className="aviator-message-container">{crashMessage}</div>
          )}
          {showCashOutMessage && (
            <div className="slot-message-container">{cashOutMessage}</div>
          )}
        </div>
      </div>
      <div
        className="mx-100"
        style={{
          width: "100%",
          maxWidth: "248px",
          height: "100%",
          margin: "0px",
        }}
      >
        <Chatbox />
      </div>
    </div>
  );
}

export default Aviator;
