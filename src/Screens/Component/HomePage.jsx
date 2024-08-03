import React, { useEffect } from 'react'
import Homeheader from '../Pages/Home-header'
import '../../Styles/Homepage.css'
import HomeSection2 from '../Pages/Home-Section-2'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function HomePage() {

      const navigate = useNavigate();
      const isAuthenticated = useSelector(
        (state) => state.auth.isAuthenticated
      );
      // console.log(isAuthenticated);
      const userType = useSelector((state) => state.auth.UserType);
      console.log(userType);

      useEffect(() => {
        if (isAuthenticated > 0) {
          switch (userType) {
            case "User":
              navigate("/casino");
              break;
            case "admin":
              navigate("/dashboard");
              break;
            default:
              navigate("/");
          }
        } else {
          navigate("/");
        }
      }, [isAuthenticated, userType, navigate]);

    return (
        <>
            <Homeheader />
            <HomeSection2 />
        </>
    )
}

export default HomePage
