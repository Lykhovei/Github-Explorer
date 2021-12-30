import "./App.css";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchReposAction,
  fetchProfileAction,
} from "../src/reduxToolkit/slices/githubSlices";
import courses from "../src/assets/courses.jpg";
import SearchUsers from "./components/searchUsers";
import UserProfile from "./components/profile";
import UserRepos from "./components/repos";

function App() {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchUser, setSearchUser] = useState("");
  const theRepos = useSelector((state) => state?.repos);
  const { loading, reposList, profile, error, langlist } = theRepos;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReposAction(selectedUser));
    dispatch(fetchProfileAction(selectedUser));
  }, [selectedUser, dispatch]);

  function formatDate(dateStr) {
    const date = new Date(Date.parse(dateStr));
    const formattedDate = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;

    return formattedDate;
  }

  return (
    <div className="App">
      {selectedUser ? (
        ""
      ) : (
        <div>
          <img className="pic" src={courses} alt="" />
          <h1 className="header">GitHub user Finder</h1>
        </div>
      )}

      <div>
        <SearchUsers
          searchUser={searchUser}
          setSearchUser={setSearchUser}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
        {loading ? (
          <h1>Loading</h1>
        ) : error ? (
          <h1>Start searching the user</h1>
        ) : selectedUser ? (
          <div className="profile">
            <UserProfile
              profile={profile}
              open={open}
              setOpen={setOpen}
              formatDate={formatDate}
            />
            {open ? (
              <UserRepos reposList={reposList} formatDate={formatDate} />
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
