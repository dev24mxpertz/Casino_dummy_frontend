import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { All_Users_list } from "../../store/Actions/AdminActions";
import { useNavigate } from "react-router-dom";

const AllUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const AllUsers_list = useSelector((state) => state.admin.All_users_list);
  console.log(AllUsers_list);

  useEffect(() => {
    dispatch(All_Users_list());
  }, [dispatch]);

  const HandleUserDetails = (user_id) => {
    console.log(user_id);
    navigate(`/dashboard/AllUser/userDetails/${user_id}`)
  };

  return (
    <div className='Casinosection2'>
      <div style={{ marginTop: '20px' }} className='employee-table table-container'>
        <table className="gfg table-responsive">
          <thead className="table-transparent">
            <tr>
              <th>Sr. No.</th>
              <th>userID</th>
              <th>Email</th>
              <th>UserType</th>
              <th>ageConfirmation</th>
              <th>selectedCountry</th>
              <th>isVerfiedEmail</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {AllUsers_list?.length > 0 ? (
              AllUsers_list.map((user, index) => (
                <tr
                  style={{
                    boxShadow:
                      "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
                  }}
                  key={user?._id}
                >
                  <td className="td">{index + 1}</td>
                  <td className="td">{user?.userID}</td>
                  <td className="td">{user?.Email}</td>
                  <td className="td">{user?.UserType}</td>
                  <td className="td">
                    {user?.ageConfirmation ? "true" : "false"}
                  </td>
                  <td className="td">{user?.selectedCountry}</td>
                  <td className="td">
                    {user?.isVerfiedEmail ? "true" : "false"}
                  </td>
                  <td className="td">
                    <button
                      className="btn btn-outline-success"
                      onClick={() => HandleUserDetails(user?._id)}
                    >
                      Check Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No User is registered right now</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
