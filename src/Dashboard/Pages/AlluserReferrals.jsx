
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { All_User_Referrals } from '../../store/Actions/AdminActions';

function AlluserReferrals() {


  const dispatch = useDispatch();
  const AllUsers_Referrals = useSelector(
    (state) => state.admin.AllUsers_Referrals
  );
  console.log(AllUsers_Referrals);

  useEffect(() => {
    dispatch(All_User_Referrals());
  }, []);

  return (
    <>
      {AllUsers_Referrals?.length > 0 ? (
        <div style={{ marginTop: '20px' }} className='employee-table table-container'>
          <table className="gfg table-responsive">
            <thead className="table-transparent">
              <tr>
                <th className="th">Sr. No.</th>
                <th className="th">From User</th>
                <th className="th">To User</th>
                <th className="th">createdAt</th>
                <th className="th">isSuccessFull</th>
              </tr>
            </thead>
            <tbody>
              {AllUsers_Referrals?.map((myReferrals, index) => (
                <tr
                  style={{
                    boxShadow:
                      "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
                  }}
                  key={myReferrals?._id}
                >
                  <td className="td">{index + 1}</td>
                  <td className="td">{myReferrals?.user?.Email}</td>
                  <td className="td">{myReferrals?.Touser?.Email}</td>
                  <td className="td">{myReferrals?.createdAt}</td>
                  <td className="td">
                    {myReferrals?.isSuccessFull ? "true" : "false"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <div style={{ marginTop: '20px', padding: '20px', fontSize: '20px' }} className='employee-table table-container' >
            Currently there is no Referrals by this user
          </div>
        </>
      )}
    </>
  );
}

export default AlluserReferrals
