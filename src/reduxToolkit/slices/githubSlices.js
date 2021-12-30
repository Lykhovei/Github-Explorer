import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import GITHUB_TOKEN from "../../token";

const config = {
  headers: {
    Authorization: `Token ${GITHUB_TOKEN}`,
  },
};

//action for repos
export const fetchReposAction = createAsyncThunk(
  "repos/list",
  async (selectedUser, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${selectedUser}/repos?per_page=300&sort=asc`,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response.data);
    }
  }
);

//action for user profile
export const fetchProfileAction = createAsyncThunk(
  "profile/list",
  async (selectedUser, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${selectedUser}`,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response.data);
    }
  }
);

//action for  profiles list
export const fetchProfilesAction = createAsyncThunk(
  "profiles/list",
  async (searchUser, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${searchUser}`,
        config
      );
      return data.items;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response.data);
    }
  }
);

//slices
const repposSlices = createSlice({
  name: "repos",
  initialState: {},
  extraReducers: (builder) => {
    //repos builders
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

    // many profiles builders
    builder.addCase(fetchProfilesAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProfilesAction.fulfilled, (state, action) => {
      state.loading = false;
      state.profiles = action?.payload;
      state.error = undefined;
    });
    builder.addCase(fetchProfilesAction.rejected, (state, action) => {
      state.loading = false;
      state.profiles = undefined;
      state.error = action?.payload;
    });

    // profile builders
    builder.addCase(fetchProfileAction.pending, (state, action) => {
      state.loading = true;
      state.profile = undefined;
    });
    builder.addCase(fetchProfileAction.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action?.payload;
      state.error = undefined;
    });
    builder.addCase(fetchProfileAction.rejected, (state, action) => {
      state.loading = false;
      state.profile = undefined;
      state.error = action?.payload;
    });
  },
});

//get reducer
export default repposSlices.reducer;
