import React, { useState } from "react";
import {
  LockOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Form, Input } from "antd";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login_user } from "../../store/Actions/authActions";

function Login({ onLogin }) {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [setVisible] = useState("");
  const [setIsLoggedIn] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      console.log(values);
      await dispatch(login_user(values));
      // navigate("/casino");
    } catch (error) {
      // Handle login errors
      console.error("Login Error:", error);
      setErrorMessage("Incorrect username or password");
    }
  };

  const handleLoginSuccess = (token) => {
    setIsLoggedIn(true);
    setVisible(false);
    localStorage.setItem("token", token);
    // navigate("/casino");
  };

  return (
    <>
      <div className="signup">
        <div className="signup-left d-none d-sm-block w-100">
          <img
            className="img-fluid"
            src={require("../../Assets/Image/login-left.png")}
            alt=""
          />
        </div>
        <div className="signup-right">
          <div>
            <Row className="icon-social">
              <Col>
                <img
                  className="img-fluid"
                  src={require("../../Assets/Icon/Google button.png")}
                  alt=""
                />{" "}
              </Col>
              <Col>
                <img
                  className="img-fluid"
                  src={require("../../Assets/Icon/Telegram button.png")}
                  alt=""
                />
              </Col>
              <Col>
                <img
                  className="img-fluid"
                  src={require("../../Assets/Icon/Metamask button.png")}
                  alt=""
                />
              </Col>
              <Col>
                <img
                  className="img-fluid"
                  src={require("../../Assets/Icon/Binance button.png")}
                  alt=""
                />
              </Col>
              <Col>
                <img
                  className="img-fluid"
                  src={require("../../Assets/Icon/Tron button.png")}
                  alt=""
                />
              </Col>
              <Col>
                <img
                  className="img-fluid"
                  src={require("../../Assets/Icon/Coin button.png")}
                  alt=""
                />
              </Col>
            </Row>
          </div>
          <div className="row justify-content-center align-items-center mb-2">
            <div className="col">
              <div style={{ borderBottom: "1px solid #6efe7d" }}></div>
            </div>
            <div className="col-auto text-white">OR</div>
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
                  { required: true, message: "Please input your Password!" },
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
              <Form.Item>
                <Link className="login-form-forgot" href="">
                  Did you forget your password?
                </Link>
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
                    src={require("../../Assets/Icon/wallet-bold.png")}
                    alt=""
                  />{" "}
                  Log in
                </button>
              </Form.Item>
            </Form>
          </div>
          <div style={{ color: "white" }}>
            <p className="login-age-checkbox">
              When you access, confirm that you are at least 18 years old age
              and accept{" "}
              <Link className="login-form-forgot">{""} Service Conditions</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
