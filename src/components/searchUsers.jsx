import React, { useEffect } from "react";
import { fetchProfilesAction } from "../reduxToolkit/slices/githubSlices";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { StyledBox, StyledList, StyledHiddenList } from "../styledElements";

const SearchUsers = ({
  searchUser,
  setSearchUser,
  selectedUser,
  setSelectedUser,
}) => {
  const theRepos = useSelector((state) => state?.repos);
  const { profiles } = theRepos;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfilesAction(searchUser));
  }, [searchUser]);

  return (
    <>
      <StyledBox
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        placeholder="Search For User"
        value={searchUser}
        onChange={(e) => setSearchUser(e.target.value)}
      >
        <TextField id="outlined-basic" variant="outlined" />
      </StyledBox>
      {searchUser ? (
        <StyledList
          sx={{
            width: "80ch",
            bgcolor: "background.paper",
          }}
        >
          {profiles ? (
            profiles.map((profil) => (
              <ListItem
                alignItems="center"
                key={profil.id}
                className={selectedUser === profil.login ? "selected" : ""}
                onClick={() => {
                  setSelectedUser(profil.login);
                  setSearchUser("");
                }}
              >
                <ListItemAvatar>
                  <Avatar alt="avatar" src={profil.avatar_url} />
                </ListItemAvatar>
                <ListItemText secondary={profil.login} />
              </ListItem>
            ))
          ) : (
            <h1>No user found</h1>
          )}
        </StyledList>
      ) : (
        <StyledHiddenList />
      )}
    </>
  );
};

export default SearchUsers;
