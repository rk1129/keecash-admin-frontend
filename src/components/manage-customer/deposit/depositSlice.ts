import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export interface DepositTx {
  id: number;
  amount: number;
  currencyName: string;
  description: string;
  paymentReference: string;
  createdAt: Date;
}

export interface DepositState {
  data: DepositTx[] | null;
  afterCursor: string | null;
  beforeCursor: string | null;
}

const initialState: DepositState = {
  data: null,
  afterCursor: null,
  beforeCursor: null,
};

export const depositSlice = createSlice({
  name: "deposit",
  initialState,
  reducers: {
    loadDepositTx: (state, action: PayloadAction<DepositState>) => {
      Object.assign(state, action.payload);
    },
    depositTxNotFound: (state) => {
      state.data = null;
      state.afterCursor = null;
      state.beforeCursor = null;
    },
  },
});

export const { loadDepositTx, depositTxNotFound } = depositSlice.actions;

export const selectDepositTx = (state: RootState) => state.deposit.data;

export default depositSlice.reducer;
