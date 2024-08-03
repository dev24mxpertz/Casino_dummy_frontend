// import React, { useState } from 'react';
// import './SlotMachine.css';
// import Slotgame from './Slotgame';
// import Chatbox from './Chatbox';

// function Slotmachine() {
//     const [topOption, setTopOption] = useState(0);
//     const [selectOption, setSelectOption] = useState(0)
//     const options = ["1/2", "2x", "CLR"];

//     const handleTopOption = (index) => {
//         setTopOption(index);
//     };
//     const handleSelectOption = (index) => {
//         setSelectOption(index)
//     }

//     return (
//       <>
//         <div className="w-100 h-100 mt-5 mb-5">
//           <div className="h-100">
//             <div className="d-flex justify-content-around solt-layout-container">
//               <div className="d-flex justify-content-around w-100 wrapper">
//                 <div>
//                   <div className="gameBox1">
//                     <div className=" innerBox">
//                       <div className="topBtn">
//                         <button
//                           className={`btn SelctedBtn ${
//                             topOption === 0 ? "colorChng" : ""
//                           }`}
//                           onClick={() => handleTopOption(0)}
//                         >
//                           Manual
//                         </button>
//                         <button
//                           className={`btn SelctedBtn ${
//                             topOption === 1 ? "colorChng" : ""
//                           }`}
//                           onClick={() => handleTopOption(1)}
//                         >
//                           Automated
//                         </button>
//                       </div>
//                       <div>
//                         <form className="rocketForm">
//                           <div class="form-group" style={{ width: "100%" }}>
//                             <label className="pb-2">Total payout</label>
//                             <input
//                               className="form-control"
//                               aria-describedby="emailHelp"
//                               placeholder=""
//                               value="10K"
//                             />
//                           </div>
//                           <div className="form-group" style={{ width: "100%" }}>
//                             <label className="pb-2">Best Amount</label>
//                             <input
//                               className="form-control"
//                               id="exampleInputEmail1"
//                               aria-describedby="emailHelp"
//                               placeholder=""
//                               value="10K"
//                             />
//                           </div>
//                           {/* <div className="options" style={{ width: "100%" }}>
//                             <div className="d-flex justify-content-between">
//                               {options.map((item, index) => (
//                                 <button
//                                   className={`btn slctOptn ${
//                                     selectOption === index ? "yellowBg" : ""
//                                   }`}
//                                   onClick={() => handleSelectOption(index)}
//                                 >
//                                   {item}
//                                 </button>
//                               ))}
//                             </div>
//                           </div> */}

//                           {/* <div class="form-group" style={{ width: "100%" }}>
//                                                     <label className="pb-2">Cashout at</label>
//                                                     <input
//                                                         className="form-control"
//                                                         id="exampleInputEmail1"
//                                                         aria-describedby="emailHelp"
//                                                         placeholder=""
//                                                         value="2.00"
//                                                     />
//                                                 </div> */}

//                           <button type="button" className="btn betBtn">
//                             Bet
//                           </button>
//                         </form>
//                       </div>
//                       <div>
//                         <div>
//                           <div className="d-flex justify-content-between mt-2">
//                             <p>Hidden</p>
//                             <span style={{ color: "#FDBE1B" }}>
//                               0.082456440
//                             </span>
//                           </div>
//                           <div className="d-flex justify-content-between mt-2">
//                             <p>VersaceTLE</p>
//                             <span style={{ color: "#FDBE1B" }}>
//                               OSRS 84.92M
//                             </span>
//                           </div>
//                           <div className="d-flex justify-content-between mt-2">
//                             <p>Drain_Fluid</p>
//                             <span style={{ color: "#FDBE1B" }}>OSRS 40M</span>
//                           </div>
//                           <div className="d-flex justify-content-between mt-2">
//                             <p>Miraclebets</p>
//                             <span style={{ color: "#FDBE1B" }}>OSRS 15M</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   style={{ width: "100%", maxWidth: "900px", height: "auto" }}
//                   className="w-100 d-flex align-items-center"
//                 >
//                   <Slotgame />
//                 </div>
//               </div>
//               <div
//                 className="mx-100"
//                 style={{
//                   width: "100%",
//                   maxWidth: "248px",
//                   height: "100%",
//                   margin: "0px 10px",
//                 }}
//               >
//                 <Chatbox />
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
// }

// export default Slotmachine;

import React, { useState, useRef } from "react";
import "./SlotMachine.css";
import Slotgame from "./Slotgame";
import Chatbox from "./Chatbox";
import { useDispatch, useSelector } from "react-redux";
import { Fetch_Slot_Game_Data } from "../../store/Actions/GameActions";

function Slotmachine() {
  const [topOption, setTopOption] = useState(0);
  const [selectOption, setSelectOption] = useState(0);
  const options = ["1/2", "2x", "CLR"];
  const [bet_Amount, setBet_Amount] = useState(10);
  const [Total_Bet_Amount, setTotal_Bet_Amount] = useState(847);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const slotGameRef = useRef(null);

  const handleTopOption = (index) => {
    setTopOption(index);
  };

  const handleSelectOption = (index) => {
    setSelectOption(index);
  };

  const updateBetAmount = (amount) => {
    setBet_Amount(amount);
  };

  const updateTotalBetAmount = (amount) => {
    setTotal_Bet_Amount(amount);
  };

  const WhenSpinCompleted = async (status) => {
    console.log(status, "status");
    console.log(Total_Bet_Amount, "-------------------------Total_Bet_Amount");
    let formData;

    if (status === "Loss") {
      formData = {
        bet_Amount: bet_Amount,
        userID: user?._id,
        Status: status,
        Loss_Amount: bet_Amount,
        wining_amount: 0,
        Total_Bet_Amount: Total_Bet_Amount - bet_Amount,
      };
    } else {
      formData = {
        bet_Amount: bet_Amount,
        userID: user?._id,
        Status: status,
        wining_amount: bet_Amount * 1.9,
        Loss_Amount: 0,
        Total_Bet_Amount: Total_Bet_Amount + bet_Amount * 0.9,
      };
    }

    console.log(
      formData,
      "------------------------formData as when the Spin Completed"
    );
    // Dispatch action or handle formData as needed
    dispatch(Fetch_Slot_Game_Data(formData));
  };

  const handleRollButtonClick = () => {
    if (slotGameRef.current) {
      slotGameRef.current.spin();
    }
  };

  return (
    <>
      <div className="w-100 h-100 mt-5 mb-5">
        <div className="h-100">
          <div className="d-flex justify-content-around solt-layout-container">
            <div className="d-flex justify-content-around w-100 wrapper">
              <div>
                <div className="gameBox1">
                  <div className="innerBox">
                    <div className="topBtn">
                      <button
                        className={`btn SelctedBtn ${topOption === 0 ? "colorChng" : ""
                          }`}
                        onClick={() => handleTopOption(0)}
                      >
                        Manual
                      </button>
                      <button
                        className={`btn SelctedBtn ${topOption === 1 ? "colorChng" : ""
                          }`}
                        onClick={() => handleTopOption(1)}
                      >
                        Automated
                      </button>
                    </div>
                    <div>
                      <form className="rocketForm">
                        <div className="form-group" style={{ width: "100%" }}>
                          <label className="pb-2">Total payout</label>
                          <input
                            className="form-control"
                            aria-describedby="emailHelp"
                            placeholder=""
                            value={Total_Bet_Amount}
                          // onChange={(e) => setBet_Amount(e.target.value)}
                          />
                        </div>
                        <div className="form-group" style={{ width: "100%" }}>
                          <label className="pb-2">Best Amount</label>
                          <input
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder=""
                            value={bet_Amount}
                            onChange={(e) => setBet_Amount(e.target.value)}
                          />
                        </div>
                        <button onClick={handleRollButtonClick} type="button" className="btn betBtn">
                          Roll
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
              </div>
              <div
                style={{ width: "100%", maxWidth: "900px", height: "auto" }}
                className="w-100 d-flex align-items-center"
              >
                <Slotgame
                  ref={slotGameRef}
                  betAmount={bet_Amount}
                  onBetChange={updateBetAmount}
                  TotalBetAmount={Total_Bet_Amount}
                  onTotalAmountChange={updateTotalBetAmount}
                  onSpinComplete={WhenSpinCompleted} // Pass the callback function
                />
              </div>
            </div>
            <div
              className="mx-100"
              style={{
                width: "100%",
                maxWidth: "248px",
                height: "100%",
                margin: "0px 10px",
              }}
            >
              <Chatbox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slotmachine;
