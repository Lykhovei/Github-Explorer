import "./App.css";
import Search from "./components/search";
import UserCard from "./components/UserCard";
import Repos from "../src/components/repos";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchReposAction,
  fetchUserAction,
} from "../src/reduxToolkit/slices/githubSlices";

function App() {
  //dispatch
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchReposAction("Litava"));
  // }, [dispatch]);

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/example")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({ name, login, public_repos, avatar_url }) => {
    setName(name);
    setUserName(login);
    setRepos(public_repos);
    setAvatar(avatar_url);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <ScreenSearchDesktopIcon style={{ marginRight: "15px" }} />
            <Typography variant="h6" color="inherit" component="div">
              Github users search
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="App">
        <Search setData={setData} setError={setError} />
        <UserCard
          handleOpen={() => setOpen(!open)}
          open={open}
          name={name}
          userName={userName}
          repos={repos}
          avatar={avatar}
          error={error}
        />
      </div>
      <div style={{ padding: "30px" }}>
        <Repos />
      </div>
    </>
  );
}

export default App;
