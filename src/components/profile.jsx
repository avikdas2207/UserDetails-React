import React, { useState, useEffect } from "react";
import { Avatar, Divider, Modal, Menu, Button } from "@mui/material";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import UserDetails from "./userDetails";
import { useNavigate } from "react-router-dom";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "./component.css";
import { BubbleChartOutlined } from "@mui/icons-material";

const ProfilePage = () => {
  const [tab, settab] = useState(1);
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userList, setUserList] = useState([]);
  const [userData, setUserData] = useState(location?.state?.user);
  const [openChat, setOpenChat] = useState(false);

  const chatHandle = () => {
    if (openChat == true) {
      setOpenChat(false);
    } else {
      setOpenChat(true);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  console.log(location.state.user, "history");
  // let userData = location?.state?.user;

  const tabChange = (value) => {
    settab(value);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = () => {
    axios
      .get("https://panorbit.in/api/users.json")
      .then((res) => {
        console.log(res, "result");
        setUserList(res?.data?.users);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeUser = (user) => {
    setUserData(user);
    settab(1);
  };

  return (
    <div className="col-md-12 mt-4">
      <div className="col-md-12" style={{ display: "flex", height: "100vh" }}>
        <div className="col-md-3 d-flex justify-content-center">
          <div className="menu-item">
            <div
              className="tabs d-flex align-items-center"
              style={{ flexDirection: "column" }}
            >
              <div className="col-md-12 py-4 ps-4 d-flex">
                <div
                  className="col-md-10"
                  onClick={() => tabChange(1)}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    style={{
                      fontSize: "20px",
                      textAlign: "left",
                      color: "#A6A5E4",
                    }}
                    className=""
                  >
                    Profile
                  </div>
                  <Divider style={{ color: "#A6A5E4", height: "2px" }} />
                </div>
                {tab == 1 ? (
                  <div className="col-md-2 d-flex justify-content-end">
                    <div
                      style={{
                        background: "white",
                        borderRadius: "100px 0 0 100px",
                        width: "40px",
                      }}
                    >
                      <div style={{ color: "#BEC5D4" }}>
                        <ChevronRightIcon />
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-12 py-4 ps-4 d-flex">
                <div
                  className="col-md-10"
                  onClick={() => tabChange(2)}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    style={{
                      fontSize: "20px",
                      textAlign: "left",
                      color: "#A6A5E4",
                    }}
                    className=""
                  >
                    Posts
                  </div>
                  <Divider style={{ color: "#A6A5E4", height: "2px" }} />
                </div>
                {tab == 2 ? (
                  <div className="col-md-2 d-flex justify-content-end">
                    <div
                      style={{
                        background: "white",
                        borderRadius: "100px 0 0 100px",
                        width: "40px",
                      }}
                    >
                      <div style={{ color: "#BEC5D4" }}>
                        <ChevronRightIcon />
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="col-md-12 py-4 ps-4 d-flex">
                <div
                  className="col-md-10"
                  onClick={() => tabChange(3)}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    style={{
                      fontSize: "20px",
                      textAlign: "left",
                      color: "#A6A5E4",
                    }}
                    className=""
                  >
                    Gallery
                  </div>
                  <Divider style={{ color: "#A6A5E4", height: "2px" }} />
                </div>
                {tab == 3 ? (
                  <div className="col-md-2 d-flex justify-content-end">
                    <div
                      style={{
                        background: "white",
                        borderRadius: "100px 0 0 100px",
                        width: "40px",
                      }}
                    >
                      <div style={{ color: "#BEC5D4" }}>
                        <ChevronRightIcon />
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-12 py-4 ps-4 d-flex">
                <div
                  className="col-md-10"
                  onClick={() => tabChange(4)}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    style={{
                      fontSize: "20px",
                      textAlign: "left",
                      color: "#A6A5E4",
                    }}
                    className=""
                  >
                    ToDo
                  </div>
                </div>
                {tab == 4 ? (
                  <div className="col-md-2 d-flex justify-content-end">
                    <div
                      style={{
                        background: "white",
                        borderRadius: "100px 0 0 100px",
                        width: "40px",
                      }}
                    >
                      <div style={{ color: "#BEC5D4" }}>
                        <ChevronRightIcon />
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9 p-4">
          <div className="col-md-12 d-flex" style={{ cursor: "pointer" }}>
            <div
              className="col-md-6 d-flex align-align-items-center justify-content-lg-start"
              style={{ color: "#545454", fontSize: "23px", fontWeight: "500" }}
            >
              Profile
            </div>
            <div
              style={{ display: "flex", alignItems: "center" }}
              className="col-md-6 justify-content-end"
              onClick={handleClick}
              aria-describedby={id}
            >
              <Avatar src={userData?.profilepicture} />
              <p
                style={{
                  color: "#545454",
                  fontSize: "23px",
                  fontWeight: "400",
                  margin: "10px",
                }}
              >
                {userData?.name}
              </p>
            </div>
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <div className="p-4 boxShadow">
              <div className="d-flex justify-content-center">
                <Avatar
                  src={userData?.profilepicture}
                  alt={userData?.name}
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <div className="d-flex justify-content-center">
                <div style={{ fontSize: "25px", color: "#4A4A4A" }}>
                  {userData?.name}
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div style={{ fontSize: "20px", color: "#9A9A9A" }}>
                  {userData?.email}
                </div>
              </div>
              <Divider />
              <div style={{ height: "150px", overflowY: "scroll" }}>
                {console.log(userList, "list")}
                {userList?.map((user) => (
                  <>
                    {user?.id != userData?.id ? (
                      <>
                        <div
                          className="d-flex justify-content-center p-3"
                          onClick={() => changeUser(user)}
                          style={{ cursor: "pointer" }}
                        >
                          <Avatar
                            src={user?.profilepicture}
                            alt={user?.name}
                            style={{ width: "40px", height: "40px" }}
                            className="col-md-4"
                          />
                          <div
                            style={{ fontSize: "18px", color: "#9A9A9A" }}
                            className="col-md-8 d-flex align-items-center"
                          >
                            {user?.name}
                          </div>
                        </div>
                        <Divider />
                      </>
                    ) : (
                      ""
                    )}
                  </>
                ))}
              </div>
              <div className="d-flex justify-content-center p-3">
                <Button
                  variant="contained"
                  style={{ borderRadius: "50px", background: "#D55151" }}
                  onClick={() => navigate("/")}
                >
                  Sign Out
                </Button>
              </div>
            </div>
          </Menu>

          <Divider />

          {tab == 1 ? (
            <UserDetails userData={userData} />
          ) : (
            <div>
              <div
                style={{
                  fontSize: "100px",
                  fontWeight: "bolder",
                  marginTop: "25vh",
                  color: "#EEEEEE",
                }}
              >
                Coming Soon
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="col-md-12 d-flex justify-content-end ">
        <div
          className="col-md-2"
          style={{ position: "fixed", bottom: "0", right: "45px" }}
        >
          <div>
            <div
              className="w-100 px-4 py-2 d-flex justify-content-between"
              onClick={chatHandle}
              style={{
                background: "#2C65C8",
                color: "white",
                fontSize: "25px",
                borderRadius: "10px 10px 0 0",
              }}
            >
              <div className="d-flex col-md-4">
                <div className="d-flex align-items-center">
                  <ChatBubbleOutlineIcon />
                </div>
                <div className="ms-2 fw-light">Chats</div>
              </div>
              <div className="col-md-4 justify-content-end d-flex align-items-center ">
                {!openChat ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </div>
            </div>
            {openChat ? (
              <div
                style={{
                  height: "350px",
                  background: "white",
                  borderLeft: "1px groove #507ECE",
                  borderRight: "1px groove #507ECE",
                  overflowY: "scroll",
                }}
              >
                {userList?.map((user) => (
                  <div className="d-flex justify-content-center py-2">
                    <div className="col-md-2">
                      <Avatar src={user?.profilepicture} />{" "}
                    </div>
                    <div
                      className="col-md-6 d-flex align-items-center ms-2"
                      style={{ textAlign: "left" }}
                    >
                      {user?.name}
                    </div>
                    <div className="col-md-2 d-flex align-items-center justify-content-center">
                      <div className="greendot">●</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
