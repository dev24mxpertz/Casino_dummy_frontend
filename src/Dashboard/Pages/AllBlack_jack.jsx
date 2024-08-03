import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Get_BlackJack_Data } from "../../store/Actions/GameActions";

const AllBlack_jack = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const All_BlackJack_Data = useSelector(
    (state) => state.game.All_BlackJack_Data
  );
  console.log(All_BlackJack_Data, "-------------All_BlackJack_Data");

  useEffect(() => {
    dispatch(Get_BlackJack_Data());
  }, [dispatch]);



  return (
    <div className="Casinosection2">
      <div
        style={{ marginTop: "20px" }}
        className="employee-table table-container"
      >
        <table className="gfg table-responsive">
          <thead className="table-transparent">
            <tr>
              <th>Sr. No.</th>
              <th>user Email</th>
              <th>Status</th>
              <th>betAmount</th>
              <th>dealerSum</th>
              <th>yourSum</th>
              <th>loss_Amount</th>
              <th>wining_Amount</th>
              <th>walletAmount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {All_BlackJack_Data?.length > 0 ? (
              All_BlackJack_Data.map((AllBlackJackData, index) => (
                <tr
                  style={{
                    boxShadow:
                      "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
                  }}
                  key={AllBlackJackData?._id}
                >
                  <td className="td">{index + 1}</td>
                  <td className="td">{AllBlackJackData?.userID?.Email}</td>
                  <td className="td">{AllBlackJackData?.Status}</td>
                  <td className="td">{AllBlackJackData?.betAmount}</td>
                  <td className="td">{AllBlackJackData?.dealerSum}</td>
                  <td className="td">{AllBlackJackData?.yourSum}</td>
                  <td className="td">{AllBlackJackData?.loss_Amount}</td>
                  <td className="td">{AllBlackJackData?.wining_Amount}</td>
                  <td className="td">{AllBlackJackData?.walletAmount}</td>
                  {/* //createdAt */}
                  {/* <td className="td">{AllBlackJackData?.createdAt}</td> */}
                  <td className="td">{AllBlackJackData?.createdAt}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No User have played the BlackJack Yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBlack_jack;
