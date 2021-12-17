import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//action for repos
export const fetchReposAction = createAsyncThunk(
  "repos/list",
  async (user, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${user}/repos?per_page=30&sort=asc`
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response);
    }
  }
);

//action for user
export const fetchUserAction = createAsyncThunk(
  "user/list",
  async (user, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${user}`);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response);
    }
  }
);

//slices
const repposSlices = createSlice({
  name: "repos",
  initialState: { user: "Litava" },
  extraReducers: (builder) => {
    //repos rduces
    builder.addCase(fetchReposAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchReposAction.fulfilled, (state, action) => {
      state.loading = false;
      state.reposList = action?.payload;
      state.error = undefined;
    });
    builder.addCase(fetchReposAction.rejected, (state, action) => {
      state.loading = false;
      state.reposList = undefined;
      state.error = action?.payload;
    });
    //user profile
    builder.addCase(fetchUserAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action?.payload;
      state.error = undefined;
    });
    builder.addCase(fetchUserAction.rejected, (state, action) => {
      state.loading = false;
      state.user = undefined;
      state.error = action?.payload;
    });
  },
});

//get reducer
export default repposSlices.reducer;
