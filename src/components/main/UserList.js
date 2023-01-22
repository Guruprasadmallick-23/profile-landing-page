import React, { useEffect, useState } from "react";
import axios from "axios";
import { Avatar, Box } from "@mui/material";
import "../styles/userlist.css";
import TabPanels from "../accountDetail/TabPanel";

const UserList = () => {
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [component, setComponent] = useState("list");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://panorbit.in/api/users.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  }, []);

  const handleShowDtl = (id) => {
    const showItem = data.users.filter((item) => item.id === id);
    // console.log("ggg", showItem[0]);
    setDetail(showItem[0]);
    setComponent("detail");
  };

  console.log(data);
  if (!data) {
    return <p>Loading....</p>;
  }
  return (
    <>
      {component === "list" && (
        <Box className="cardParent">
          <div className="card" sx={{ borderRadius: "20px" }}>
            <h1>Select an Account</h1>
            <Box className="accountsMain">
              {data &&
                data?.users?.map((val, i) => (
                  <div
                    key={i}
                    onClick={() => handleShowDtl(val.id)}
                    className="accounts"
                  >
                    <Avatar src={val.profilepicture} />
                    <h3>{val.name}</h3>
                  </div>
                ))}
            </Box>
          </div>
        </Box>
      )}
      {component === "detail" && (
        <TabPanels
          data={detail}
          setComponent={setComponent}
          user={data}
          setDetail={setDetail}
        />
      )}
    </>
  );
};

export default UserList;
