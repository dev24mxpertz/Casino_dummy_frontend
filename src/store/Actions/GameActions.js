import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../helpers/axiosconfig";

export const Fetch_Slot_Game_Data = createAsyncThunk(
  "game/Fetch_Slot_Game_Data",
  async (formData) => {
    try {
      const response = await axios.post(`Fetch_Slot_Game_Data`, formData);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

//All_Slot_Game_Data

export const Get_All_Slot_Game_Data = createAsyncThunk(
  "game/Get_All_Slot_Game_Data",
  async () => {
    try {
      const response = await axios.get(`Get_All_Slot_Game_Data`);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

// Fetech_BlackJack_Data;

export const Fetch_BlackJack_Data = createAsyncThunk(
  "game/Fetch_BlackJack_Data",
  async (formData) => {
    try {
      console.log(
        formData,
        "---------------------------------in the action FormData"
      );
      const response = await axios.post(`Fetch_BlackJack_Data`, formData);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

//Get_BlackJack_Data

export const Get_BlackJack_Data = createAsyncThunk(
  "game/Get_BlackJack_Data",
  async () => {
    try {
      const response = await axios.get(`Get_BlackJack_Data`);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

//Aviator Game

export const Fetch_Aviator_Game_Data = createAsyncThunk(
  "game/Fetch_Aviator_Game_Data",
  async (formData) => {
    try {
      const response = await axios.post(`Fetch_Aviator_Game_Data`, formData);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

export const Get_All_Aviator_Game_Data = createAsyncThunk(
  "game/Get_All_Aviator_Game_Data",
  async () => {
    try {
      const response = await axios.get(`Get_All_Aviator_Game_Data`);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

//Fetch_Rouletta_Data

export const Fetch_Rouletta_Data = createAsyncThunk(
  "game/Fetch_Rouletta_Data",
  async (formData) => {
    try {
      const response = await axios.post(`Fetch_Rouletta_Data`, formData);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);


// /Get_All_Rouletta_Game_Data

export const Get_All_Rouletta_Game_Data = createAsyncThunk(
  "game/Get_All_Rouletta_Game_Data",
  async () => {
    try {
      const response = await axios.get(`Get_All_Rouletta_Game_Data`);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);


// Hunt_Game
export const Fetch_Hunt_Game_Data = createAsyncThunk(
  "game/Fetch_Hunt_Game_Data",
  async (formData) => {
    try {
      const response = await axios.post(`Fetch_Hunt_Game_Data`, formData);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

//All_Hunt_Game_Data




export const Get_All_Hunt_Game_Data = createAsyncThunk(
  "game/Get_All_Hunt_Game_Data",
  async () => {
    try {
      const response = await axios.get(`Get_All_Hunt_Game_Data`);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);


export const Get_All_Game_Data = createAsyncThunk(
  "game/Get_All_Game_Data",
  async () => {
    try {
      const response = await axios.get(`Get_All_Game_Data`);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);