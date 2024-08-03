import { RightOutlined } from "@ant-design/icons";
import React from "react";
import Doller from "../../../Assets/Icon/$.png";
import Secure from "../../../Assets/Icon/secure-icon.png";
import WalletIcon from "../../../Assets/Icon/Icon wallet (1).png";
import Money from "../../../Assets/Image/money.png";
import { useSelector } from "react-redux";

export default function MyBalance() {
  const user = useSelector((state) => state.auth.user);

  const BalanceData = {
    referralData: {
      available: 0.0,
      lockedBlnc: 0.0,
    },
    CommissionRewardsData: {
      available: 0.0,
      lockedBlnc: 0.0,
    },
    CryptoStakingRewards: {
      available: 0.0,
      lockedBlnc: 0.0,
    },
  };

  return (
    <div className="padding-4">
      <h1 className="text-white pt-2 pb-2 ">
        <span>
          <img src={Money} alt="money" />
        </span>
        My balance
      </h1>
      <div className="balance">
        <div className="d-flex flex-column p-2  blnc-cd align-items-center  justify-content-between">
          <div className="bln-box-hd">
            <p className="text-white pt-2 pb-2" style={{ fontSize: "20px" }}>
              Referral bonus
            </p>
            <p style={{ color: "rgba(34, 131, 246, 1)", fontSize: "14px" }}>
              Details{" "}
              <RightOutlined
                style={{ color: "rgba(34, 131, 246, 1)", fontSize: "14px" }}
              />
            </p>
          </div>
          <div
            className="d-flex flex-column align-items-center p-2"
            style={{ gap: "1rem", width: "100%" }}
          >
            <p className="rfrlFont" style={{ fontSize: "14px" }}>
              Available
            </p>
            <div className="moneyIcon">
              <img src={Doller} alt="$" />
              <p className=" rfrlFont">
                $
                {user?.myBalance.length > 0
                  ? user?.myBalance[0]?.Referral_bonus.Available_Balance
                  : "0"}
              </p>
            </div>

            <p className="rfrlFont">Locked balance</p>
            <p className="rfrlFont">
              <span>
                <img src={Secure} alt="$" />
              </span>
              $
              {user?.myBalance.length > 0
                ? user?.myBalance[0]?.Referral_bonus.Locked_Balance
                : "0"}
            </p>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ width: "100%" }}
            >
              <button className="Green-btn " id="btn-width">
                Minimal claim 1.5
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column p-2  blnc-cd align-items-center justify-content-between">
          <div className="bln-box-hd">
            <p className="text-white pt-2 pb-2" style={{ fontSize: "20px" }}>
              Commission rewards
            </p>
            <p style={{ color: "rgba(34, 131, 246, 1)", fontSize: "14px" }}>
              Details{" "}
              <RightOutlined
                style={{ color: "rgba(34, 131, 246, 1)", fontSize: "14px" }}
              />
            </p>
          </div>
          <div
            className="d-flex flex-column align-items-center p-2"
            style={{ gap: "1rem", width: "100%" }}
          >
            <p className="rfrlFont" style={{ fontSize: "14px" }}>
              Available
            </p>
            <div className="moneyIcon">
              <img src={Doller} alt="$" />
              <p className=" rfrlFont">
                $
                {user?.myBalance.length > 0
                  ? user?.myBalance[0]?.Commission_Rewards
                  : "0"}
              </p>
            </div>

            <p className="rfrlFont">
              <img src={WalletIcon} alt="$" />
            </p>
            <p
              className="rfrlFont"
              style={{ color: "rgba(34, 131, 246, 1)", fontSize: "14px" }}
            >
              View my commission balances{" "}
              <RightOutlined
                style={{ color: "rgba(34, 131, 246, 1)", fontSize: "14px" }}
              />
            </p>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ width: "100%" }}
            >
              <button className="Green-btn " id="btn-width">
                Minimal claim 1.5
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column p-2  blnc-cd align-items-center justify-content-between">
          <div className="bln-box-hd">
            <p className="text-white pt-2 pb-2" style={{ fontSize: "20px" }}>
              Crypto Staking rewards
            </p>
            <p style={{ color: "rgba(34, 131, 246, 1)", fontSize: "14px" }}>
              Details{" "}
              <RightOutlined
                style={{ color: "rgba(34, 131, 246, 1)", fontSize: "14px" }}
              />
            </p>
          </div>
          <div
            className="d-flex flex-column align-items-center p-2"
            style={{ gap: "1rem", width: "100%" }}
          >
            <p
              className="rfrlFont"
              style={{ fontSize: "14px", fontWeight: "400 !important" }}
            >
              Available
            </p>
            <div className="moneyIcon">
              <img src={Doller} alt="$" />
              <p className=" rfrlFont">
                $
                {user?.myBalance.length > 0
                  ? user?.myBalance[0]?.Crypto_Staking_Rewards
                  : "0"}
              </p>
            </div>

            <p className="rfrlFont">
              <img src={WalletIcon} alt="$" />
            </p>
            <p
              style={{
                color: "rgba(34, 131, 246, 1)",
                fontSize: "14px",
                fontWeight: "400 !important",
              }}
            >
              View my commission balances{" "}
              <RightOutlined
                style={{ color: "rgba(34, 131, 246, 1)", fontSize: "14px" }}
              />
            </p>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ width: "100%" }}
            >
              <button className="Green-btn " id="btn-width">
                Minimal claim 1.5
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
/* <div className='nav-top'>
                <Navbar.Toggle style={{ filter: 'invert(12)' }} onClick={handleToggleOptions} aria-controls="basic-navbar-nav" />
                <div className='wallet-side'>
                  <button className="red-btn"><img src={require('../../Assets/Icon/wallet-bold.png')} alt="" />
                    <span style={{ fontSize: '16px' }}>Wallet</span>
                  </button>
                  <div>
                    <Userprofile handleLogout={handleLogout} />
                  </div>
                </div>

              </div> */
