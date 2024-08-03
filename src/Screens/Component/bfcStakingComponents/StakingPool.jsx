import { ArrowRightOutlined } from "@ant-design/icons";
import { Avatar, Divider } from "antd";
import { default as React, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Ath from "../../../Assets/Icon/ethereum-eth 1.png";
import BitCoin from "../../../Assets/Icon/logos_bitcoin.png";
import walletIcon from "../../../Assets/Icon/wallet-bold.png";
import CoinBagImg from "../../../Assets/Image/coinBag.png";
import coinBox from "../../../Assets/Image/coinJar (1).png";
import queIcon from "../../../Assets/Image/que.png";
import { useSelector } from "react-redux";

export default function StakingPool() {
  const poolAmt = 1648589;
  const TotalPymt = 4125;
  const earnAPY = 50;
  const totalPaid = 147.365;
  const totalPrtcpnt = 34;
  // const count =0;
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  console.log(user.myPayouts);

  const [TotalStakingRewardsEarned, setTotalStakingRewardsEarned] = useState(0);
  const [Total_Next_Payout , setTotal_Next_Payout] = useState(0)
    const [Payout_Distribution_In, setPayout_Distribution_In] = useState(0);

  useEffect(() => {
    let total_Staking_Pool_Price = 0;
    user?.myPayouts?.forEach((val) => {
      total_Staking_Pool_Price += val.Staking_Pool_Price;
    });
    setTotalStakingRewardsEarned(total_Staking_Pool_Price);
  }, [user]);

  useEffect(() => {
    let total_Next_Payout = 0;
    user?.myPayouts?.forEach((val) => {
      total_Next_Payout += val.Total_Next_Payout;
    });
    setTotal_Next_Payout(total_Next_Payout);
  }, [user]);

    useEffect(() => {
      let total_Payout_Distribution_In = 0;
      user?.myPayouts?.forEach((val) => {
        total_Payout_Distribution_In += val.Payout_Distribution_In;
      });
      setPayout_Distribution_In(total_Payout_Distribution_In);
    }, [user]);

//   const initialPoolData = [
//     {
//       coin: BitCoin,
//       type: "USD",
//       number: 56565,
//       amount: 4564654,
//     },
//     {
//       coin: Ath,
//       type: "USD",
//       number: 56565,
//       amount: 4564654,
//     },
//     {
//       coin: BitCoin,
//       type: "USD",
//       number: 56565,
//       amount: 4564654,
//     },
//     {
//       coin: BitCoin,
//       type: "USD",
//       number: "",
//       amount: 4,
//     },
//     {
//       coin: BitCoin,
//       type: "USD",
//       number: "",
//       amount: 4,
//     },
//     {
//       coin: BitCoin,
//       type: "USD",
//       number: "",
//       amount: 4,
//     },
//     {
//       coin: BitCoin,
//       type: "USD",
//       number: "",
//       amount: 4,
//     },
//     {
//       coin: BitCoin,
//       type: "USD",
//       number: "",
//       amount: 4,
//     },
//   ];
  // const [PoolData, setPoolData] = useState(initialPoolData.slice(0, 5));
  // const [count, setCount] = useState(initialPoolData.length);

  // const addItemToPool = () => {
  //     if (count < initialPoolData.length) {
  //         setPoolData([...PoolData, initialPoolData[count]]);
  //         setCount(count + 1);
  //     }
  // };

  return (
    <>
      <div className="hstry-main" id="BFG_main_box">
        <div className="rewards-history " id="poolBox1">
          <Row className="pool-top">
            <div>
              <Row>
                <Col
                  md={4}
                  sm={6}
                  className="d-flex flex-row align-items-center justify-content-center"
                >
                  <div>
                    <div className="stkPool">
                      <p className="font16">Staking pool</p>
                      <img src={queIcon} alt="" className="queMarkIcon" />
                    </div>
                    <div>
                      <p className="font32">${TotalStakingRewardsEarned}</p>
                    </div>
                  </div>
                </Col>
                <Col md={8} sm={6}>
                  <div className="d-flex flex-row align-items-center justify-content-between">
                    <Col>
                      <div className="stkPool">
                        <p className="font14">Total next Payout</p>
                        <img src={queIcon} alt="" className="queMarkIcon" />
                      </div>
                      <div>
                        <p className="font24">${Total_Next_Payout}</p>
                      </div>
                    </Col>
                    <Col>
                      <div className="stkPool" id="jusfy">
                        <p className="font14">Payout distribution in:</p>
                        <img src={queIcon} alt="" className="queMarkIcon" />
                      </div>
                      <div>
                        <p className="font24" id="jusfy">
                          ${Payout_Distribution_In}
                        </p>
                      </div>
                    </Col>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>

          <Divider className="box-divider" />

          <div>
            <ul className="listPool">
              {user?.myPayouts?.map((item, id) => (
                <li key={id} className="Listr_itenm">
                  <div>
                    <img src={BitCoin} alt="coin" />
                  </div>
                  <div>
                    <div className="poolTyp">
                      <p className="font20">
                        {item?.Deposit_Amount?.Deposit_Price}
                      </p>
                      <p className="font20">
                        {item?.Deposit_Amount?.Currency_type}
                      </p>
                    </div>
                    <div>
                      <p
                        className="font14"
                        style={{ color: "rgba(22, 31, 44, 1)" }}
                      >
                        ${item?.Exchange_Amount?.Exchange_Price}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="viewItem">
            <p className="font16">
              View all {user?.myPayouts?.length} staking items
              <span>
                <ArrowRightOutlined />
              </span>
            </p>
            <div>
              <Avatar.Group>
                {/* {PoolData.map((item, id) => (
                  <div key={id}>
                    <Avatar src={item.coin} />
                  </div>
                ))} */}
              </Avatar.Group>
            </div>
          </div>
          <div className="coinBagImg">
            <img src={CoinBagImg} alt="coinBag" style={{ width: "100%" }} />
          </div>
        </div>
        <div className="live-rewards" id="earnUp">
          <Row>
            <Col>
              <div className="history-box">
                <Row className="p-2">
                  <Col>
                    <div className="coinBoxImg">
                      <img
                        src={coinBox}
                        alt="coinBag"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="bgf-hd">
                      <h1>Earn up to {earnAPY}% APY in BFG staking</h1>
                    </div>
                    <p
                      className="font16"
                      style={{
                        padding: "5% 0",
                        width: "100%",
                        boxSizing: "border-box",
                      }}
                    >
                      Stake BFG and receive daily multi-currecny payouts in
                      USDT, BTC, ETH, BNB and TRX, or in BFG
                    </p>
                    <div className="d-flex flex-row justify-content-between align-items-center p-2">
                      <div>
                        <p className="font20 chng">Total paid</p>
                        <p className="font20 chng">{totalPaid}</p>
                      </div>
                      <div className="participants">
                        <p className="font20 chng">Staking participants</p>
                        <p className="font20 chng">{totalPrtcpnt}k+</p>
                      </div>
                    </div>
                    <div>
                      <button className="signUpBFG">
                        <span style={{ paddingRight: "2%" }}>
                          <img src={walletIcon} alt="wallet" />
                        </span>
                        Sing Up & Stake BFG{" "}
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
