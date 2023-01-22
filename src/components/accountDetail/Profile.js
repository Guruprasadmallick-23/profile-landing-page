import { Avatar } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "../styles/accountdtl.css";
import map from "../assets/kolkata-map.jpg";
import Navbar from "./Navbar";

const Profile = ({ data, setComponent, users, setDetail }) => {
  const [details, setDetails] = useState({});

  return (
    <>
      {/* <Box className="nav-bar">
        <h2>Profile</h2>
        <div className="acc-logo-name" onClick={handleClick}>
          <Avatar src={details?.profilepicture || data?.profilepicture} />{" "}
          <h3>{details?.name || data?.name}</h3>
        </div>
        <Menu
          // id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "30ch",
              padding: "0 3rem",
              borderRadius: "20px",
              // marginRight: "2rem",
              ".&:-webkit-scrollbar": {
                display: "none",
              },
            },
          }}
          className="basic-menu"
          sx={{ minHeight: "25rem" }}
        >
          <Box className="menu-item">
            <div className="menuItem-acc">
              <Avatar
                src={details?.profilepicture || data?.profilepicture}
                sx={{ width: 80, height: 80 }}
              />
              <h3>{details?.name || data?.name}</h3>
            </div>
            <div
            // style={{ height: "10rem", overflow: "scroll" }}
            >
              {users &&
                users?.users?.map((val, i) => (
                  <div
                    key={i}
                    onClick={() => handleShowDtl(val.id)}
                    className="menu-accounts"
                    style={{ margin: "0.4rem" }}
                  >
                    <Avatar
                      src={val.profilepicture}
                      sx={{ width: 30, height: 30 }}
                    />
                    <h3 style={{ fontSize: "12px" }}>{val.name}</h3>
                  </div>
                ))}
            </div>
            <div className="signout-btn">
              <Button variant="contained" onClick={signOut}>
                Sign out
              </Button>
            </div>
          </Box>
        </Menu>
      </Box> */}
      <Navbar
        setComponent={setComponent}
        setDetail={setDetail}
        setDetails={setDetails}
        users={users}
        details={details}
        data={data}
        name="Profile"
      />
      <Box className="profile-parent">
        <Box className="profile-left">
          <div className="avatar">
            <Avatar
              src={details?.profilepicture || data?.profilepicture}
              sx={{ width: 200, height: 200 }}
            />
          </div>
          <h2>{details?.name || data.name}</h2>
          <div>
            <p>Username :</p> <h6>{details?.username || data?.username}</h6>
          </div>
          <div>
            <p>e-mail :</p>{" "}
            <h6>
              {details?.email?.toLowerCase() || data?.email?.toLowerCase()}
            </h6>
          </div>
          <div>
            <p>Phone :</p> <h6>{details?.phone || data?.phone}</h6>
          </div>
          <div>
            <p>Website :</p> <h6>{details?.website || data?.website}</h6>
          </div>
          <h3>Company</h3>
          <div>
            <p>Name :</p>{" "}
            <h6>{details?.company?.name || data?.company?.name}</h6>
          </div>
          <div>
            <p>catchPhrase :</p>{" "}
            <h6>
              {details?.company?.catchPhrase || data?.company?.catchPhrase}
            </h6>
          </div>
          <div>
            <p>bs :</p> <h6>{details?.company?.bs || data?.company?.bs}</h6>
          </div>
        </Box>
        <Box className="profile-right">
          <h3>Address :</h3>
          <div>
            <p>Street :</p>{" "}
            <h6>{details?.address?.street || data?.address?.street}</h6>
          </div>
          <div>
            <p>Suite :</p>{" "}
            <h6>{details?.address?.suite || data?.address?.suite}</h6>
          </div>
          <div>
            <p>City :</p>{" "}
            <h6>{details?.address?.city || data?.address?.city}</h6>
          </div>
          <div>
            <p>Zipcode :</p>{" "}
            <h6>{details?.address?.zipcode || data?.address?.zipcode}</h6>
          </div>
          <img src={map} alt="map" className="map" />
        </Box>
      </Box>
    </>
  );
};

export default Profile;
