import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_User_Calculated_activity, get_User_Calculated_stactics } from "../../../store/Actions/DataActions";

function Accountsection3() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_User_Calculated_stactics(user?._id));
  }, [dispatch, user]);
  useEffect(() => {
    dispatch(get_User_Calculated_activity(user?._id));
  }, [dispatch, user]);
  const Total_staticsData = useSelector((state) => state.Data.Total_statics);
  const Total_ActivityData = useSelector((state) => state.Data.Total_Activity);
  console.log(
    Total_staticsData,
    "------------------------------------Total_staticsData"
  );
//   Total_ActivityData;
  console.log(
    Total_ActivityData,
    "------------------------------------Total_ActivityData"
  );

  return (
    <div className="account-s2 pt-0">
      <div className="d-flex flex-column text-white ">
        <div className="account-s3-heading d-none d-sm-block">
          <h1>Settings</h1>
        </div>
        <div className="d-flex justify-content-between a-box ">
          <div className="account-s3 d-flex justify-content-around flex-column b-box-center">
            <div className="d-flex justify-content-around flex-column gap-3 w-100">
              <div className="d-flex gap-2">
                <div>
                  <img
                    style={{ width: "26px", height: "26px" }}
                    src={require("../../../Assets/Icon/statistics.png")}
                    alt=""
                  />
                </div>
                <div>
                  <p>Statistics</p>
                </div>
              </div>
              <div className="d-flex justify-content-between flex-column-on-mobile">
                <div className="account-s3-inner-card">
                  <div>
                    <h5>Total bet</h5>
                  </div>
                  <div className="d-flex gap-1 align-items-center">
                    <div>
                      <img
                        style={{ width: "26px", height: "26px" }}
                        src={require("../../../Assets/Icon/dollar-circle-line.png")}
                        alt=""
                      />
                    </div>
                    <div>
                      <p>{Total_staticsData.Total_bet_Amount}</p>
                    </div>
                  </div>
                </div>
                <div className="account-s3-inner-card">
                  <div>
                    <h5>Total bets</h5>
                  </div>
                  <div className="d-flex gap-1 align-items-center">
                    <div>
                      <img
                        style={{ width: "26px", height: "26px" }}
                        src={require("../../../Assets/Icon/dollar-circle-line.png")}
                        alt=""
                      />
                    </div>
                    <div>
                      <p>{Total_staticsData.Total_length_of_bets}</p>
                    </div>
                  </div>
                </div>
                <div className="account-s3-inner-card">
                  <div>
                    <h5>Earned from staking</h5>
                  </div>
                  <div className="d-flex gap-1 align-items-center">
                    <div>
                      <img
                        style={{ width: "26px", height: "26px" }}
                        src={require("../../../Assets/Icon/dollar-circle-line.png")}
                        alt=""
                      />
                    </div>
                    <div>
                      <p>{Total_staticsData.Total_earned_FromStacking}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-around flex-column gap-3 w-100">
              <div className="d-flex gap-2 account-s3-inner-heading">
                <div>
                  <img
                    style={{ width: "26px", height: "26px" }}
                    src={require("../../../Assets/Icon/activity.png")}
                    alt=""
                  />
                </div>
                <div>
                  <p>Activity</p>
                </div>
              </div>
              <div className="d-flex justify-content-between flex-column-on-mobile">
                <div className="account-s3-inner-card">
                  <div>
                    <h5>Total tips</h5>
                  </div>
                  <div className="d-flex gap-1 align-items-center">
                    <div>
                      <img
                        style={{ width: "26px", height: "26px" }}
                        src={require("../../../Assets/Icon/dollar-circle-line.png")}
                        alt=""
                      />
                    </div>
                    <div>
                      <p>{Total_ActivityData.Total_Tips}</p>
                    </div>
                  </div>
                </div>
                <div className="account-s3-inner-card">
                  <div>
                    <h5>Total coindrops</h5>
                  </div>
                  <div className="d-flex gap-1 align-items-center">
                    <div>
                      <img
                        style={{ width: "26px", height: "26px" }}
                        src={require("../../../Assets/Icon/dollar-circle-line.png")}
                        alt=""
                      />
                    </div>
                    <div>
                      <p>{Total_ActivityData.Total_coinDrops}</p>
                    </div>
                  </div>
                </div>
                <div className="account-s3-inner-card">
                  <div>
                    <h5>Total rainfall</h5>
                  </div>
                  <div className="d-flex gap-1 align-items-center">
                    <div>
                      <img
                        style={{ width: "26px", height: "26px" }}
                        src={require("../../../Assets/Icon/dollar-circle-line.png")}
                        alt=""
                      />
                    </div>
                    <div>
                      <p>{Total_ActivityData.Total_Rainfall}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="account-s3-right">
            <div>
              <div className="account-s3-right-heading">
                <img
                  style={{ width: "26px", height: "26px" }}
                  src={require("../../../Assets/Icon/gaming remote.png")}
                  alt=""
                />
                <p>The most played games</p>
              </div>
              <div className="account-s3-right-card">
                <div className="account-s3-rc">
                  <img
                    style={{ width: "120px" }}
                    src={require("../../../Assets/Icon/Roulette (2) 1.png")}
                    alt=""
                  />
                </div>
                <div className="account-s3-rc">
                  <img
                    style={{ width: "76px" }}
                    src={require("../../../Assets/Icon/All-bet-logo.png")}
                    alt=""
                  />
                  <button className="red-btn">All games</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accountsection3;
