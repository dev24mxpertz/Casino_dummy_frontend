import React, { useEffect, useState } from "react";
import Deposite from "../Pages/Depositeandwithdrawal/Deposite";
import "../../Styles/DepositeAndWithdrawal.css";
import Withdrawal from "../Pages/Depositeandwithdrawal/Withdrawal";
import BuySellCrypto from "../Pages/Depositeandwithdrawal/Buy-Sell-Crypto";
import MetaMaskImage from "../../Assets/Image/metamask.png";
import { message } from "antd";
import { Link } from "react-router-dom";

function DepositeAndWithdrawal() {
  const [activeScreen, setActiveScreen] = useState("deposit");
  const [WalletModel, setWalletModel] = useState(true);
  const [defaultAccount, setdefaultAccount] = useState(null);
  const [userBalance, setuserBalance] = useState(null);
  const [errorMessage, seterrorMessage] = useState(null);
  const [isRequestMade, setIsRequestMade] = useState(false);


  useEffect(() => {
    if (window.ethereum && !isRequestMade) {
      // Check if request hasn't been made yet
      setWalletModel(false);
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          setIsRequestMade(true);
          accountChangeHandler(result[0]);
        })
        .catch((error) => {
          console.error("Error requesting accounts:", error);
        });
    } else if (!window.ethereum) {
      message.error("Please Install MetaMask For the Wallet Purpose");
    }
  }, [isRequestMade]);

  const accountChangeHandler = (newAccount) => {
    setdefaultAccount(newAccount);
    getUserBalance(newAccount);
  };

  const getUserBalance = (address) => {
    console.log(address);
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((result) => setuserBalance(result));
  };

  const handleScreenChange = (screen) => {
    setActiveScreen(screen);
  };

  return (
    <div className="deposite-modal-box">
      <div className="deposite-modal-btn">
        <div className="deposite-modal-btn-card">
          <button
            className={`deposite-modal-btn-card-button ${
              activeScreen === "deposit" ? "active" : ""
            }`}
            onClick={() => handleScreenChange("deposit")}
          >
            Deposit
          </button>
          <button
            className={`deposite-modal-btn-card-button ${
              activeScreen === "withdrawal" ? "active" : ""
            }`}
            onClick={() => handleScreenChange("withdrawal")}
          >
            Withdrawal
          </button>
          <button
            style={{ inlineSize: "auto" }}
            className={`deposite-modal-btn-card-button ${
              activeScreen === "transactionHistory" ? "active" : ""
            }`}
            onClick={() => handleScreenChange("transactionHistory")}
          >
            Buy-Sell cryptos
          </button>
        </div>
      </div>
      <div className="deposite-modal-box-right">
        {activeScreen === "deposit" && (
          <div>
            <Deposite />
          </div>
        )}

        {activeScreen === "withdrawal" && (
          <div>
            <Withdrawal />
          </div>
        )}

        {activeScreen === "transactionHistory" && (
          <div>
            <BuySellCrypto />
          </div>
        )}
      </div>
      {WalletModel ? (
        <div className="modalBox">
          <img src={MetaMaskImage} alt={MetaMaskImage} />
          <>
            Hii ! Please have an account on{" "}
            <Link to={"https://metamask.io/"}>metamask.io</Link>
          </>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DepositeAndWithdrawal;
