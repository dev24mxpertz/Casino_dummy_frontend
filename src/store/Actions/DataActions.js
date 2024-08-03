import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../helpers/axiosconfig";

// ACTIONS : api calls

// --------------------------------------------------------------------------------- auth  --------

export const get_User_Calculated_stactics = createAsyncThunk(
  "data/get_User_Calculated_stactics",
  async (id) => {
    try {
      console.log(id);
      const response = await axios.get(`get_User_Calculated_stactics/${id}`);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

export const get_User_Calculated_activity = createAsyncThunk(
  "data/get_User_Calculated_activity",
  async (id) => {
    try {
      console.log(id);
      const response = await axios.get(`get_User_Calculated_activity/${id}`);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

export const Activate_Email = createAsyncThunk(
  "data/Activate_Email",
  async (id) => {
    try {
      console.log(id)
      const response = await axios.get(`Activate_Email/${id}`);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);
