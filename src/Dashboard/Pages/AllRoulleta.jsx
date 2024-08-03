import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Get_All_Rouletta_Game_Data } from "../../store/Actions/GameActions";
const AllRoulleta = () => {
  const AllRouletta_Game_Data = useSelector(
    (state) => state.game.AllRouletta_Game_Data
  );

  console.log(AllRouletta_Game_Data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Get_All_Rouletta_Game_Data());
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
              <th>bet_Price</th>
              <th>Multiplier_Number</th>
              <th>Betted_Amount</th>
              <th>Total_Amount_Bets</th>
              <th>Total_Amount_Userhave</th>
              <th>Winning_amount</th>
              <th>Lossing_Amount</th>
              <th>No.of Total bets</th>
              <th>No.of winingBets</th>
              <th>winningBet Number</th>
              <th>Status</th>
              <th>createdAt</th>
              {/* <th>No.of Total bets</th> */}
            </tr>
          </thead>
          <tbody>
            {AllRouletta_Game_Data?.length > 0 ? (
              AllRouletta_Game_Data.map((AllRoulettaData, index) => (
                <tr
                  style={{
                    boxShadow:
                      "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
                  }}
                  key={AllRoulettaData?._id}
                >
                  <td className="td">{index + 1}</td>
                  <td className="td">{AllRoulettaData?.userID?.Email}</td>
                  <td className="td">{AllRoulettaData?.bet_Price}</td>
                  <td className="td">{AllRoulettaData?.Multiplier_Number}</td>
                  <td className="td">{AllRoulettaData?.Betted_Amount}</td>
                  <td className="td">{AllRoulettaData?.Total_Amount_Bets}</td>
                  <td className="td">
                    {AllRoulettaData?.Total_Amount_Userhave}
                  </td>
                  <td className="td">{AllRoulettaData?.Winning_amount}</td>
                  <td className="td">{AllRoulettaData?.Lossing_Amount}</td>
                  <td className="td">
                    {Object.keys(AllRoulettaData?.bets || {}).length}
                  </td>
                  <td className="td">
                    {Object.keys(AllRoulettaData?.winingBets || {}).length}
                  </td>
                  <td className="td">{AllRoulettaData?.winningBet}</td>
                  <td className="td">{AllRoulettaData?.Status}</td>
                  <td className="td">{AllRoulettaData?.createdAt}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No User have played the Roulleta Yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRoulleta;
