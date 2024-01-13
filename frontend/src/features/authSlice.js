import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  customer: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const LoginUser = createAsyncThunk(
  "user/LoginUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_KEY + `/login`,
        {
          email: user.email,
          password: user.password,
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const LoginCustomer = createAsyncThunk(
  "customer/LoginCustomer",
  async (customer, thunkAPI) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_KEY + `/logincust`,
        {
          email: customer.email,
          password: customer.password,
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const LogOut = createAsyncThunk("user/LogOut", async () => {
  await axios.delete(process.env.REACT_APP_API_KEY + `/logout`);
});

export const getMe = createAsyncThunk("user/getMe", async (_, thunkAPI) => {
  try {
    const response = await axios.get(process.env.REACT_APP_API_KEY + `/me`);
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const getMeCust = createAsyncThunk(
  "customer/getMeCust",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_KEY + `/mecust`
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(LoginCustomer.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LoginCustomer.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.customer = action.payload;
    });
    builder.addCase(LoginCustomer.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //Get User Login

    builder.addCase(getMe.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(getMe.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    //Get Cust Login
    builder.addCase(getMeCust.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMeCust.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.customer = action.payload;
    });
    builder.addCase(getMeCust.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
