import { Avatar, Button, Modal, message } from "antd";
import React, { useState, useEffect, useRef } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../Styles/Authentication.css";
import "../../Styles/Header.css";
import "../../Styles/navCss.css";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import Userprofile from "../Pages/Userprofile";
import NavBarReferral from "./ReferralPageComponents/NavBarReferral";
import NavBarBFG from "./bfcStakingComponents/NavBarBFG";
import DepositeAndWithdrawal from "../Component/DepositeAndWithdrawal";
import { debounce } from "lodash";
import axios from "axios"; // Import axios for data fetching
import { useDispatch, useSelector } from "react-redux";
import { async_removeuser } from "../../store/Actions/authActions";

function Header() {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const [depositeModalVisible, seDepositeModalVisible] = useState(false);
  const [defaultAccount, setdefaultAccount] = useState(null);
  const [userBalance, setuserBalance] = useState(null);
  const [errorMessage, seterrorMessage] = useState(null);
  const [isRequestMade, setIsRequestMade] = useState(false);
  const location = useLocation();
  console.log(location);
  console.log(isAuthenticated);
  const userData = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();


  const navBarItem = [
    { link: "#", text: "Link 1" },
    { link: "#", text: "Link 2" },
    { link: "#", text: "Link 3" },
    { link: "#", text: "Link 4" },
  ];

  useEffect(() => {
    if (isAuthenticated) {
      setVisible(false);
      setIsLoggedIn(true);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (window.ethereum && !isRequestMade) {
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
      // message.error("Please Install MetaMask");
    }
  }, [isRequestMade]);

  const accountChangeHandler = (newAccount) => {
    setdefaultAccount(newAccount);
    getUserBalance(newAccount);
    // console.log(newAccount)
  };

  const getUserBalance = (address) => {
    console.log(address);
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((result) => setBalance(result));
    //  console.log(balance);
    //  return setuserBalance(ethers.utils.formatEther(result))})
  };

  const menuRef = useRef(null);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleLoginClick = () => {
    setActiveTab("login");
    showModal();
  };

  const handleSignupClick = () => {
    setActiveTab("signup");
    showModal();
  };

  const debouncedHandleToggleOptions = useRef(
    debounce(() => {
      setShowOptions((prevState) => !prevState);
    }, 100)
  ).current;

  const handleToggleOptions = () => {
    debouncedHandleToggleOptions(); // Call the debounced version of handleToggleOptions
  };

  const handleOptionClick = () => {
    setShowOptions(false); // Close the toggle menu when an option is clicked
  };
  console.log(!showOptions);

  const handleLoginSuccess = (token) => {
    setIsLoggedIn(true);
    setVisible(false);
  };

  const handleLogout = () => {
    dispatch(async_removeuser());
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setVisible(false);
  };

  const handleDepositeButtonClick = () => {
    seDepositeModalVisible(true);
  };

  const handleDepositeModalCancel = () => {
    seDepositeModalVisible(false);
  };

  const handleBackClick = () => {
    // navigate("/casino");
    console.log("hi");
  }

  const OpenExtensionHandler = (extensionId) => {
    let url;

    // Define URLs for different browser extensions
    switch (extensionId) {
      case "nkbihfbeogaeaoehlefnkodbefgpgknn": // MetaMask extension ID
        url = `https://chrome.google.com/webstore/detail/${extensionId}`;
        break;
      // Add cases for other extensions as needed
      default:
        // Default case: if extension is not recognized, do nothing
        console.log(`Extension '${extensionId}' not supported.`);
        return;
    }

    // Open the URL in a new tab
    window.open(url, "_blank");
  };


  return (
    <>
      {isLoggedIn ? (
        <div>
          <Navbar bg="head" expand="sm" className="bg-head">
            <Container fluid>
              <Navbar.Brand className="navbar-rolling">
                {location.pathname === "/ReferralProgram" ? (
                  <div onClick={handleBackClick}>
                    <p
                      style={{ font: "24px", color: "#fff", cursor: "pointer" }}
                    >
                      <IoIosArrowBack />
                      Back
                    </p>
                  </div>
                ) : location.pathname === "/BFGStaking" ? (
                  <div onClick={handleBackClick}>
                    <p
                      style={{ font: "24px", color: "#fff", cursor: "pointer" }}
                    >
                      <IoIosArrowBack />
                      Back
                    </p>
                  </div>
                ) : (
                  <div
                    style={{ maxWidth: "180px" }}
                    className="d-flex align-items-center"
                  >
                    <img
                      src={require("../../Assets/Icon/csinos logo 2.png")}
                      alt=""
                    />
                    <h2
                      style={{
                        fontSize: "20px",
                        color: "#fff",
                        marginLeft: "10px",
                        marginTop: "10px",
                      }}
                    >
                      Rolling Star
                    </h2>
                  </div>
                )}
              </Navbar.Brand>
              <Navbar.Toggle
                style={{ filter: "invert(12)" }}
                onClick={handleToggleOptions}
                aria-controls="basic-navbar-nav"
              />
              <div className="walletProfile">
                {location.pathname === "/ReferralProgram" ? (
                  <NavBarReferral />
                ) : location.pathname === "/BFGStaking" ? (
                  <NavBarBFG />
                ) : (
                  <div className="walletProfile">
                    <button className="red-btn">
                      <img
                        src={require("../../Assets/Icon/wallet-bold.png")}
                        alt=""
                      />
                    </button>
                    <div className="profile-icon">
                      <Userprofile handleLogout={handleLogout} />
                    </div>
                  </div>
                )}
              </div>
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end"
              >
                <div>
                  <Nav
                    className={`align-items-start ml-auto ${showOptions ? "" : "d-none"
                      } d-sm-flex`}
                  >
                    <ButtonGroup
                      horizontal
                      className="w-100 nav-2-mobile e900-c mt-3 d-flex flex-column flex-sm-row ps-3 align-items-center start-align"
                    >
                      <div className="w-100 nav-2-mobile gap-3 d-flex flex-column flex-sm-row align-items-center start-align">
                        <div>
                          <Link
                            className="text-white text-decoration-none fs-5"
                            style={{ fontSize: "18px", marginRight: "15px" }}
                            to="/casino"
                            rel="stylesheet"
                            href=""
                          >
                            Casino
                          </Link>
                        </div>
                        <div>
                          <Link
                            onClick={handleOptionClick}
                            style={{ fontSize: "18px", marginRight: "15px" }}
                            className="text-decoration-none text-white"
                            to="/BFGStaking"
                          >
                            BFG Staking
                          </Link>
                        </div>
                        <div>
                          <Link
                            onClick={handleOptionClick}
                            style={{ fontSize: "18px", marginRight: "15px" }}
                            className="text-decoration-none text-white"
                            to="/ReferralProgram"
                          >
                            Referral program
                          </Link>
                        </div>
                        <button
                          className="deposite-button"
                          onClick={() => {
                            handleDepositeButtonClick();
                            handleOptionClick();
                          }}
                        >
                          <span style={{ fontSize: "18px", color: "white" }}>
                            Deposit and withdrawal
                          </span>
                        </button>
                        <Modal
                          visible={depositeModalVisible}
                          onCancel={handleDepositeModalCancel}
                          footer={null}
                          className="deposite-modal"
                          style={{
                            maxWidth: "902px",
                            width: "902px",
                            height: "569px",
                            position: "relative",
                          }}
                        >
                          <div>
                            <DepositeAndWithdrawal />
                          </div>
                        </Modal>
                        <div
                          onClick={handleOptionClick}
                          className="d-block d-sm-none"
                        >
                          <div
                            onClick={handleBackClick}
                            className="d-block d-sm-none"
                          >
                            <p
                              style={{
                                fontSize: "18px",
                                color: "#fff",
                                cursor: "pointer",
                              }}
                            >
                              Back
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="wallet-container nav-2-mobile gap-3"
                        onClick={handleOptionClick}
                      >
                        <div className="wallet hide-profile justify-content-evenly">
                          <div>
                            <Avatar
                              style={{ backgroundColor: "#87d068" }}
                              icon={
                                <img
                                  src={require("../../Assets/Icon/cryptocurrency-color_usdt.png")}
                                  alt=""
                                />
                              }
                            />
                          </div>
                          <div>
                            <p>${balance}</p>
                          </div>
                        </div>
                        <div
                          onClick={() =>
                            OpenExtensionHandler(
                              "nkbihfbeogaeaoehlefnkodbefgpgknn"
                            )
                          }
                          className="hide-profile"
                        >
                          <button className="red-btn">
                            <img
                              src={require("../../Assets/Icon/wallet-bold.png")}
                              alt=""
                            />
                            <span style={{ fontSize: "16px" }}>Wallet</span>
                          </button>
                        </div>
                        <div className="profile-icon">
                          <Userprofile handleLogout={handleLogout} />
                        </div>
                      </div>
                    </ButtonGroup>
                  </Nav>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      ) : (
        <div>
          <Navbar bg="head" expand="sm" className="bg-head">
            <Container fluid>
              <Navbar.Brand>
                <div
                  style={{ maxWidth: "180px" }}
                  className="d-flex align-items-center"
                >
                  <img
                    src={require("../../Assets/Icon/csinos logo 2.png")}
                    alt=""
                  />
                  <h2
                    style={{
                      fontSize: "20px",
                      color: "#fff",
                      marginLeft: "10px",
                      marginTop: "10px",
                    }}
                  >
                    Rolling Star
                  </h2>
                </div>
              </Navbar.Brand>
              <Navbar.Toggle
                style={{ filter: "invert(12)" }}
                onClick={handleToggleOptions}
                aria-controls="basic-navbar-nav"
              />
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end"
              >
                <Nav
                  className={`align-items-center ml-auto ${showOptions ? "" : "d-none"
                    } d-sm-flex gap-3`}
                >
                  <Link
                    className="text-decoration-none"
                    to="/"
                    onClick={handleOptionClick}
                  >
                    <Link
                      className="text-white text-decoration-none fs-5"
                      to="/"
                      rel="stylesheet"
                      href=""
                    >
                      Home
                    </Link>
                  </Link>
                  <Link
                    className="text-decoration-none"
                    to="/casino"
                    onClick={handleOptionClick}
                  >
                    <Link
                      className="text-white text-decoration-none fs-5"
                      to="/casino"
                      rel="stylesheet"
                      href=""
                    >
                      Casino
                    </Link>
                  </Link>
                  <Button
                    className="green-btn fs-5 text-white"
                    onClick={() => {
                      handleLoginClick();
                      handleOptionClick();
                    }}
                  >
                    <img
                      src={require("../../Assets/Icon/wallet-bold.png")}
                      alt=""
                    />{" "}
                    Log in
                  </Button>
                  <Button
                    className="golden-btn fs-5 text-white"
                    onClick={() => {
                      handleSignupClick();
                      handleOptionClick();
                    }}
                  >
                    <img
                      src={require("../../Assets/Icon/wallet-bold.png")}
                      alt=""
                    />{" "}
                    Register
                  </Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Modal
            visible={visible}
            onCancel={handleCancel}
            footer={null}
            className="custom-modal"
            style={{ maxWidth: "902px", width: "902px", height: "569px" }}
          >
            <div className="signu">
              <div className="tabs modal-tab">
                <div className="btn-group-model">
                  <button
                    className={`black-btn ${activeTab === "login" ? "active" : ""
                      }`}
                    type="button"
                    onClick={() => handleTabChange("login")}
                    style={{
                      fontSize: "32px",
                      opacity: "100%",
                      color: "white",
                    }}
                  >
                    Login
                  </button>
                  <button
                    className={`black-btn ${activeTab === "signup" ? "active" : ""
                      }`}
                    type="button"
                    onClick={() => handleTabChange("signup")}
                    style={{
                      fontSize: "32px",
                      opacity: "100%",
                      color: "white",
                    }}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
            {activeTab === "login" && (
              <div className="login-form">
                <Login onLogin={handleLoginSuccess} />
              </div>
            )}
            {activeTab === "signup" && (
              <div className="signup-form">
                <SignUp />
              </div>
            )}
          </Modal>
        </div>
      )}
    </>
  );
}

export default Header;
