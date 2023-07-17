import React from "react";
import GoogleMapReact from "google-map-react";
import { Avatar, Divider } from "@mui/material";

const UserDetails = ({ userData }) => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <>
      <div style={{ display: "flex", marginTop: "3%" }} className="col-md-12">
        <div className="col-md-6">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              src={userData?.profilepicture}
              alt={userData?.name}
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p
              style={{ fontSize: "25px", color: "#545454", fontWeight: "600" }}
            >
              {userData?.name}
            </p>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
            className="col-md-12"
          >
            <div
              style={{ color: "#9A9A9A", fontSize: "25px", textAlign: "right" }}
              className="col-md-6"
            >
              Username :&nbsp;{" "}
            </div>
            <div
              style={{
                fontSize: "25px",
                color: "#545454",
                fontWeight: "600",
                textAlign: "left",
              }}
              className="col-md-6"
            >
              {" "}
              {userData?.name}
            </div>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
            className="col-md-12"
          >
            <div
              style={{ color: "#9A9A9A", fontSize: "25px", textAlign: "right" }}
              className="col-md-6"
            >
              e-mail :&nbsp;{" "}
            </div>
            <div
              style={{
                fontSize: "25px",
                color: "#545454",
                fontWeight: "600",
                textAlign: "left",
              }}
              className="col-md-6"
            >
              {" "}
              {userData?.email}
            </div>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
            className="col-md-12"
          >
            <div
              style={{ color: "#9A9A9A", fontSize: "25px", textAlign: "right" }}
              className="col-md-6"
            >
              Phone :&nbsp;{" "}
            </div>
            <div
              style={{
                fontSize: "25px",
                color: "#545454",
                fontWeight: "600",
                textAlign: "left",
              }}
              className="col-md-6"
            >
              {" "}
              {userData?.phone}
            </div>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
            className="col-md-12"
          >
            <div
              style={{ color: "#9A9A9A", fontSize: "25px", textAlign: "right" }}
              className="col-md-6"
            >
              Website :&nbsp;{" "}
            </div>
            <div
              style={{
                fontSize: "25px",
                color: "#545454",
                fontWeight: "600",
                textAlign: "left",
              }}
              className="col-md-6"
            >
              {" "}
              {userData?.website}
            </div>
          </div>
          <div
            style={{ borderBottom: "2px solid #CECECE", margin: "20px 15%" }}
          ></div>
          <div className="col-md-12">
            <div
              style={{ color: "#9A9A9A", fontSize: "25px" }}
              className="col-md-12"
            >
              Company
            </div>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
            className="col-md-12"
          >
            <div
              style={{ color: "#9A9A9A", fontSize: "25px", textAlign: "right" }}
              className="col-md-6"
            >
              Name :&nbsp;{" "}
            </div>
            <div
              style={{
                fontSize: "25px",
                color: "#545454",
                fontWeight: "600",
                textAlign: "left",
              }}
              className="col-md-6"
            >
              {" "}
              {userData?.email}
            </div>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
            className="col-md-12"
          >
            <div
              style={{ color: "#9A9A9A", fontSize: "25px", textAlign: "right" }}
              className="col-md-6"
            >
              catchphrase :&nbsp;{" "}
            </div>
            <div
              style={{
                fontSize: "25px",
                color: "#545454",
                fontWeight: "600",
                textAlign: "left",
              }}
              className="col-md-6"
            >
              {" "}
              {userData?.phone}
            </div>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
            className="col-md-12"
          >
            <div
              style={{ color: "#9A9A9A", fontSize: "25px", textAlign: "right" }}
              className="col-md-6"
            >
              bs :&nbsp;{" "}
            </div>
            <div
              style={{
                fontSize: "25px",
                color: "#545454",
                fontWeight: "600",
                textAlign: "left",
              }}
              className="col-md-6"
            >
              {" "}
              {userData?.website}
            </div>
          </div>
        </div>
        <div
          className="border"
          style={{ borderLeft: "1px solid #CECECE" }}
        ></div>
        <div className="col-md-6">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
            }}
            className="col-md-12"
          >
            <div
              style={{ color: "#9A9A9A", fontSize: "25px", textAlign: "right" }}
              className="col-md-3"
            >
              Address :&nbsp;{" "}
            </div>
            {/* <div style={{ fontSize: '25px', color: '#545454', fontWeight: '600', textAlign: 'left' }} className="col-md-6"> {userData?.name}</div> */}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
            }}
            className="col-md-12"
          >
            <div
              style={{ color: "#9A9A9A", fontSize: "25px", textAlign: "right" }}
              className="col-md-3"
            >
              Street :&nbsp;{" "}
            </div>
            <div
              style={{
                fontSize: "25px",
                color: "#545454",
                fontWeight: "600",
                textAlign: "left",
              }}
              className="col-md-6"
            >
              {" "}
              {userData?.address?.street}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
            }}
            className="col-md-12"
          >
            <div
              style={{ color: "#9A9A9A", fontSize: "25px", textAlign: "right" }}
              className="col-md-3"
            >
              Suite :&nbsp;{" "}
            </div>
            <div
              style={{
                fontSize: "25px",
                color: "#545454",
                fontWeight: "600",
                textAlign: "left",
              }}
              className="col-md-6"
            >
              {" "}
              {userData?.address?.suite}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
            }}
            className="col-md-12"
          >
            <div
              style={{ color: "#9A9A9A", fontSize: "25px", textAlign: "right" }}
              className="col-md-3"
            >
              City :&nbsp;{" "}
            </div>
            <div
              style={{
                fontSize: "25px",
                color: "#545454",
                fontWeight: "600",
                textAlign: "left",
              }}
              className="col-md-6"
            >
              {" "}
              {userData?.address?.city}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
            }}
            className="col-md-12"
          >
            <div
              style={{ color: "#9A9A9A", fontSize: "25px", textAlign: "right" }}
              className="col-md-3"
            >
              Zipcode :&nbsp;{" "}
            </div>
            <div
              style={{
                fontSize: "25px",
                color: "#545454",
                fontWeight: "600",
                textAlign: "left",
              }}
              className="col-md-6"
            >
              {" "}
              {userData?.address?.zipcode}
            </div>
          </div>
          <div
            style={{ height: "50vh", borderRadius: "30px" }}
            className="col-md-12 p-4"
          >
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={userData?.address?.geo?.lat}
                lng={userData?.address?.geo?.lng}
              />
            </GoogleMapReact>
          </div>
          <div className="col-md-12">
            <div className="d-flex justify-content-end px-4">
              <div
                style={{
                  color: "#9A9A9A",
                  fontSize: "15px",
                  textAlign: "right",
                }}
              >
                Lat:
              </div>
              <div
                style={{
                  color: "#545454",
                  fontSize: "15px",
                  textAlign: "right",
                  fontWeight: "600",
                }}
              >
                {userData?.address?.geo?.lat}
              </div>
              <div
                style={{
                  color: "#9A9A9A",
                  fontSize: "15px",
                  textAlign: "right",
                  marginLeft: "15px",
                }}
              >
                Long:
              </div>
              <div
                style={{
                  color: "#545454",
                  fontSize: "15px",
                  textAlign: "right",
                  fontWeight: "600",
                }}
              >
                {userData?.address?.geo?.lng}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserDetails;
