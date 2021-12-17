import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Search = ({ setData, setError }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${searchInput}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
        } else {
          setData(data);
          setError(null);
        }
      });
  };

  return (
    <div style={{ flexWrap: "wrap" }}>
      <h1 style={{ color: "white" }}>Search for users</h1>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "500px" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Github user"
          variant="outlined"
          onChange={handleSearch}
        />
      </Box>
    </div>
  );
};

export default Search;
