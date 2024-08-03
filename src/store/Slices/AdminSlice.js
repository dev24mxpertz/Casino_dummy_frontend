import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { All_User_Activity, All_User_Balance, All_User_Payouts, All_User_Profit, All_User_Referrals, All_User_Rewards, All_User_Statics, All_User_Total_Payouts, All_Users_list, Get_AllSubscribers, Make_user_Subscribe } from "../Actions/AdminActions";

let initialState = {
  All_users_list: [],
  AllUsers_Statics:[],
  AllUsers_Activity:[],
  AllUsers_Rewards:[],
  AllUsers_Referrals:[],
  AllUsers_Balance:[],
  AllUsers_Profit:[],
  AllUsers_Payouts:[],
  AllUsers_Total_Payouts:[],
  AllSubscribers:[],
  loading: false,
};

const AdminSlice = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(All_Users_list.pending, (state) => {
        state.loading = true;
      })
      .addCase(All_Users_list.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          console.log(action.payload);
          state.All_users_list = action.payload.data.All_users;
          state.loading = false;
        } else {
          message.error(action.payload);
        }
      })
      .addCase(All_Users_list.rejected, (state) => {
        state.loading = false;
      })
      .addCase(All_User_Statics.pending, (state) => {
        state.loading = true;
      })
      .addCase(All_User_Statics.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          console.log(action.payload);
          state.AllUsers_Statics = action.payload.data.AllUsers_Statics;
          state.loading = false;
        } else {
          message.error(action.payload);
        }
      })
      .addCase(All_User_Statics.rejected, (state) => {
        state.loading = false;
      })
      .addCase(All_User_Activity.pending, (state) => {
        state.loading = true;
      })
      .addCase(All_User_Activity.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          console.log(action.payload);
          state.AllUsers_Activity = action.payload.data.AllUsers_Activity;
          state.loading = false;
        } else {
          message.error(action.payload);
        }
      })
      .addCase(All_User_Activity.rejected, (state) => {
        state.loading = false;
      })
      // All_User_Rewards;
      .addCase(All_User_Rewards.pending, (state) => {
        state.loading = true;
      })
      .addCase(All_User_Rewards.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          console.log(action.payload);
          state.AllUsers_Rewards = action.payload.data.AllUsers_Rewards;
          state.loading = false;
        } else {
          message.error(action.payload);
        }
      })
      .addCase(All_User_Rewards.rejected, (state) => {
        state.loading = false;
      })
      // AllUsers_Referrals
      .addCase(All_User_Referrals.pending, (state) => {
        state.loading = true;
      })
      .addCase(All_User_Referrals.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          console.log(action.payload);
          state.AllUsers_Referrals = action.payload.data.AllUsers_Referrals;
          state.loading = false;
        } else {
          message.error(action.payload);
        }
      })
      .addCase(All_User_Referrals.rejected, (state) => {
        state.loading = false;
      })
      // All_User_Balance
      .addCase(All_User_Balance.pending, (state) => {
        state.loading = true;
      })
      .addCase(All_User_Balance.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          console.log(action.payload);
          state.AllUsers_Balance = action.payload.data.AllUsers_Balance;
          state.loading = false;
        } else {
          message.error(action.payload);
        }
      })
      .addCase(All_User_Balance.rejected, (state) => {
        state.loading = false;
      })
      //All_User_Profit
      .addCase(All_User_Profit.pending, (state) => {
        state.loading = true;
      })
      .addCase(All_User_Profit.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          console.log(action.payload);
          state.AllUsers_Profit = action.payload.data.AllUsers_Profit;
          state.loading = false;
        } else {
          message.error(action.payload);
        }
      })
      .addCase(All_User_Profit.rejected, (state) => {
        state.loading = false;
      })
      // All_User_Payouts;
      .addCase(All_User_Payouts.pending, (state) => {
        state.loading = true;
      })
      .addCase(All_User_Payouts.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          console.log(action.payload);
          state.AllUsers_Payouts = action.payload.data.AllUsers_Payouts;
          state.loading = false;
        } else {
          message.error(action.payload);
        }
      })
      .addCase(All_User_Payouts.rejected, (state) => {
        state.loading = false;
      })
      // All_User_Total_Payouts;
      .addCase(All_User_Total_Payouts.pending, (state) => {
        state.loading = true;
      })
      .addCase(All_User_Total_Payouts.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          console.log(action.payload);
          state.AllUsers_Total_Payouts =
            action.payload.data.AllUsers_Total_Payouts;
          state.loading = false;
        } else {
          message.error(action.payload);
        }
      })
      .addCase(All_User_Total_Payouts.rejected, (state) => {
        state.loading = false;
      })
      // Get_AllSubscribers;
      .addCase(Get_AllSubscribers.pending, (state) => {
        state.loading = true;
      })
      .addCase(Get_AllSubscribers.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          console.log(action.payload);
          state.AllSubscribers = action.payload.data.AllSubscribers;
          state.loading = false;
        } else {
          message.error(action.payload);
        }
      })
      .addCase(Get_AllSubscribers.rejected, (state) => {
        state.loading = false;
      })
      // Make_user_Subscribe
      .addCase(Make_user_Subscribe.pending, (state) => {
        state.loading = true;
      })
      .addCase(Make_user_Subscribe.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          console.log(action.payload);
          state.AllSubscribers = action.payload.data.subscriber;
          message.success(action.payload.data.message)
          state.loading = false;
        } else {
          message.error(action.payload);
        }
      })
      .addCase(Make_user_Subscribe.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default AdminSlice.reducer;
