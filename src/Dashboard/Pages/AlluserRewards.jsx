

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { All_User_Rewards } from '../../store/Actions/AdminActions';

function CompanyProfile() {
  // All_User_Rewards

  const dispatch = useDispatch();
  const AllUsers_Rewards = useSelector((state) => state.admin.AllUsers_Rewards);
  console.log(AllUsers_Rewards);

  useEffect(() => {
    dispatch(All_User_Rewards());
  }, []);

  return (
    <>
      {AllUsers_Rewards?.length > 0 ? (
        <div style={{ marginTop: '20px' }} className='employee-table table-container'>
          <table className="gfg table-responsive">
            <thead className="table-transparent">
              <tr>
                <th className="th">Sr. No.</th>
                <th className="th">User</th>
                <th className="th">Reward_Price</th>
                <th className="th">createdAt</th>
                <th className="th">isClaimed</th>
              </tr>
            </thead>
            <tbody>
              {AllUsers_Rewards?.map((myRewards, index) => (
                <tr
                  style={{
                    boxShadow:
                      "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
                  }}
                  key={myRewards?._id}
                >
                  <td className="td">{index + 1}</td>
                  <td className="td">{myRewards?.user?.Email}</td>
                  <td className="td">{myRewards?.Reward_Price}</td>
                  <td className="td">{myRewards?.createdAt}</td>
                  <td className="td">
                    {myRewards?.isClaimed ? "true" : "false"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <div style={{ marginTop: '20px', padding: '20px', fontSize: '20px' }} className='employee-table table-container' >
            Currently there is no Rewards by this user
          </div>
        </>
      )}
    </>
  );
}

export default CompanyProfile
