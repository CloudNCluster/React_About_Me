import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import './index.scss'

const Venu = () => {
  const [data, setData] = useState("no data");
  const [showData, setShowData] = useState(false);

  const handleClick = () => {
    setShowData(!showData);
  };


  const getAllData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="App">
      <h1>This function is For Venu</h1>
      <h2>Full Stack Development</h2>
      <h4 className="important-text">Its a SASS mixin</h4>

      <a href="/">Go to home page</a>
      <Button
      variant="contained"
      color="primary"
      size="medium"
      onClick={handleClick}>Users</Button>

      {showData ? (
        data ? (
          data.map((data) => (
            <div className="App" key={data.id}>
              <h3>{data.username}</h3>
            </div>
          ))
        ) : (
          <h3>No data yet</h3>
        )
      ) : null}

    </div>
  );
};

export default Venu;
