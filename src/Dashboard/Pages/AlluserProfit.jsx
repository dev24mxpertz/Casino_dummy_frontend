
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { All_User_Profit } from '../../store/Actions/AdminActions';

function EmployeePage() {

  const dispatch = useDispatch();
  const AllUsers_Profit = useSelector((state) => state.admin.AllUsers_Profit);
  console.log(AllUsers_Profit);

  useEffect(() => {
    dispatch(All_User_Profit());
  }, []);

  return (
    <>
      {AllUsers_Profit?.length > 0 ? (
        <div style={{ marginTop: '20px' }} className='employee-table table-container'>
          <table className="gfg table-responsive">
            <thead className="table-transparent">
              <tr>
                <th className="th">Sr. No.</th>
                <th className="th">Profit_Price</th>
                <th className="th">isClaimed</th>
                <th className="th">createdAt</th>
              </tr>
            </thead>
            <tbody>
              {AllUsers_Profit?.map((myProfits, index) => (
                <tr
                  style={{
                    boxShadow:
                      "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
                  }}
                  key={myProfits?._id}
                >
                  <td className="td">{index + 1}</td>
                  <td className="td">{myProfits?.Profit_Price}</td>
                  <td className="td">{myProfits?.createdAt}</td>
                  <td className="td">
                    {myProfits?.isClaimed ? "true" : "false"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <div style={{ marginTop: '20px', padding: '20px', fontSize: '20px' }} className='employee-table table-container' >
            Currently there is no Balance by this user
          </div>
        </>
      )}
    </>
  );


}

export default EmployeePage


