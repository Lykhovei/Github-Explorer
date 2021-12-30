import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Card)(({ theme }) => ({
  height: "850px",
  overflowY: "auto",
  boxShadow: "none",
  backgroundColor: "#0c3b4a",
  color: "white",
  marginTop: "20px",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  color: "white",
  border: "2px solid white",
  marginLeft: "20px",
  justifyItems: "baseline",
}));

export const StyledPushedButton = styled(Button)(({ theme }) => ({
  color: "#0c3b4a",
  border: "2px solid white",
  marginLeft: "20px",
  background: "white",
}));

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(2),
  marginBottom: "8px",
  backgroundColor: "#2d7d87",
  textAlign: "center",
  color: theme.palette.text.primary,
  borderRadius: "10px",
}));

export const StyledRepoItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(2),
  marginBottom: "8px",
  backgroundColor: "#2d7d87",
  textAlign: "center",
  color: theme.palette.text.primary,
  borderRadius: "10px",
  boxShadow: "none",
  margin: "5px",
  width: "315px",
  height: "120px",
  overflowY: "scroll",
  overflowX: "hidden",
}));

export const StyledBox = styled(InputBase)(({ theme }) => ({
  height: "60px",
  borderRadius: "10px",
  backgroundColor: "white",
  color: "#0c3b4a",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 3, 1, 3),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "70ch",
    },
  },
}));

export const StyledRepoBox = styled(InputBase)(({ theme }) => ({
  height: "40px ",
  borderRadius: "10px",
  backgroundColor: "#f5f2e1",
  border: "2px solid #f5f2e1",
  color: "#0c3b4a",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 3, 1, 3),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

export const StyledList = styled(List)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "0 0 10px 10px ",
  margin: "10px auto",
}));

export const StyledHiddenList = styled(List)(({ theme }) => ({
  display: "none",
}));
