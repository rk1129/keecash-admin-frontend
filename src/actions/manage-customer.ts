import api from "../utils/api";
import { store } from "../app/store";
import {
  loadUserInfo,
  userNotFound,
} from "../components/manage-customer/userinfo/userinfoSlice";
import { UserInfo } from "../components/manage-customer/userinfo/userinfoSlice";
import { DepositTxFilter } from "../components/manage-customer/deposit/Deposit";
import {
  loadDepositTx,
  depositTxNotFound,
  DepositState,
  DepositTx,
} from "../components/manage-customer/deposit/depositSlice";

const { dispatch } = store;

// get user profile
export const getUserProfile = async (userId: string) => {
  try {
    const res = await api.get(`/admin/find_userinfo/${userId}`);
    console.log("user info", res);
    const userInfo: UserInfo = {
      firstName: res.data.firstname,
      secondName: res.data.secondname,
      email: res.data.email,
      phoenumber: res.data.phonenumber,
      countryCode: res.data.user_country_id,
      userId: res.data.id,
      referralId: res.data.referralid,
      referralAppliedUserId: res.data.referralappliedid,
      registeredAt: res.data.registeredat,
      approvedAt: res.data.approvedat,
      rejectedAt: res.data.rejectedat,
      address1: res.data.address,
      address2: res.data.address,
      zipcode: "zipcode",
      city: res.data.city,
      status: res.data.status,
      accountType: res.data.type,
      language: res.data.language,
    };
    dispatch(loadUserInfo(userInfo));
  } catch (error) {
    console.log("error ocurred in getting user profile");
    dispatch(userNotFound());
  }
};

export const getDepositTx = async (filter: Partial<DepositTxFilter>) => {
  try {
    const res = await api.post("/admin/get-crypto-tx", filter);
    console.log("crypto deposit tx", res);
    const depositTx: DepositTx[] = [];
    res.data.data.forEach((transaction: any) => {
      depositTx.push({
        id: transaction.id,
        amount: transaction.amount,
        currencyName: transaction.currencyName,
        description: transaction.description,
        paymentReference: transaction.paymentReference,
        createdAt: transaction.createdAt,
      });
    });
    const depositState: DepositState = {
      data: depositTx,
      afterCursor: res.data.cursor.afterCursor,
      beforeCursor: res.data.cursor.beforeCursor,
    };
    dispatch(loadDepositTx(depositState));
  } catch (err) {
    dispatch(depositTxNotFound());
    console.error(err);
  }
};

export const getWithdrawTx = async (filter: Partial<DepositTxFilter>) => {
  try {
    const res = await api.post("/admin/get-crypto-tx", filter);
    console.log("crypto deposit tx", res);
    const depositTx: DepositTx[] = [];
    res.data.data.forEach((transaction: any) => {
      depositTx.push({
        id: transaction.id,
        amount: transaction.amount,
        currencyName: transaction.currencyName,
        description: transaction.description,
        paymentReference: transaction.paymentReference,
        createdAt: transaction.createdAt,
      });
    });
    const depositState: DepositState = {
      data: depositTx,
      afterCursor: res.data.cursor.afterCursor,
      beforeCursor: res.data.cursor.beforeCursor,
    };
    dispatch(loadDepositTx(depositState));
  } catch (err) {
    dispatch(depositTxNotFound());
    console.error(err);
  }
};

export const getTransferTx = async (filter: Partial<DepositTxFilter>) => {
  try {
    const res = await api.post("/admin/get-crypto-tx", filter);
    console.log("crypto deposit tx", res);
    const depositTx: DepositTx[] = [];
    res.data.data.forEach((transaction: any) => {
      depositTx.push({
        id: transaction.id,
        amount: transaction.amount,
        currencyName: transaction.currencyName,
        description: transaction.description,
        paymentReference: transaction.paymentReference,
        createdAt: transaction.createdAt,
      });
    });
    const depositState: DepositState = {
      data: depositTx,
      afterCursor: res.data.cursor.afterCursor,
      beforeCursor: res.data.cursor.beforeCursor,
    };
    dispatch(loadDepositTx(depositState));
  } catch (err) {
    dispatch(depositTxNotFound());
    console.error(err);
  }
};
