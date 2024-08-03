import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { All_User_Total_Payouts } from '../../store/Actions/AdminActions';

function TotalPayouts() {
  // AllUsers_Total_Payouts

    const dispatch = useDispatch();
    const AllUsers_Total_Payouts = useSelector(
      (state) => state.admin.AllUsers_Total_Payouts
    );
    console.log(AllUsers_Total_Payouts);

    useEffect(() => {
      dispatch(All_User_Total_Payouts());
    }, []);

    
  return (
    <>
      {AllUsers_Total_Payouts?.length > 0 ? (
        <div
          style={{ marginTop: "20px" }}
          className="employee-table table-container"
        >
          <table className="gfg table-responsive">
            <thead className="table-transparent">
              <tr>
                <th className="th">Sr. No.</th>
                <th className="th">Staked_Tokens</th>
                <th className="th">Payout_Distributed_In</th>
                <th className="th">PayoutDate</th>
              </tr>
            </thead>
            <tbody>
              {AllUsers_Total_Payouts?.map((myTotalPayouts, index) => (
                <tr
                  style={{
                    boxShadow:
                      "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
                  }}
                  key={myTotalPayouts?._id}
                >
                  <td className="td">{index + 1}</td>
                  <td className="td">{myTotalPayouts?.Staked_Tokens}</td>
                  <td className="td">
                    {myTotalPayouts?.Payout_Distributed_In}
                  </td>
                  <td className="td">{myTotalPayouts?.PayoutDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <div
            style={{ marginTop: "20px", padding: "20px", fontSize: "20px" }}
            className="employee-table table-container"
          >
            Currently there is no activity by this user
          </div>
        </>
      )}
    </>
  );


}

export default TotalPayouts
