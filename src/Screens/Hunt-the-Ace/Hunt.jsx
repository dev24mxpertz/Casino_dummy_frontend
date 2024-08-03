// import React, { useState } from 'react';
// import './Hunt.css';
// import jack from '../../Assets/card/BACK.png';
// import blackHeart from '../../Assets/card/card-AceSpades.png';
// import clubs from '../../Assets/card/card-JackClubs.png';
// import diamond from '../../Assets/card/card-QueenDiamonds.png';
// import redHeart from '../../Assets/card/card-KingHearts.png';
// import Chatbox from '../SlotMachine/Chatbox';

// const shuffleCards = () => {
//   const cards = [
//     { value: blackHeart, isFlipped: false },  // Ace of Spades
//     { value: clubs, isFlipped: false },  // Ace of Clubs
//     { value: diamond, isFlipped: false },  // Ace of Diamonds
//     { value: redHeart, isFlipped: false },  // Ace of Hearts
//   ];
//   return cards.sort(() => Math.random() - 0.5);
// };

// const HuntTheAce = () => {
//   const [cards, setCards] = useState(shuffleCards());
//   const [message, setMessage] = useState('');
//   const [isShuffling, setIsShuffling] = useState(false);
//   const [showCenterCard, setShowCenterCard] = useState(false);
//   const [wallet, setWallet] = useState(1000); // Default wallet amount
//   const [betAmount, setBetAmount] = useState('');
//   const [showMessage, setShowMessage] = useState(false);

//   const handleCardClick = (index) => {
//     if (betAmount === '') {
//       setMessage('Please enter a bet amount!');
//       setShowMessage(true);
//       setTimeout(() => setShowMessage(false), 2000);
//       return;
//     }

//     const bet = parseInt(betAmount);

//     if (bet < 10) {
//       setMessage('Minimum bet amount is 10 credits!');
//       setShowMessage(true);
//       setTimeout(() => setShowMessage(false), 2000);
//       return;
//     }

//     if (wallet < bet) {
//       setMessage('Insufficient balance!');
//       setShowMessage(true);
//       setTimeout(() => setShowMessage(false), 2000);
//       return;
//     }

//     if (cards[index].isFlipped) {
//       alert('You can only choose each card once!');
//       return;
//     }

//     // Disable clicking on other cards once a card is chosen
//     const newCards = cards.map((card, i) => ({
//       ...card,
//       isFlipped: i === index ? true : card.isFlipped,
//     }));
//     setCards(newCards);

//     if (newCards[index].value === blackHeart) {
//       const winnings = Math.round(bet * 0.9);
//       setWallet(wallet + winnings);
//       setMessage(`Congratulations! You found the Ace! You won ${winnings} credits.`);
//     } else {
//       setWallet(wallet - bet);
//       setMessage(`Try again! Bet amount of ${bet} credits deducted from your wallet.`);
//     }

//     setShowMessage(true);
//     setTimeout(() => setShowMessage(false), 2000);

//     // Set a timeout to lock all cards after displaying the message
//     setTimeout(() => {
//       const lockedCards = newCards.map((card) => ({
//         ...card,
//         isFlipped: true,
//       }));
//       setCards(lockedCards);
//     }, 2000); // Adjust this delay to match your message display time
//   };

//   const handleRestart = () => {
//     if (betAmount === '') {
//       alert('Please enter a bet amount!');
//       return;
//     }

//     if (parseInt(betAmount) < 10) {
//       alert('Minimum bet amount is 10 credits!');
//       return;
//     }

//     if (wallet < parseInt(betAmount)) {
//       setMessage('Insufficient balance!');
//       setShowMessage(true);
//       setTimeout(() => setShowMessage(false), 2000);
//       return;
//     }

//     setIsShuffling(true);
//     setShowCenterCard(true);
//     setTimeout(() => {
//       setCards(shuffleCards());
//       setMessage('');
//       setIsShuffling(false);
//       setShowCenterCard(false);
//     }, 3000); // Duration of the shuffle animation
//   };

//   const handleInputChange = (event) => {
//     setBetAmount(event.target.value);
//   };

//   return (
//     <>
//       <div className='d-flex w-100 justify-content-around p-3 hunt-container-bg gap-2' >
//         <div className='d-flex w-100 overflow-hidden rounded flex-column'>
//           <div className='hunt-game-container'>
//             <div className='hunt-box-1'>
//               <div className='d-flex justify-content-around flex-column pe-3 ps-3 w-100'>
//                 <div className='m-3'>
//                   <div className='Hunt-btn-group'>
//                     <h2 className='hunt-title'>Hunt the Ace</h2>
//                   </div>
//                   <div className='Hunt-btn-group'>
//                     <div>
//                       <label className='hunt-label'>Total Amount </label>
//                       <div style={{ width: '100%', maxWidth: '135px' }} className='hunt-bet-amount'>
//                         <div className="hunt-wallet">
//                           {wallet}
//                         </div>
//                       </div>
//                     </div>
//                     <div>
//                       <label className='hunt-label' htmlFor="betAmount">Bet Amount</label>
//                       <div className='hunt-bet-amount'>
//                         <input
//                           className="hunt-wallet"
//                           type="tel"
//                           placeholder="?"
//                           value={betAmount}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className='Hunt-btn-group'>
//                     <>
//                       <div className="hunt-game-play-button-containe">
//                         <button
//                           className='hunt-start-btn'
//                           id="hunt-playGame"
//                           onClick={handleRestart}
//                           disabled={betAmount === ''}
//                         >
//                           Play Game
//                         </button>
//                       </div>
//                     </>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className='w-100 justify-content-center d-flex'>
//               <div className="hunt-game">
//                 <div>
//                   <div className='main1'>
//                     {showCenterCard ? (
//                       <div className="hunt-card-center">
//                         <div className="hunt-card">
//                           <div className="hunt-card-inner">
//                             <div className="hunt-card-front">
//                               <img className="hunt-card-img" src={jack} alt="Card back" />
//                             </div>
//                             <div className="hunt-card-back">
//                               <img className="hunt-card-img" src={blackHeart} alt="Card front" />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="hunt-card-container">
//                         {cards.map((card, index) => (
//                           <div
//                             key={index}
//                             className={`hunt-card ${card.isFlipped ? 'hunt-flip-it' : ''} ${isShuffling ? 'shuffle-left' : ''}`}
//                             onClick={() => handleCardClick(index)}
//                             style={{
//                               animationDelay: `${index * 0.2}s` // Delay animation for each card
//                             }}
//                           >
//                             <div className="hunt-card-inner">
//                               <div className="hunt-card-front">
//                                 <img className="hunt-card-img" src={jack} alt="Card back" />
//                               </div>
//                               <div className="hunt-card-back">
//                                 <img className="hunt-card-img" src={card.value} alt="Card front" />
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                     <div className="hunt-current-status">
//                       {showMessage && <div className="slot-message-container">{message}</div>}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='hunt-box-3'>
//           <Chatbox />
//         </div>
//       </div>
//     </>
//   );
// };

// export default HuntTheAce;
import React, { useState } from "react";
import "./Hunt.css";
import jack from "../../Assets/card/BACK.png";
import blackHeart from "../../Assets/card/card-AceSpades.png";
import clubs from "../../Assets/card/card-JackClubs.png";
import diamond from "../../Assets/card/card-QueenDiamonds.png";
import redHeart from "../../Assets/card/card-KingHearts.png";
import Chatbox from "../SlotMachine/Chatbox";
import { useDispatch, useSelector } from "react-redux";
import { Fetch_Hunt_Game_Data } from "../../store/Actions/GameActions";

const shuffleCards = () => {
  const cards = [
    { value: blackHeart, isFlipped: false }, // Ace of Spades
    { value: clubs, isFlipped: false }, // Ace of Clubs
    { value: diamond, isFlipped: false }, // Ace of Diamonds
    { value: redHeart, isFlipped: false }, // Ace of Hearts
  ];
  return cards.sort(() => Math.random() - 0.5);
};

const HuntTheAce = () => {
  const [cards, setCards] = useState(shuffleCards());
  const [message, setMessage] = useState("");
  const [isShuffling, setIsShuffling] = useState(false);
  const [showCenterCard, setShowCenterCard] = useState(false);
  const [wallet, setWallet] = useState(1000); // Default wallet amount
  const [betAmount, setBetAmount] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const WhenGameCompleted = async (status) => {
    console.log(status, "status");
    console.log(betAmount, "-------------------------betAmount");
    let formData;

    if (status === "Loss") {
      formData = {
        bet_Amount: betAmount,
        userID: user?._id,
        Status: status,
        Loss_Amount: betAmount,
        wining_amount: 0,
        Total_Bet_Amount: wallet - betAmount,
      };
    } else {
      formData = {
        bet_Amount: betAmount,
        userID: user?._id,
        Status: status,
        wining_amount: betAmount * 1.9,
        Loss_Amount: 0,
        Total_Bet_Amount: wallet + betAmount * 0.9,
      };
    }
    console.log(
      formData,
      "------------------------formData as when the Spin Completed"
    );
    // Dispatch formData to the redux action or handle it as needed
    dispatch(Fetch_Hunt_Game_Data(formData));
  };

  const handleCardClick = (index) => {
    if (betAmount === "") {
      setMessage("Please enter a bet amount!");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
      return;
    }

    const bet = parseInt(betAmount);

    if (bet < 10) {
      setMessage("Minimum bet amount is 10 credits!");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
      return;
    }

    if (wallet < bet) {
      setMessage("Insufficient balance!");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
      return;
    }

    if (cards[index].isFlipped) {
      alert("You can only choose each card once!");
      return;
    }

    // Disable clicking on other cards once a card is chosen
    const newCards = cards.map((card, i) => ({
      ...card,
      isFlipped: i === index ? true : card.isFlipped,
    }));
    setCards(newCards);

    if (newCards[index].value === blackHeart) {
      const winnings = Math.round(bet * 0.9);
      setWallet(wallet + winnings);
      setMessage(
        `Congratulations! You found the Ace! You won ${winnings} credits.`
      );
      WhenGameCompleted("Win");
    } else {
      setWallet(wallet - bet);
      setMessage(
        `Try again! Bet amount of ${bet} credits deducted from your wallet.`
      );
      WhenGameCompleted("Loss");
    }

    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);

    // Set a timeout to lock all cards after displaying the message
    setTimeout(() => {
      const lockedCards = newCards.map((card) => ({
        ...card,
        isFlipped: true,
      }));
      setCards(lockedCards);
    }, 2000); // Adjust this delay to match your message display time
  };

  const handleRestart = () => {
    if (betAmount === "") {
      alert("Please enter a bet amount!");
      return;
    }

    if (parseInt(betAmount) < 10) {
      alert("Minimum bet amount is 10 credits!");
      return;
    }

    if (wallet < parseInt(betAmount)) {
      setMessage("Insufficient balance!");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
      return;
    }

    setIsShuffling(true);
    setShowCenterCard(true);
    setTimeout(() => {
      setCards(shuffleCards());
      setMessage("");
      setIsShuffling(false);
      setShowCenterCard(false);
    }, 3000); // Duration of the shuffle animation
  };

  const handleInputChange = (event) => {
    setBetAmount(event.target.value);
  };

  return (
    <>
      <div className="d-flex w-100 justify-content-around p-3 hunt-container-bg gap-2">
        <div className="d-flex w-100 overflow-hidden rounded flex-column">
          <div className="hunt-game-container">
            <div className="hunt-box-1">
              <div className="d-flex justify-content-around flex-column pe-3 ps-3 w-100">
                <div className="m-3">
                  <div className="Hunt-btn-group">
                    <h2 className="hunt-title">Hunt the Ace</h2>
                  </div>
                  <div className="Hunt-btn-group">
                    <div>
                      <label className="hunt-label">Total Amount </label>
                      <div
                        style={{ width: "100%", maxWidth: "135px" }}
                        className="hunt-bet-amount"
                      >
                        <div className="hunt-wallet">{wallet}</div>
                      </div>
                    </div>
                    <div>
                      <label className="hunt-label" htmlFor="betAmount">
                        Bet Amount
                      </label>
                      <div className="hunt-bet-amount">
                        <input
                          className="hunt-wallet"
                          type="tel"
                          placeholder="?"
                          value={betAmount}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="Hunt-btn-group">
                    <>
                      <div className="hunt-game-play-button-containe">
                        <div className="hunt-tooltip-wrapper">
                          <button
                            className="hunt-start-btn"
                            id="hunt-playGame"
                            onClick={handleRestart}
                            disabled={betAmount === ""}
                          >
                            Play Game
                          </button>
                          {betAmount === "" && <span className="tooltip">Place bet to activate</span>}
                        </div>
                      </div>
                    </>
                  </div>
                </div>  
              </div>
            </div>
            <div className="w-100 justify-content-center d-flex">
              <div className="hunt-game">
                <div>
                  <div className="main1">
                    {showCenterCard ? (
                      <div className="hunt-card-center">
                        <div className="hunt-card">
                          <div className="hunt-card-inner">
                            <div className="hunt-card-front">
                              <img
                                className="hunt-card-img"
                                src={jack}
                                alt="Card back"
                              />
                            </div>
                            <div className="hunt-card-back">
                              <img
                                className="hunt-card-img"
                                src={blackHeart}
                                alt="Card front"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="hunt-card-container">
                        {cards.map((card, index) => (
                          <div
                            key={index}
                            className={`hunt-card ${card.isFlipped ? "hunt-flip-it" : ""
                              } ${isShuffling ? "shuffle-left" : ""}`}
                            onClick={() => handleCardClick(index)}
                            style={{
                              animationDelay: `${index * 0.2}s`, // Delay animation for each card
                            }}
                          >
                            <div className="hunt-card-inner">
                              <div className="hunt-card-front">
                                <img
                                  className="hunt-card-img"
                                  src={jack}
                                  alt="Card back"
                                />
                              </div>
                              <div className="hunt-card-back">
                                <img
                                  className="hunt-card-img"
                                  src={card.value}
                                  alt="Card front"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="hunt-current-status">
                      {showMessage && (
                        <div className="slot-message-container">{message}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hunt-box-3">
          <Chatbox />
        </div>
      </div>
    </>
  );
};

export default HuntTheAce;
