import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "../styles/accountdtl.css";
import Profile from "./Profile";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Posts from "./Posts";
import Gallery from "./Gallery";
import Todo from "./Todo";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const TabPanels = ({ data, setComponent, user, setDetail }) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box className="TabParentBox">
        <Box className="verticalTabs">
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Event Content tabs"
            sx={{
              ".MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            <Tab
              sx={{
                display: "flex",
                alignItems: "flex-start",
                color: "white",
                width: "100%",
              }}
              // label="Profile"
              label={
                <Box className="labelMain">
                  <p>Profile</p>
                  {value === 0 && (
                    <div className="label-icon">
                      <ChevronRightIcon sx={{ color: "black" }} />
                    </div>
                  )}
                </Box>
              }
              {...a11yProps(0)}
            />

            <Tab
              sx={{ display: "flex", alignItems: "flex-start" }}
              // label="Posts"
              label={
                <Box className="labelMain">
                  <p>Posts</p>
                  {value === 1 && (
                    <div className="label-icon">
                      <ChevronRightIcon sx={{ color: "black" }} />
                    </div>
                  )}
                </Box>
              }
              {...a11yProps(1)}
            />

            <Tab
              sx={{ display: "flex", alignItems: "flex-start" }}
              // label="Gallery"
              label={
                <Box className="labelMain">
                  <p>Gallery</p>
                  {value === 2 && (
                    <div className="label-icon">
                      <ChevronRightIcon sx={{ color: "black" }} />
                    </div>
                  )}
                </Box>
              }
              {...a11yProps(2)}
            />
            <Tab
              sx={{ display: "flex", alignItems: "flex-start" }}
              label={
                <Box className="labelMain">
                  <p>Todo</p>
                  {value === 3 && (
                    <div className="label-icon">
                      <ChevronRightIcon sx={{ color: "black" }} />
                    </div>
                  )}
                </Box>
              }
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <Box className="horizontalTabPanel">
          <TabPanel style={{ width: "100%" }} value={value} index={0}>
            <Profile
              data={data}
              setComponent={setComponent}
              users={user}
              setDetail={setDetail}
            />
          </TabPanel>
          <TabPanel style={{ width: "100%" }} value={value} index={1}>
            <Posts
              data={data}
              setComponent={setComponent}
              users={user}
              setDetail={setDetail}
            />
          </TabPanel>
          <TabPanel style={{ width: "100%" }} value={value} index={2}>
            <Gallery
              data={data}
              setComponent={setComponent}
              users={user}
              setDetail={setDetail}
            />
          </TabPanel>
          <TabPanel style={{ width: "100%" }} value={value} index={3}>
            <Todo
              data={data}
              setComponent={setComponent}
              users={user}
              setDetail={setDetail}
            />
          </TabPanel>
        </Box>
      </Box>
    </>
  );
};

export default TabPanels;
