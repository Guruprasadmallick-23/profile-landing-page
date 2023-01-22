import { Avatar, Button, Menu } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
const ITEM_HEIGHT = 68;

const Navbar = ({
  setComponent,
  setDetail,
  setDetails,
  users,
  details,
  data,
  name,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleShowDtl = (id) => {
    setDetail({});
    const showItem = users.users.filter((item) => item.id === id);
    console.log("ggg", showItem[0]);
    setDetails(showItem[0]);
  };
  const signOut = () => {
    setDetails({});
    setComponent("list");
  };

  return (
    <Box className="nav-bar">
      <h2>{name}</h2>
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
    </Box>
  );
};

export default Navbar;
