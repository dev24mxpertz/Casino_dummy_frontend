import { createSlice } from "@reduxjs/toolkit";
import {
  Change_Password,
  Image_Uploader,
  RegisterUser_token,
  Register_user,
  async_loaduser,
  async_removeuser,
  login_user,
} from "../Actions/authActions";
import { message } from "antd";

let initialState = {
  user: [],
  UserType: null,
  isAuthenticated: false,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login_user.pending, (state) => {
        state.loading = true;
      })
      .addCase(login_user.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          console.log(action.payload);
          state.user = action.payload.data.data;
          state.UserType = action.payload.data.data.UserType;
          state.isAuthenticated = true;
          state.loading = false;
          message.success("Login Successfull");
        } else {
          message.error(action.payload);
        }
      })
      .addCase(login_user.rejected, (state) => {
        state.loading = false;
      })
      .addCase(Register_user.pending, (state) => {
        state.loading = true;
      })
      .addCase(Register_user.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          console.log(action.payload);
          state.user = action.payload.data.data;
          state.UserType = action.payload.data.data.UserType;
          state.isAuthenticated = true;
          state.loading = false;
          message.success("User Registered Successfull");
        } else {
          message.error(action.payload);
        }
      })
      .addCase(Register_user.rejected, (state) => {
        state.loading = false;
      })
      .addCase(async_loaduser.pending, (state) => {
        state.loading = true;
      })
      .addCase(async_loaduser.fulfilled, (state, action) => {
        console.log(action.payload);
        if (action.payload && action.payload.user) {
          state.user = action.payload.user;
          state.UserType = action.payload.user.UserType;
          state.isAuthenticated = true;
          state.loading = false;
        } else {
          message.error(action.payload);
        }
      })
      .addCase(async_loaduser.rejected, (state) => {
        state.loading = false;
      })
      .addCase(async_removeuser.pending, (state) => {
        state.loading = true;
      })
      .addCase(async_removeuser.fulfilled, (state, action) => {
        state.isAuthenticated = false;
        state.user = null;
        state.UserType = null;
        state.loading = false;
        message.success("User Logout Successfully ");
      })
      .addCase(async_removeuser.rejected, (state) => {
        state.loading = false;
      })
      // Image_Uploader;
      .addCase(Image_Uploader.pending, (state) => {
        state.loading = true;
      })
      .addCase(Image_Uploader.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          state.user = action.payload.data.user;
          state.loading = false;
          message.success("Image Uploaded Successfully !");
        } else {
          message.error(action.payload);
        }
      })
      .addCase(Image_Uploader.rejected, (state) => {
        state.loading = false;
      })
      .addCase(Change_Password.pending, (state) => {
        state.loading = true;
      })
      .addCase(Change_Password.fulfilled, (state, action) => {
        console.log(action.payload);
        if (action.payload && action.payload.data) {
          state.user = action.payload.data.user;
          // state.UserType = action.payload.data.data.UserType;
          state.loading = false;
          message.success("Password Changed Successfully !");
        } else {
          message.error(action.payload);
        }
      })
      .addCase(Change_Password.rejected, (state) => {
        state.loading = false;
      })
      // RegisterUser_token ------------------------------------
      .addCase(RegisterUser_token.pending, (state) => {
        state.loading = true;
      })
      .addCase(RegisterUser_token.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          console.log(action.payload);
          state.user = action.payload.data.data;
          state.UserType = action.payload.data.data.UserType;
          state.isAuthenticated = true;
          state.loading = false;
          message.success("User Registered Successfull");
        } else {
          message.error(action.payload);
        }
      })
      .addCase(RegisterUser_token.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
