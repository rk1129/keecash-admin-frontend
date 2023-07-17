import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export interface WithdrawTx {
  id: number;
  amount: number;
  currencyName: string;
  description: string;
  paymentReference: string;
  createdAt: Date;
}

export interface WithdrawState {
  data: WithdrawTx[] | null;
  afterCursor: string | null;
  beforeCursor: string | null;
}

const initialState: WithdrawState = {
  data: null,
  afterCursor: null,
  beforeCursor: null,
};

export const withdrawSlice = createSlice({
  name: "withdraw",
  initialState,
  reducers: {
    loadWithdrawTx: (state, action: PayloadAction<WithdrawState>) => {
      Object.assign(state, action.payload);
    },
    withdrawTxNotFound: (state) => {
      state.data = null;
      state.afterCursor = null;
      state.beforeCursor = null;
    },
  },
});

export const { loadWithdrawTx, withdrawTxNotFound } = withdrawSlice.actions;

export const selectWithdrawTx = (state: RootState) => state.withdraw.data;

export default withdrawSlice.reducer;
