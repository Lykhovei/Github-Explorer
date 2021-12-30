import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {
  StyledCard,
  StyledButton,
  StyledRepoBox,
  StyledRepoItem,
} from "../styledElements";

function UserRepos({ reposList, formatDate }) {
  const [foundRepo, setFoundRepo] = useState("");
  const foundNeededRepo = reposList.filter((oneRepo) =>
    oneRepo.name.includes(foundRepo)
  );

  const AllProfileRepos = () => {
    return (
      reposList?.name !== "Error" &&
      reposList?.map((repo) => (
        <>
          <a target="_blank" rel="noreferrer" href={repo?.html_url}>
            <StyledRepoItem key={repo.id}>
              <StyledButton style={{ border: "0px" }}>
                {repo?.name}
              </StyledButton>
              <Divider />
              <div className="repoDesc-div">
                Description:{" "}
                <span className="repoDesc-span">{repo?.description}</span>
              </div>
              <div className="repoDesc-div">
                Language:{" "}
                <span className="repoDesc-span">{repo?.language}</span>
              </div>
              <div className="repoDesc-div">
                Created at:{" "}
                <span className="repoDesc-span">
                  {formatDate(repo?.created_at)}
                </span>
              </div>
            </StyledRepoItem>
          </a>{" "}
        </>
      ))
    );
  };

  const FilteredProfileRepos = () => {
    return (
      foundNeededRepo?.name !== "Error" &&
      foundNeededRepo?.map((repo) => (
        <>
          <a target="_blank" rel="noreferrer" href={repo?.html_url}>
            <StyledRepoItem key={repo.id}>
              <StyledButton style={{ border: "0px" }}>
                {repo?.name}
              </StyledButton>
              <Divider />
              <div className="repoDesc-div">
                Description:{" "}
                <span className="repoDesc-span">{repo?.description}</span>
              </div>
              <div className="repoDesc-div">
                Language:{" "}
                <span className="repoDesc-span">{repo?.language}</span>
              </div>
              <div className="repoDesc-div">
                Created at:{" "}
                <span className="repoDesc-span">
                  {formatDate(repo?.created_at)}
                </span>
              </div>
            </StyledRepoItem>
          </a>{" "}
        </>
      ))
    );
  };

  return (
    <StyledCard
      sx={{ width: 770 }}
      style={{
        backgroundColor: "#0c3b4a",
        boxShadow: "none",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <StyledRepoBox
          component="form"
          noValidate
          autoComplete="off"
          placeholder="Search For Repo"
          value={foundRepo}
          onChange={(e) => setFoundRepo(e.target.value)}
        >
          <TextField />
        </StyledRepoBox>
      </div>

      <CardContent
        style={{
          backgroundColor: "#0c3b4a",
          boxShadow: "none",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {foundRepo ? <FilteredProfileRepos /> : <AllProfileRepos />}
        </Typography>
      </CardContent>
    </StyledCard>
  );
}

export default UserRepos;
