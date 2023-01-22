import { Box } from "@mui/material";
import React, { useState } from "react";
import Navbar from "./Navbar";
import "../styles/accountdtl.css";

const Posts = ({ data, setComponent, users, setDetail }) => {
  const [details, setDetails] = useState({});
  return (
    <>
      <Navbar
        setComponent={setComponent}
        setDetail={setDetail}
        setDetails={setDetails}
        users={users}
        details={details}
        data={data}
        name="Posts"
      />
      <Box className="comming-soon">
        <h1>Coming Soon</h1>
      </Box>
    </>
  );
};

export default Posts;
