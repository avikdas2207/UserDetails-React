import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import BGLanding from "../assets/pexels-francesco-ungaro-281260.jpg";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import "./component.css";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = () => {
    axios
      .get("https://panorbit.in/api/users.json")
      .then((res) => {
        setUserList(res?.data?.users);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const openProfile = (user) => {
    navigate("/profile", { state: { user } });
  };

  return (
    <div className="mainContainer">
      <div style={{ position: "relative" }}>
        <img
          src={BGLanding}
          alt="Background Image"
          style={{ height: "99vh", width: "100%" }}
        />
      </div>
      <div className="card-area">
        <Card style={{ borderRadius: "25px" }}>
          <div className="head-area">
            <p style={{ color: "#545454", fontWeight: "500" }}>
              Select an Account
            </p>
          </div>
          <div className="body-area">
            {userList?.length > 0 &&
              userList?.map((user, index) => (
                <>
                  <div
                    style={{
                      display: "flex",
                      padding: "15px 7px",
                      cursor: "pointer",
                    }}
                    onClick={() => openProfile(user)}
                  >
                    <Avatar src={user?.profilepicture} alt={user?.name} />
                    <p
                      style={{
                        fontSize: "23px",
                        margin: "10px 15px",
                        color: "#4A4A4A",
                      }}
                    >
                      {user?.name}
                    </p>
                  </div>
                  <Divider style={{ width: "70%" }} />
                </>
              ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
export default LandingPage;
