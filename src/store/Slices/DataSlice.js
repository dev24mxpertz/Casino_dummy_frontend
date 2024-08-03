import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { Activate_Email, get_User_Calculated_activity, get_User_Calculated_stactics } from "../Actions/DataActions";

let initialState = {
  Total_statics: [],
  Total_Activity: [],
  loading: false,
};

const DataSlice = createSlice({
  name: "Data",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(get_User_Calculated_stactics.pending, (state) => {
        state.loading = true;
      })
      .addCase(get_User_Calculated_stactics.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          console.log(action.payload);
          state.Total_statics = action.payload.data.staticsData;
          state.loading = false;
          //   message.success("Login Successfull");
        } else {
          message.error(action.payload);
        }
      })
      .addCase(get_User_Calculated_stactics.rejected, (state) => {
        state.loading = false;
      })
      //   ;
      .addCase(get_User_Calculated_activity.pending, (state) => {
        state.loading = true;
      })
      .addCase(get_User_Calculated_activity.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          console.log(action.payload);
          state.Total_Activity = action.payload.data.activityData;
          state.loading = false;
          //   message.success("Login Successfull");
        } else {
          message.error(action.payload);
        }
      })
      .addCase(get_User_Calculated_activity.rejected, (state) => {
        state.loading = false;
      })
      // Activate_Email
      .addCase(Activate_Email.pending, (state) => {
        state.loading = true;
      })
      .addCase(Activate_Email.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          console.log(action.payload);
          // state.user = action.payload.data.user ;
          state.loading = false;
            message.success(action.payload.data.message);
        } else {
          message.error(action.payload);
        }
      })
      .addCase(Activate_Email.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default DataSlice.reducer;
