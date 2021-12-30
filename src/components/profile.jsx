import React from "react";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  StyledCard,
  StyledButton,
  StyledPushedButton,
} from "../styledElements";

const UserProfile = ({ profile, open, setOpen, formatDate }) => {
  return (
    <StyledCard sx={{ width: 600 }} key={profile?.id}>
      <CardMedia
        component="img"
        height="300"
        image={profile?.avatar_url}
        alt=""
      />
      <CardContent style={{ textAlign: "start" }}>
        <Typography gutterBottom variant="h5" component="h5">
          Name:
          <span className="profileInfo">
            {profile?.name} {profile?.login}
          </span>
        </Typography>
        <Typography gutterBottom variant="h6" component="h5">
          Bio: <span className="profileInfo">{profile?.bio}</span>
        </Typography>
        <Typography gutterBottom variant="h6" component="h5">
          Created at:{" "}
          <span className="profileInfo">{formatDate(profile?.created_at)}</span>
        </Typography>
        <Typography gutterBottom variant="h6" component="h5">
          Location: <span className="profileInfo">{profile?.location}</span>
        </Typography>
        <Typography gutterBottom variant="h6" component="h5">
          Followers: <span className="profileInfo">{profile?.followers}</span>
        </Typography>
        <Typography gutterBottom variant="h6" component="h5">
          Following: <span className="profileInfo">{profile?.following}</span>
        </Typography>
        <Typography gutterBottom variant="h6" component="h4">
          Repositories:
          <span className="profileInfo">
            {profile?.public_repos ? profile?.public_repos : "N/A"}
          </span>
        </Typography>
      </CardContent>
      <CardActions style={{ textAlign: "center", backgroundColor: "#0c3b4a" }}>
        <StyledButton
          target="_blank"
          href={profile?.html_url}
          style={{ marginLeft: "0" }}
        >
          View Profile
        </StyledButton>
        {open ? (
          <StyledPushedButton onClick={() => setOpen(!open)}>
            Hide all Repos
          </StyledPushedButton>
        ) : (
          <StyledButton onClick={() => setOpen(!open)}>
            View all Repos
          </StyledButton>
        )}
      </CardActions>
    </StyledCard>
  );
};

export default UserProfile;
