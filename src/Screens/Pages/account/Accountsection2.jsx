import React, { useState } from "react";
import { Checkbox, Modal } from "antd"; // Added Modal import
import "../../../Styles/UserModal.css";
import { Avatar, Button, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Change_Password } from "../../../store/Actions/authActions";
import { Activate_Email } from "../../../store/Actions/DataActions";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

function Accountsection2() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [Confirmpassword, setConfirmpassword] = useState("");
  const [Newpassword, setNewpassword] = useState("");
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.auth.user);
  console.log(userData);
  const user_id = userData._id;
  const handlePasswordSubmit = async () => {
    //   console.log(Newpassword, Confirmpassword);
    if (Newpassword !== Confirmpassword) {
      message.error("New Password and Confirm Password do not match");
      return; // Stop further execution
    }
    const formData = {
      user_id: userData._id,
      Newpassword,
    };
    await dispatch(Change_Password(formData));
    setIsModalVisible(false);
  };

  const handlePasswordChange = () => {
    setIsModalVisible(true);
  };

  const Handle2FASubmit = () => {
    dispatch(Activate_Email(user_id));
  };
  return (
    <>
      <div className="account-s2 black-bg">
        <div className="account-s2-content">
          <div className="container">
            <div className="row justify-content-between pe-2 ps-2">
              <div className="account-s2-card col-md-4 d-flex">
                <div className="account-s2-card-1">
                  <div>
                    <div className="d-flex justify-content-between">
                      <div className="card1-mail">
                        <img
                          src={require("../../../Assets/Icon/mail-outline.png")}
                          alt=""
                        />
                        <p>My email</p>
                      </div>
                      <div className="card1-verify">
                        <img
                          src={require("../../../Assets/Icon/check.png")}
                          alt=""
                        />
                        <p>
                          {userData?.isVerfiedEmail
                            ? "Verified"
                            : "Not Verfied"}
                        </p>
                      </div>
                    </div>
                    <div className="card-content">
                      <p>
                        Set up email to access your account whenever. Use this
                        email to open the platform on any device.
                      </p>
                    </div>
                    <div>
                      <Checkbox className="card1-checkbox" onChange={onChange}>
                        Receive promotions by email
                      </Checkbox>
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control card1-input"
                      value={userData.Email}
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="account-s2-card col-md-4 d-flex">
                <div className="account-s2-card-1">
                  <div>
                    <div className="d-flex justify-content-between">
                      <div className="card1-mail">
                        <img
                          src={require("../../../Assets/Icon/lock-password.png")}
                          alt=""
                        />
                        <p>Password</p>
                      </div>
                      <div className="card1-verify">
                        <img
                          src={require("../../../Assets/Icon/check.png")}
                          alt=""
                        />
                        <p>Password added</p>
                      </div>
                    </div>
                    <div className="card-content">
                      <p>
                        Must contain at least 8 characters: a combination of
                        letters and characters
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      style={{ maxWidth: "100%" }}
                      onClick={handlePasswordChange}
                      className="red-btn"
                    >
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
              <div className="account-s2-card col-md-4 d-flex">
                <div className="account-s2-card-1">
                  <div>
                    <div className="d-flex justify-content-between">
                      <div className="card1-mail">
                        <img
                          src={require("../../../Assets/Icon/shield.png")}
                          alt=""
                        />
                        <p>2FA</p>
                      </div>
                      <div className="card1-verify">
                        {/* <img
                          src={require("../../../Assets/Icon/Wrong.png")}
                          alt=""
                        /> */}
                        <p>
                          2FA{""}
                          {userData.isVerfiedEmail
                            ? "Activated"
                            : "Not Activated"}
                        </p>
                      </div>
                    </div>
                    <div className="card-content">
                      <p>
                        2 layer of security for your Casino account. Establish
                        2FA to protect your account (available only when you
                        sign up with Google or when email and password are set)
                      </p>
                    </div>
                  </div>
                  <div>
                    {userData.isVerfiedEmail ? (
                      <button
                        style={{ maxWidth: "100%" }}
                        className="green-btn"
                        disabled
                      >
                        Already Activate
                      </button>
                    ) : (
                      <button
                        onClick={Handle2FASubmit}
                        style={{ maxWidth: "100%" }}
                        className="green-btn"
                      >
                        Activate
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title=""
        className="profile-modal-body"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        {/* <UserModalContain /> */}
        {/* <PasswordChange /> */}
        {/* <p style={{color:"white"}}>Modal Content</p> */}
        <div className="profile-modal">
          <div className="profile-modal-upper">
            <div className="user-contain-box">
              <div className="d-flex align-items-end mt-5">
                <Avatar src={userData?.image} size={121} />
                <div className="ms-3 data-user">
                  <p>User - {userData?.userID}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-modal-lower">
            <div className="">
              <label>Please Enter New Password here </label>
              <Input
                type="Password"
                value={Newpassword}
                placeholder="New Password"
                onChange={(e) => setNewpassword(e.target.value)}
              />
              <label className="mt-4">Confirm Password here </label>
              <Input
                type="Password"
                value={Confirmpassword}
                placeholder="Old Password"
                onChange={(e) => setConfirmpassword(e.target.value)}
              />
              <Button
                onClick={handlePasswordSubmit}
                style={{ maxWidth: "100%" }}
                className="green-btn mt-5"
              >
                Activate
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Accountsection2;
