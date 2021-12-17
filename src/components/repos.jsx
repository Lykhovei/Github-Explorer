import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchReposAction,
  fetchUserAction,
} from "../reduxToolkit/slices/githubSlices";

function Repos() {
  //dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReposAction("Litava"));
  }, [dispatch]);
}

export default Repos;
