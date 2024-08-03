import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { All_User_Activity } from "../../store/Actions/AdminActions";

function Setting() {
  const dispatch = useDispatch();
  const AllUsers_Activity = useSelector(
    (state) => state.admin.AllUsers_Activity
  );
  console.log(AllUsers_Activity);

  useEffect(() => {
    dispatch(All_User_Activity());
  }, []);

  return (
    <>
      {AllUsers_Activity?.length > 0 ? (
        <div style={{ marginTop: '20px' }} className='employee-table table-container'>
          <table className="gfg table-responsive">
            <thead className="table-transparent">
              <tr>
                <th className="th">Sr. No.</th>
                <th className="th">User</th>
                <th className="th">Tips</th>
                <th className="th">coinDrops</th>
                <th className="th">Rainfall</th>
              </tr>
            </thead>
            <tbody>
              {AllUsers_Activity?.map((activity, index) => (
                <tr
                  style={{
                    boxShadow:
                      "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
                  }}
                  key={activity?._id}
                >
                  <td className="td">{index + 1}</td>
                  <td className="td">{activity?.user?.Email}</td>
                  <td className="td">{activity?.Tips}</td>
                  <td className="td">{activity?.coinDrops}</td>
                  <td className="td">{activity?.Rainfall}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <div style={{ marginTop: '20px', padding: '20px', fontSize: '20px' }} className='employee-table table-container' >
            Currently there is no activity by this user
          </div>
        </>
      )}
    </>
  );
}

export default Setting;

