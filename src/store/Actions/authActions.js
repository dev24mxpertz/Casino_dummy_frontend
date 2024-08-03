import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../helpers/axiosconfig";

// ACTIONS : api calls

// --------------------------------------------------------------------------------- auth  --------

export const login_user = createAsyncThunk(
  "auth/login_user",
  async (values) => {
    try {
      const response = await axios.post(`login`, values);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

export const Register_user = createAsyncThunk(
  "auth/Register_user",
  async (formData) => {
    try {
      const response = await axios.post(`Signup`, formData);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

export const async_loaduser = createAsyncThunk(
  "auth/async_loaduser",
  async () => {
    const response = await axios.post(`me`);
    console.log(response);
    return response.data;
  }
);

export const async_removeuser = createAsyncThunk(
  "auth/async_removeuser",
  async () => {
    try {
      const response = await axios.get(`signout`);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

export const Image_Uploader = createAsyncThunk(
  "auth/Image_Uploader",
  async (Data) => {
    try {
      console.log(Data);
      let user_id = Data.user_id;
      let Image = Data.image;
      const formData = new FormData();
      formData.append("image", Image);
      const response = await axios.post(`image/upload/${user_id}`, formData);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

export const Change_Password = createAsyncThunk(
  "auth/Change_Password",
  async (formData) => {
    try {
      const response = await axios.post(`Change_Password`, formData);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

//  ---------------------------------- RegisterUser_token -------------

export const RegisterUser_token = createAsyncThunk(
  "auth/RegisterUser_token",
  async (formData) => {
    try {
      console.log(formData);
      const response = await axios.post(`RegisterUser_token/${formData.token}`, formData);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error)
       console.log(error.response.data.message);
       return error.response.data.message;
    }
  }
);
