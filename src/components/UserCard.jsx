import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import search from "../assets/search.png";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

const UserCard = ({
  handleOpen,
  open,
  name,
  userName,
  repos,
  avatar,
  error,
}) => {
  return (
    <div style={{ flexWrap: "wrap", marginBottom: "50px" }}>
      <Stack direction="row" spacing={3} justifyContent="center">
        {error ? (
          <Item style={{ boxShadow: "none" }}>
            <h1>{error}</h1>
            <h2>...lets try again</h2>
            <img src={search} width={400} height={300} />
          </Item>
        ) : (
          <Item>
            <img src={avatar} width={500} height={400} />
            <h2>{name}</h2>
            <h2>{userName}</h2>
            <h3>{repos} repositories </h3>
            <Button variant="outlined" onClick={handleOpen}>
              {open ? (
                <span>Hide all repositories</span>
              ) : (
                <span>View all repositories</span>
              )}
            </Button>
          </Item>
        )}
      </Stack>
    </div>
  );
};

export default UserCard;
