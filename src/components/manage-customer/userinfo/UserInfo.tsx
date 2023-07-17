import React, {useState} from "react";
import { useAppSelector } from "../../../app/hooks";
import userImg from "../../../img/user.svg";
import CopyableItem from "../../common/CopyableItem";
import MultiSelector from "../../common/MultiSelector";
import { selectIsUserFound, selectUserInfo } from "./userinfoSlice";

export enum Status {
  REGISTERED = "REGISTERED",
  EMAIL_VALIDATED = "EMAIL_VALIDATED",
  PHONE_VALIDATED = "PHONE_VALIDATED",
  COMPLETED = "COMPLETED",
  KYC_VALIDATED = "KYC_VALIDATED",
  KYB_VALIDATED = "KYB_VALIDATED",
  REJECTED = "REJECTED",
  DISABLED = "DISABLED",
  DELETED = "DELETED",
}

export enum AccountType {
  PERSON = "PERSON",
  ENTERPRISE = "ENTERPRISE",
}

export enum Language {
  ENGLISH = "ENGLISH",
  FRANCH = "FRANCH",
}

const UserInfo = () => {
  const userInfo = useAppSelector(selectUserInfo);
  const isUserFound = useAppSelector(selectIsUserFound);
  const [language, setLanguage] = useState(userInfo.language);
  const [accountType, setAccountType] = useState(userInfo.accountType);
  const [status, setStatus] = useState(userInfo.status);

  return isUserFound ? (
    <div className="flex">
      <div className="w-[280px] h-auto flex flex-col items-center">
        <img src={userImg} alt="" />
      </div>
      <div className="flex-auto h-auto">
        <div className=" w-full border-bordercolor border-2 rounded">
          <div className="bg-graybackground px-4 py-2">
            <p className="text-base font-bold">User profile</p>
          </div>
          <div className="p-4 ">
            <div className="flex flex-col  gap-2">
              <CopyableItem
                name={userInfo.email}
                copyValue={userInfo.email}
                className="text-xl font-black"
              />
              <CopyableItem
                name={userInfo.phoenumber}
                copyValue={userInfo.phoenumber}
                className="text-base font-bold"
              />
              <CopyableItem
                name="{{country_code}}"
                copyValue="country_code"
                className="text-base text-specialgray"
              />
              <CopyableItem
                name={`userId: ${userInfo.userId}`}
                copyValue={userInfo.userId}
                className="text-base "
              />
              <CopyableItem
                name={`referal_id: ${userInfo.referralId}`}
                copyValue={userInfo.referralId}
                className="text-base "
              />
              <CopyableItem
                name={`referal_applied_user_id: ${userInfo.referralAppliedUserId}`}
                copyValue={userInfo.referralAppliedUserId}
                className="text-base "
              />
              <p className="text-base text-specialgray">
                {"registered_at:{{ registered_at }}"}
              </p>
            </div>
            <div className="py-4">
              <button className="text-base font-normal px-3 py-2 bg-primary text-specialwhite rounded">
                Save modifications
              </button>
            </div>
            <div className="grid grid-cols-2 grid-flow-row gap-4">
              <div className="flex flex-col gap-2 pt-4">
                <p className="text-base">Fist Name</p>
                <div className="hover:border-2 hover:border-specialyblue border-2 border-specialgray w-full rounded">
                  <input
                    placeholder={userInfo.firstName}
                    className="text-sm px-3 h-9 text-left outline-none w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <p className="text-base">Second Name</p>
                <div className="hover:border-2 hover:border-specialyblue border-2 border-specialgray w-full rounded">
                  <input
                    placeholder={userInfo.secondName}
                    className="text-sm px-3 h-9 text-left outline-none w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <p className="text-base">Address1</p>
                <div className="hover:border-2 hover:border-specialyblue border-2 border-specialgray w-full rounded">
                  <input
                    placeholder={userInfo.address1}
                    className="text-sm px-3 h-9 text-left outline-none w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <p className="text-base">Address2</p>
                <div className="hover:border-2 hover:border-specialyblue border-2 border-specialgray w-full rounded">
                  <input
                    placeholder={userInfo.address2}
                    className="text-sm px-3 h-9 text-left outline-none w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <p className="text-base">Zipcode</p>
                <div className="hover:border-2 hover:border-specialyblue border-2 border-specialgray w-full rounded">
                  <input
                    placeholder={userInfo.zipcode}
                    className="text-sm px-3 h-9 text-left outline-none w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <p className="text-base">city</p>
                <div className="hover:border-2 hover:border-specialyblue border-2 border-specialgray w-full rounded">
                  <input
                    placeholder={userInfo.city}
                    className="text-sm px-3 h-9 text-left outline-none w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 grid-flow-row">
                <div className="flex items-center">
                  <p className="text-base">Status</p>
                </div>
                <div className="flex items-center">
                  <MultiSelector
                    names={Object.values(Status)}
                    value={userInfo.status}
                    setSelectorValue={setStatus}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 grid-flow-row">
                <div className="flex items-center">
                  <p className="text-base">account type</p>
                </div>
                <div className="flex items-center">
                  <MultiSelector
                    names={Object.values(AccountType)}
                    value={userInfo.accountType}
                    setSelectorValue={setAccountType}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 grid-flow-row">
                <div className="flex items-center">
                  <p className="text-base">language</p>
                </div>
                <div className="flex items-center">
                  <MultiSelector
                    names={Object.values(Language)}
                    value={userInfo.language}
                    setSelectorValue={setLanguage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default UserInfo;
