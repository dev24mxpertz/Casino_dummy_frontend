import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../helpers/axiosconfig";

// ACTIONS : api calls

// --------------------------------------------------------------------------------- auth  --------

export const All_Users_list = createAsyncThunk(
  "admin/All_Users_list",
  async () => {
    try {
      const response = await axios.get(`All_Users_list`);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

// All_User_Statics

export const All_User_Statics = createAsyncThunk(
  "admin/All_User_Statics",
  async () => {
    try {
      const response = await axios.get(`All_User_Statics`);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);
// All_User_Activity

export const All_User_Activity = createAsyncThunk(
  "admin/All_User_Activity",
  async () => {
    try {
      const response = await axios.get(`All_User_Activity`);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

// AllUsers_Rewards

export const All_User_Rewards = createAsyncThunk(
  "admin/All_User_Rewards",
  async () => {
    try {
      const response = await axios.get(`All_User_Rewards`);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

// All_User_Referrals

export const All_User_Referrals = createAsyncThunk(
  "admin/All_User_Referrals",
  async () => {
    try {
      const response = await axios.get(`All_User_Referrals`);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);


export const All_User_Balance = createAsyncThunk("admin/All_User_Balance", async () => {
  try {
    const response = await axios.get("All_User_Balance");
    console.log(response)
    return response;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response.data.message;
  }
});

//All_User_Profit

export const All_User_Profit = createAsyncThunk("admin/All_User_Profit", async () => {
  try {
    const response = await axios.get("All_User_Profit");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response.data.message;
  }
});


export const All_User_Payouts = createAsyncThunk(
  "admin/All_User_Payouts",
  async () => {
    try {
      const response = await axios.get("All_User_Payouts");
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);


// All_User_Total_Payouts

export const All_User_Total_Payouts = createAsyncThunk(
  "admin/All_User_Total_Payouts",
  async () => {
    try {
      const response = await axios.get("All_User_Total_Payouts");
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

// Get_AllSubscribers

export const Get_AllSubscribers = createAsyncThunk(
  "admin/Get_AllSubscribers",
  async () => {
    try {
      const response = await axios.get("Get_AllSubscribers");
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);


// /Make_user_Subscribe

export const Make_user_Subscribe = createAsyncThunk(
  "admin/Make_user_Subscribe",
  async (Email) => {
    try {
      console.log(Email)
      const response = await axios.post("Makeuser_subscribe" , Email);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);




