

import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Form, Input, Modal } from "antd";
import {
  LockOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { RegisterUser_token } from "../../../store/Actions/authActions";
import { useDispatch, useSelector } from "react-redux";

export default function ReferralRegisteration() {


  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [customMessage, setCustomMessage] = useState("");

  const navigate = useNavigate()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch()

  const { token }  = useParams()
    console.log(`----------- Token -------`  ,  token);


    // useEffect(() => {
    //   if (isAuthenticated) {
    //     navigate("/casino");
    //   }
    // }, [isAuthenticated]);



  const onFinish = async (values) => {
    try {
      console.log(values);
      const formData = {
        Email: values.Email,
        password: values.password,
        selectedCountry: selectedCountry ? selectedCountry.value : "",
        ageConfirmation: customMessage !== "",
        token,
      };
        await dispatch(RegisterUser_token(formData));
      setCustomMessage("");
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const countryOptions = [
    { value: "USA", label: "United States" },
    { value: "CAN", label: "Canada" },
    { value: "GBR", label: "United Kingdom" },
    { value: "IND", label: "Bharat" },
  ];

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
    if (event.target.checked) {
      setCustomMessage("You're eligible!");
    } else {
      setCustomMessage("");
    }
  };

  return (
    <div
      className="bg-rfrl"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        className="custom-modal"
        style={{ maxWidth: "902px", width: "902px", height: "569px" }}
      >
        <div className="signu">
          <div className="tabs modal-tab p-5">
            <div className="signup-left d-none d-sm-block w-100">
              <img
                className="img-fluid"
                src={require("../../../Assets/Image/login-left.png")}
                alt=""
              />
            </div>
            <div className="signup-right">
              <div>
                <Row className="icon-social">
                  <Col>
                    <img
                      className="img-fluid"
                      src={require("../../../Assets/Icon/Google button.png")}
                      alt=""
                    />{" "}
                  </Col>
                  <Col>
                    <img
                      className="img-fluid"
                      src={require("../../../Assets/Icon/Telegram button.png")}
                      alt=""
                    />
                  </Col>
                  <Col>
                    <img
                      className="img-fluid"
                      src={require("../../../Assets/Icon/Metamask button.png")}
                      alt=""
                    />
                  </Col>
                  <Col>
                    <img
                      className="img-fluid"
                      src={require("../../../Assets/Icon/Binance button.png")}
                      alt=""
                    />
                  </Col>
                  <Col>
                    <img
                      className="img-fluid"
                      src={require("../../../Assets/Icon/Tron button.png")}
                      alt=""
                    />
                  </Col>
                  <Col>
                    <img
                      className="img-fluid"
                      src={require("../../../Assets/Icon/Coin button.png")}
                      alt=""
                    />
                  </Col>
                </Row>
              </div>
              <div className="row justify-content-center align-items-center mb-2">
                <div className="col">
                  <div style={{ borderBottom: "1px solid #6efe7d" }}></div>
                </div>
                <div className="col-auto text-white">O</div>
                <div className="col">
                  <div style={{ borderBottom: "1px solid #6efe7d" }}></div>
                </div>
              </div>
              <div>
                <Form
                  name="normal_login"
                  className="login-form"
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="Email"
                    rules={[
                      { required: true, message: "Please input your Email!" },
                    ]}
                    validateStatus={errorMessage ? "error" : ""}
                    help={errorMessage}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Email"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password!",
                      },
                    ]}
                    validateStatus={errorMessage ? "error" : ""}
                    help={errorMessage}
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="Password"
                      iconRender={(visible) =>
                        visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                      }
                    />
                  </Form.Item>
                  <Form.Item className="country-select">
                    <Select
                      value={selectedCountry}
                      placeholder={"Choose your country:"}
                      onChange={handleCountryChange}
                      options={countryOptions}
                    />
                  </Form.Item>
                  <Form.Item>
                    <div
                      style={{ color: "white" }}
                      className="d-flex align-items-center"
                    >
                      <div style={{ marginRight: "10px" }}>
                        <input
                          style={{ width: "30px", height: "30px" }}
                          type="checkbox"
                          onChange={handleCheckboxChange}
                        />
                      </div>
                      <div>
                        <p
                          className="login-age-checkbox"
                          style={{ margin: "0" }}
                        >
                          I confirm that I am 18 years old and I have read{" "}
                          <Link href="">Service conditions</Link>
                        </p>
                      </div>
                    </div>
                  </Form.Item>
                  <Form.Item>
                    <button
                      style={{
                        maxWidth: "100%",
                        height: "55px",
                        fontSize: "24px",
                      }}
                      className="green-btn w-100"
                    >
                      <img
                        src={require("../../../Assets/Icon/wallet-bold.png")}
                        alt=""
                      />{" "}
                      Register here
                    </button>
                  </Form.Item>
                </Form>
              </div>
              <div style={{ color: "white" }}>
                <p className="login-age-checkbox">
                  When you access, confirm that you are at least 18 years old
                  age and accept{" "}
                  <Link className="login-form-forgot">Service conditions</Link>
                </p>
              </div>
              <Modal
                title="Error"
                visible={errorMessage !== ""}
                onCancel={() => setErrorMessage("")}
                footer={null}
              >
                <p>{errorMessage}</p>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
