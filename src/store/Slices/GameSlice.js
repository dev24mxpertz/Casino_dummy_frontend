import { createSlice } from "@reduxjs/toolkit";

import { message } from "antd";
import {
  Fetch_Aviator_Game_Data,
  Fetch_BlackJack_Data,
  Fetch_Hunt_Game_Data,
  Fetch_Rouletta_Data,
  Fetch_Slot_Game_Data,
  Get_All_Aviator_Game_Data,
  Get_All_Game_Data,
  Get_All_Hunt_Game_Data,
  Get_All_Rouletta_Game_Data,
  Get_All_Slot_Game_Data,
  Get_BlackJack_Data,
} from "../Actions/GameActions";

let initialState = {
  All_Slot_Game_Data: [],
  All_BlackJack_Data:[],
  AllRouletta_Game_Data:[],
  All_Hunt_Game_Data:[],
  All_Aviator_Game_Data:[],
  All_Game_Data:[],
  loading: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Fetch_Slot_Game_Data.pending, (state) => {
        state.loading = true;
      })
      .addCase(Fetch_Slot_Game_Data.fulfilled, (state, action) => {
        console.log(action.payload);
        if (action.payload && action.payload.data) {
          console.log(action.payload);
          state.loading = false;
          //   message.success("Login Successfull");
        } else {
          message.error(action.payload);
        }
      })
      .addCase(Fetch_Slot_Game_Data.rejected, (state) => {
        state.loading = false;
      })
      //Get_All_Slot_Game_Data
      .addCase(Get_All_Slot_Game_Data.pending, (state) => {
        state.loading = true;
      })
      .addCase(Get_All_Slot_Game_Data.fulfilled, (state, action) => {
        console.log(action.payload, "-*-------------action payload ---------");
        if (action.payload && action.payload.data) {
          state.All_Slot_Game_Data = action.payload.data.All_slotGame_Data;
          state.loading = false;
        } else {
          message.error(action.payload);
        }
      })
      .addCase(Get_All_Slot_Game_Data.rejected, (state) => {
        state.loading = false;
      })
      // ---------------------------Fetch_BlackJack_Data
      .addCase(Fetch_BlackJack_Data.pending, (state) => {
        state.loading = true;
      })
      .addCase(Fetch_BlackJack_Data.fulfilled, (state, action) => {
        console.log(action.payload);
        if (action.payload && action.payload.data) {
          console.log(action.payload);
          state.loading = false;
          //   message.success("Login Successfull");
        } else {
          message.error(action.payload);
        }
      })
      .addCase(Fetch_BlackJack_Data.rejected, (state) => {
        state.loading = false;
      })
      .addCase(Get_BlackJack_Data.pending, (state) => {
        state.loading = true;
      })
      .addCase(Get_BlackJack_Data.fulfilled, (state, action) => {
        console.log(action.payload);
        if (action.payload && action.payload.data) {
          console.log(action.payload);
          state.All_BlackJack_Data = action.payload.data.All_BlackJack_Data;
          state.loading = false;
          //   message.success("Login Successfull");
        } else {
          message.error(action.payload);
        }
      })
      .addCase(Get_BlackJack_Data.rejected, (state) => {
        state.loading = false;
      })
      // Aviator
      .addCase(Fetch_Aviator_Game_Data.pending, (state) => {
        state.loading = true;
      })
      .addCase(Fetch_Aviator_Game_Data.fulfilled, (state, action) => {
        console.log(action.payload);
        if (action.payload && action.payload.data) {
          console.log(action.payload);
          state.loading = false;
          //   message.success("Login Successfull");
        } else {
          message.error(action.payload);
        }
      })
      .addCase(Fetch_Aviator_Game_Data.rejected, (state) => {
        state.loading = false;
      })
      //Get_All_Aviator_Game_Data
      .addCase(Get_All_Aviator_Game_Data.pending, (state) => {
        state.loading = true;
      })
      .addCase(Get_All_Aviator_Game_Data.fulfilled, (state, action) => {
        console.log(action.payload, "-*-------------action payload ---------");
        if (action.payload && action.payload.data) {
          state.All_Aviator_Game_Data =
            action.payload.data.All_aviatorGame_Data;
          state.loading = false;
        } else {
          message.error(action.payload);
        }
      })
      .addCase(Get_All_Aviator_Game_Data.rejected, (state) => {
        state.loading = false;
      })
      // -------------------------------------------------------------------Fetch_Rouletta_Data
      .addCase(Fetch_Rouletta_Data.pending, (state) => {
        state.loading = true;
      })
      .addCase(Fetch_Rouletta_Data.fulfilled, (state, action) => {
        console.log(action.payload, "-*-------------action payload ---------");
        if (action.payload && action.payload.data) {
          // state.All_Aviator_Game_Data =
          //   action.payload.data.All_aviatorGame_Data;
          state.loading = false;
        } else {
          message.error(action.payload);
        }
      })
      .addCase(Fetch_Rouletta_Data.rejected, (state) => {
        state.loading = false;
      })
      // -------------------Get_All_Rouletta_Game_Data
      .addCase(Get_All_Rouletta_Game_Data.pending, (state) => {
        state.loading = true;
      })
      .addCase(Get_All_Rouletta_Game_Data.fulfilled, (state, action) => {
        console.log(action.payload, "-*-------------action payload ---------");
        if (action.payload && action.payload.data) {
          state.AllRouletta_Game_Data =
            action.payload.data.All_RoulettaGame_Data;
          state.loading = false;
        } else {
          message.error(action.payload);
        }
      })
      .addCase(Get_All_Rouletta_Game_Data.rejected, (state) => {
        state.loading = false;
      })
      // --------------------------- Hunt-Game ------------
      .addCase(Fetch_Hunt_Game_Data.pending, (state) => {
        state.loading = true;
      })
      .addCase(Fetch_Hunt_Game_Data.fulfilled, (state, action) => {
        // console.log(action.payload);
        if (action.payload && action.payload.data) {
          console.log(action.payload);
          state.loading = false;
          //   message.success("Login Successfull");
        } else {
          message.error(action.payload);
        }
      })
      .addCase(Fetch_Hunt_Game_Data.rejected, (state) => {
        state.loading = false;
      })
      //Get_All_Hunt_Game_Data
      .addCase(Get_All_Hunt_Game_Data.pending, (state) => {
        state.loading = true;
      })
      .addCase(Get_All_Hunt_Game_Data.fulfilled, (state, action) => {
        console.log(action.payload, "-*-------------action payload ---------");
        if (action.payload && action.payload.data) {
          state.All_Hunt_Game_Data = action.payload.data.All_huntGame_Data;
          state.loading = false;
        } else {
          message.error(action.payload);
        }
      })
      .addCase(Get_All_Hunt_Game_Data.rejected, (state) => {
        state.loading = false;
      })
      .addCase(Get_All_Game_Data.pending, (state) => {
        state.loading = true;
      })
      .addCase(Get_All_Game_Data.fulfilled, (state, action) => {
        console.log(action.payload, "-*-------------action payload ---------");
        if (action.payload && action.payload.data) {
          state.All_Game_Data = action.payload.data.All_Game_Data;
          state.loading = false;
        } else {
          message.error(action.payload);
        }
      })
      .addCase(Get_All_Game_Data.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default gameSlice.reducer;
