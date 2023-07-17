import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export interface TransferTx {
  id: number;
  amount: number;
  currencyName: string;
  description: string;
  paymentReference: string;
  createdAt: Date;
}

export interface TransferState {
  data: TransferTx[] | null;
  afterCursor: string | null;
  beforeCursor: string | null;
}

const initialState: TransferState = {
  data: null,
  afterCursor: null,
  beforeCursor: null,
};

export const transferSlice = createSlice({
  name: "transfer",
  initialState,
  reducers: {
    loadTransferTx: (state, action: PayloadAction<TransferState>) => {
      Object.assign(state, action.payload);
    },
    transferTxNotFound: (state) => {
      state.data = null;
      state.afterCursor = null;
      state.beforeCursor = null;
    },
  },
});

export const { loadTransferTx, transferTxNotFound } = transferSlice.actions;

export const selectTransferTx = (state: RootState) => state.transfer.data;

export default transferSlice.reducer;
