import React, { useEffect, useState } from "react";
import "./hitandstay.css";
import Chatbox from "../SlotMachine/Chatbox";
import { useDispatch, useSelector } from "react-redux";
import { Fetch_BlackJack_Data } from "../../store/Actions/GameActions";

function HitandStay() {
  const [dealerAceCount, setDealerAceCount] = useState(0);
  const [yourAceCount, setYourAceCount] = useState(0);
  const [hidden, setHidden] = useState(null);
  const [hiddenRevealed, setHiddenRevealed] = useState(false);
  const [deck, setDeck] = useState([]);
  const [canHit, setCanHit] = useState(false);
  const [dealerCards, setDealerCards] = useState([]);
  const [yourCards, setYourCards] = useState([]);
  const [result, setResult] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [showDummyImage, setShowDummyImage] = useState(true);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [FormData, setFormData] = useState({
    dealerSum: 0,
    betAmount: 10,
    walletAmount: 1000,
    yourSum: 0,
    Status: "",
    userID: user?._id,
    wining_Amount: 0,
    loss_Amount: 0,
  });



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    buildDeck();
  }, []);

  const buildDeck = () => {
    let values = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    let types = ["C", "D", "H", "S"];
    let newDeck = [];

    for (let type of types) {
      for (let value of values) {
        newDeck.push(`${value}-${type}`);
      }
    }

    shuffleDeck(newDeck);
  };

  const shuffleDeck = (newDeck) => {
    let shuffledDeck = [...newDeck];
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }

    // Rig the deck to favor the dealer
    shuffledDeck = rigDeck(shuffledDeck);

    setDeck(shuffledDeck);
  };

  const rigDeck = (deck) => {
    let dealerCards = [];
    let playerCards = [];

    // Force high-value cards for dealer
    while (dealerCards.length < 2) {
      let cardIndex = Math.floor(Math.random() * deck.length);
      let card = deck[cardIndex];
      if (getValue(card) >= 10 || card.startsWith("A")) {
        dealerCards.push(card);
        deck.splice(cardIndex, 1);
      }
    }

    // Force low-value cards for player
    while (playerCards.length < 2) {
      let cardIndex = Math.floor(Math.random() * deck.length);
      let card = deck[cardIndex];
      if (getValue(card) < 6) {
        playerCards.push(card);
        deck.splice(cardIndex, 1);
      }
    }

    return [...dealerCards, ...playerCards, ...deck];
  };

  const startGame = () => {
    if (FormData.betAmount > FormData.walletAmount) {
      showMessageWithDuration("Insufficient Balance!", 2000);
      return;
    }

    if (deck.length < 4) {
      buildDeck();
      showMessageWithDuration("");
      return;
    }

    const newDeck = [...deck];
    const hiddenCard = newDeck.pop();
    setHidden(hiddenCard);
    setHiddenRevealed(false);

    let dealerSum = 0;
    let dealerAceCount = 0;
    let dealerCards = [];

    // Draw one visible card for the dealer
    const visibleCard = newDeck.pop();
    dealerCards.push(visibleCard);
    dealerSum += getValue(visibleCard);
    dealerAceCount += checkAce(visibleCard);

    // ------------------------------------------------------
    setFormData((prevFormData) => ({
      ...prevFormData,
      dealerSum: dealerSum,
    }));
    // setDealerSum(dealerSum);
    setDealerAceCount(dealerAceCount);
    setDealerCards(dealerCards);

    let yourCards = [];
    let yourSum = 0;
    let yourAceCount = 0;

    // Ensure player gets different cards than the dealer
    for (let i = 0; i < 2; i++) {
      if (newDeck.length === 0) {
        buildDeck();
        showMessageWithDuration("");
        return;
      }
      const card = newDeck.pop();
      yourCards.push(card);
      yourSum += getValue(card);
      yourAceCount += checkAce(card);
    }

    // --------------------------------------------------------------

    setFormData((prevFormData) => ({
      ...prevFormData,
      dealerSum: dealerSum,
      yourSum: yourSum,
    }));
    // setYourSum(yourSum);
    setYourAceCount(yourAceCount);
    setYourCards(yourCards);
    setDeck(newDeck);
    setCanHit(true);
    setGameStarted(true);
    setResult("");
    setShowDummyImage(false);
  };

  const hit = () => {
    if (!canHit) return;

    const newDeck = [...deck];
    const card = newDeck.pop();

    const newYourSum = FormData.yourSum + getValue(card);
    const newYourAceCount = yourAceCount + checkAce(card);

    setYourCards([...yourCards, card]);
    // setYourSum(newYourSum);
    setYourAceCount(newYourAceCount);

    const reducedYourSum = reduceAce(newYourSum, newYourAceCount);

    setFormData((prevFormData) => ({
      ...prevFormData,
      yourSum: reducedYourSum,
    }));

    if (reduceAce(newYourSum, newYourAceCount) > 21) {
      setCanHit(false);
      setResult("You Lose!");
      setFormData((prevFormData) => ({
        ...prevFormData,
        yourSum: newYourSum,
        // betAmount: 0,
        Status: "You Lose!",
        wining_Amount: 0,
        loss_Amount: FormData.betAmount,
      }));
      updateWallet(-FormData.betAmount);
      showMessageWithDuration("You Lose!", 2000);

      // Reset the game state to allow new game to start
      setGameStarted(false);
      setTimeout(() => {
        resetGame();
        setShowDummyImage(true); // Show dummy image after 2 seconds
      }, 2000); // Delay to allow message to display for 2 seconds
    }

    setDeck(newDeck);
  };

  const stay = () => {
    setCanHit(false);

    let finalDealerSum = FormData.dealerSum + getValue(hidden);
    let finalDealerAceCount = dealerAceCount + checkAce(hidden);
    let dealerCardsWithHidden = [...dealerCards, hidden];

    finalDealerSum = reduceAce(finalDealerSum, finalDealerAceCount);
    const finalYourSum = reduceAce(FormData.yourSum, yourAceCount);

    while (finalDealerSum < 17) {
      const card = deck.pop();
      dealerCardsWithHidden.push(card);
      finalDealerSum += getValue(card);
      finalDealerAceCount += checkAce(card);
      finalDealerSum = reduceAce(finalDealerSum, finalDealerAceCount);
    }

    let message = "";

    if (finalDealerSum > 21) {
      message = "You Win!";
      setFormData((prevFormData) => ({
        ...prevFormData,
        dealerSum: finalDealerSum,
        yourSum: finalYourSum,
        // betAmount: 0,
        Status: message,
        wining_Amount: FormData.betAmount * 0.9,
        loss_Amount: 0,
      }));
      //   updateWallet(betAmount * 0.9); // 90% of bet amount added to wallet
      showMessageWithDuration("You Win!", 2000);
    } else if (finalYourSum > 21) {
      message = "You Lose!";
      setFormData((prevFormData) => ({
        ...prevFormData,
        dealerSum: finalDealerSum,
        yourSum: finalYourSum,
        // betAmount: 0,
        Status: message,
        wining_Amount: 0,
        loss_Amount: FormData.betAmount,
      }));
      updateWallet(-FormData.betAmount); // Bet amount deducted from wallet
      showMessageWithDuration("You Lose!", 2000);
    } else if (finalDealerSum === finalYourSum) {
      message = "Tie!";
      const tieDeduction = FormData.betAmount * 0.3; // 30% deduction
      setFormData((prevFormData) => ({
        ...prevFormData,
        dealerSum: finalDealerSum,
        yourSum: finalYourSum,
        // betAmount: 0,
        Status: message,
        wining_Amount: 0,
        loss_Amount: tieDeduction,
      }));
      updateWallet(-tieDeduction); // Deduct 30% of bet amount
      showMessageWithDuration("Tie!", 2000);
    } else if (finalDealerSum > finalYourSum) {
      message = "Dealer Wins!";
      setFormData((prevFormData) => ({
        ...prevFormData,
        dealerSum: finalDealerSum,
        yourSum: finalYourSum,
        // betAmount: 0,
        Status: message,
        wining_Amount: 0,
        loss_Amount: FormData.betAmount,
      }));
      updateWallet(-FormData.betAmount); // Bet amount deducted from wallet
      showMessageWithDuration("Dealer Wins!", 2000);
    } else {
      message = "You Win!";
      updateWallet(FormData.betAmount * 0.9); // 90% of bet amount added to wallet
      showMessageWithDuration("You Win!", 2000);
    }

    // setDealerSum(finalDealerSum);

    // setYourSum(finalYourSum);
    setDealerCards(dealerCardsWithHidden);
    setResult(message);
    setHiddenRevealed(true);
    if (message !== "") {
      setTimeout(() => {
        resetGame();
        setShowDummyImage(true); // Show dummy image after 2 seconds
      }, 2000); // Delay to allow message to display for 2 seconds
    }
  };

  const updateWallet = (amount) => {
    setFormData((prevData) => ({
      ...prevData,
      walletAmount: prevData.walletAmount + amount,
    }));
  };

  const getValue = (card) => {
    if (!card) {
      console.error("getValue: card is undefined");
      return 0;
    }

    const value = card.split("-")[0];
    if (isNaN(value)) {
      if (value === "A") {
        return 11;
      }
      return 10;
    }
    return parseInt(value);
  };

  const checkAce = (card) => {
    return card[0] === "A" ? 1 : 0;
  };

  const reduceAce = (sum, aceCount) => {
    while (sum > 21 && aceCount > 0) {
      sum -= 10;
      aceCount -= 1;
    }
    return sum;
  };

  const resetGame = () => {
    buildDeck();
    setFormData((prevFormData) => ({
      ...prevFormData,
      dealerSum: 0,
      yourSum: 0,
      betAmount: FormData.betAmount,
      Status: "",
      wining_Amount: 0,
      loss_Amount: 0,
    }));

    // setDealerSum(0);
    // setYourSum(0);
    setDealerAceCount(0);
    setYourAceCount(0);
    setHidden(null);
    setHiddenRevealed(false);
    setCanHit(false);
    setDealerCards([]);
    setYourCards([]);
    setResult("");
    setGameStarted(false); // Ensure game starts fresh
  };

  const handleBetChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      betAmount: parseInt(e.target.value),
    }));
  };

  const showMessageWithDuration = (msg, duration) => {
    const updateFormData = (newData) => {
      setFormData((prevData) => ({
        ...prevData,
        ...newData,
        walletAmount: newData.walletAmount,
        Status: msg,
      }));
    };

    switch (msg) {
      case "You Win!":
        updateFormData({
          walletAmount:
            FormData.walletAmount -
            FormData.betAmount +
            FormData.betAmount * 1.9,
          wining_Amount: FormData.betAmount * 1.9,
          loss_Amount: 0,
        });
        break;

      case "You Lose!":
        updateFormData({
          walletAmount: FormData.walletAmount - FormData.betAmount,
          wining_Amount: 0,
          loss_Amount: FormData.betAmount,
        });
        break;

      case "Tie!":
        updateFormData({
          walletAmount: FormData.walletAmount,
          wining_Amount: 0,
          loss_Amount: 0,
        });
        break;

      case "Dealer Wins!":
        updateFormData({
          walletAmount: FormData.walletAmount - FormData.betAmount,
          wining_Amount: 0,
          loss_Amount: FormData.betAmount,
        });
        break;

      default:
        console.warn("Unknown message:", msg);
        break;
    }

    // Log the formData

    console.log(
      FormData,
      "------------------------FormData at the inside point"
    );

    // Dispatch formData if necessary
    // dispatch(formData);

    // Show the message
    setMessage(msg);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, duration);
  };

  useEffect(() => {
    if (FormData.Status !== "") {
      dispatch(Fetch_BlackJack_Data(FormData));
      resetGame();
    }
  }, [FormData]);

  console.log(FormData, "------------------------FormData at the last point");

  return (
    <div className="blackjack-bg d-flex w-100 justify-content-start">
      <div>
        <div className="blackjack-box-1">
          <div className="d-flex justify-content-center flex-column pe-3 ps-3">
            <div className="d-flex justify-content-center">
              <img
                src={require("../../Assets/images/blackjack-card-logo.png")}
                alt=""
              />
            </div>
            <div>
              <div className="blackjack-btn-group mb-4">
                <div style={{display:'none'}}>
                  <p style={{ fontSize: "12px", marginBottom: "5px" }}>
                    Total Amount{" "}
                  </p>
                  <p className="t-a">{Math.floor(FormData.walletAmount)}</p>
                  {FormData.walletAmount < FormData.betAmount && (
                    <p>Insufficient Balance!</p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    style={{ fontSize: "12px", marginBottom: "5px" }}
                    htmlFor="betAmount"
                  >
                    Bet Amount:
                  </label>
                  <input
                    className="t-a"
                    type="tel"
                    id="betAmount"
                    name="betAmount"
                    min="10"
                    value={FormData.betAmount}
                    onChange={handleBetChange}
                  />
                </div>
              </div>
              <div>
                <>
                  <div className="blackjack-btn-group">
                    <button
                      className="t-a-btn"
                      id="hit"
                      onClick={hit}
                      disabled={!canHit}
                    >
                      <img src={require('../../Assets/Icon/hit.png')} alt="Hit" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                      Hit
                    </button>
                    <button
                      className="t-a-btn"
                      id="stay"
                      onClick={stay}
                      disabled={!canHit}
                    >
                      <img src={require('../../Assets/Icon/Stay.png')} alt="Hit" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                      Stand
                    </button>
                    <button
                      className="t-a-start-btn"
                      id="deal"
                      onClick={startGame}
                      disabled={
                        gameStarted ||
                        FormData.betAmount > FormData.walletAmount
                      }
                    >
                      Reset
                    </button>
                  </div>
                </>
                {result && (
                  <>
                    <p id="result"></p>
                  </>
                )}
                {showMessage && (
                  <div className="slot-message-container">{message}</div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="blackjack-box-2">

          <h2 className="blackjack-dealer">
            Dealer´s hand (<span>{FormData.dealerSum}</span>)
          </h2>
          <div className="blackjack-desk">
            <div>
              <div style={{ paddingBottom: "15px" }} id="dealer-cards">
                {dealerCards.map((card, index) => (
                  <img
                    key={index}
                    src={require(`../../Assets/card/${card}.png`)}
                    alt={card}
                  />
                ))}
                {hidden && gameStarted && !hiddenRevealed && (
                  <img
                    src={require(`../../Assets/card/BACK.png`)}
                    alt="card-back"
                  />
                )}
              </div>
              {showDummyImage && (
                <div className="dummy-image">
                  <img className="dummy-blackjack" src={require('../../Assets/images/Dummy-card.png')} alt="Dummy" />
                </div>
              )}
              <div style={{ paddingTop: "15px" }} id="your-cards">
                {yourCards.map((card, index) => (
                  <img
                    key={index}
                    src={require(`../../Assets/card/${card}.png`)}
                    alt={card}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* <h2 className="blackjack-dealer">
            Your hand (<span>{FormData.yourSum}</span>)
          </h2> */}
        </div>
      </div>
      <div className="blackjack-box-3">
        <Chatbox />
      </div>
    </div>
  );
}

export default HitandStay;
