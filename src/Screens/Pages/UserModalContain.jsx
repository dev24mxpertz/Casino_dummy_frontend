import React, { useEffect } from "react";
import "../../Styles/UserModal.css";
import { Avatar } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { get_User_Calculated_activity, get_User_Calculated_stactics } from "../../store/Actions/DataActions";

function UserModalContain() {
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
    <div className="profile-modal">
      <div>
        <div className="profile-modal-upper">
          <div>
            <h1>User profile</h1>
          </div>
          <div className="user-contain-box">
            <div className="d-flex align-items-end mt-5">
              <Avatar src={user?.image} size={121} />
              <div className="ms-3 data-user">
                <p>User - {user?.userID}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-modal-lower">
          <div className="">
            <div className=" d-flex justify-content-around flex-column b-box-center">
              <div className="d-flex justify-content-around flex-column gap-3 w-100">
                <div className="d-flex gap-2 align-items-center mobile-card-heading">
                  <div>
                    <img
                      style={{ width: "26px" }}
                      src={require("../../Assets/Icon/statistics.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <p style={{ fontSize: "24px" }}>Statistics</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between mobile-modal-user">
                  <div className="user-statistics-card">
                    <div>
                      <h5>Total bet</h5>
                    </div>
                    <div className="d-flex gap-1 align-items-center">
                      <div>
                        <img
                          src={require("../../Assets/Icon/dollar-circle-line.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <p>{Total_staticsData.Total_bet_Amount}</p>
                      </div>
                    </div>
                  </div>
                  <div className="user-statistics-card">
                    <div>
                      <h5>Total bets</h5>
                    </div>
                    <div className="d-flex gap-1 align-items-center">
                      <div>
                        <img
                          src={require("../../Assets/Icon/dollar-circle-line.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <p>{Total_staticsData.Total_length_of_bets}</p>
                      </div>
                    </div>
                  </div>
                  <div className="user-statistics-card">
                    <div>
                      <h5>Earned from staking</h5>
                    </div>
                    <div className="d-flex gap-1 align-items-center">
                      <div>
                        <img
                          src={require("../../Assets/Icon/dollar-circle-line.png")}
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
                <div className="d-flex gap-2 align-items-center mobile-card-heading">
                  <div>
                    <img
                      style={{ width: "26px" }}
                      src={require("../../Assets/Icon/activity.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <p style={{ fontSize: "24px" }}>Activity</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between mobile-modal-user">
                  <div className="user-statistics-card">
                    <div>
                      <h5>Total tips</h5>
                    </div>
                    <div className="d-flex gap-1 align-items-center">
                      <div>
                        <img
                          src={require("../../Assets/Icon/dollar-circle-line.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <p>{Total_ActivityData.Total_Tips}</p>
                      </div>
                    </div>
                  </div>
                  <div className="user-statistics-card">
                    <div>
                      <h5>Total coindrops</h5>
                    </div>
                    <div className="d-flex gap-1 align-items-center">
                      <div>
                        <img
                          src={require("../../Assets/Icon/dollar-circle-line.png")}
                          alt=""
                        />
                      </div>
                      <div>
                        <p>{Total_ActivityData.Total_coinDrops}</p>
                      </div>
                    </div>
                  </div>
                  <div className="user-statistics-card">
                    <div>
                      <h5>Total rainfall</h5>
                    </div>
                    <div className="d-flex gap-1 align-items-center">
                      <div>
                        <img
                          src={require("../../Assets/Icon/dollar-circle-line.png")}
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
            <div className="d-flex justify-content-around flex-column b-box-center">
              <div className="w-100">
                <div className="user-game-card-heading gap-2">
                  <img
                    src={require("../../Assets/Icon/gaming remote.png")}
                    alt=""
                  />
                  <p>The most played games</p>
                </div>
                <div className="user-game-card">
                  <div className="">
                    <img
                      style={{ width: "120px" }}
                      src={require("../../Assets/Icon/Roulette (2) 1.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="w-100">
                <div className="user-game-card-heading gap-2">
                  <p>Bet</p>
                </div>
                <div className="">
                  <div className="d-flex gap-1 m-1">
                    <div>
                      <img
                        src={require("../../Assets/Icon/dollar-circle-line.png")}
                        alt=""
                      />
                    </div>
                    <div>
                      <p>0.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserModalContain;
