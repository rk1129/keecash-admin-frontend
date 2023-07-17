import React, { useState } from "react";
import Deposit from "./deposit/Deposit";
import UserInfo from "./userinfo/UserInfo";
import Withdraw from "./withdraw/Withdraw";
import Beneficiaries from "./beneficiaries/Beneficiaries";
import Transfer from "./transfer/Transfer";

const enum HeaderItems {
  USER_INFO = "User Info",
  DEPOSIT = "Deposit",
  WIDTHDRAWAL = "Withdrawal",
  TRANSFER = "Transfer",
  BENEFICIARIES = "Beneficiaries",
}

const HeaderItem = ({
  name,
  selectedItem,
  setHeaderItem,
}: {
  name: HeaderItems;
  selectedItem: HeaderItems;
  setHeaderItem: React.Dispatch<React.SetStateAction<HeaderItems>>;
}) => {
  const isSelected = selectedItem === name;
  const onClick = () => {
    setHeaderItem(name);
  };
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 text-base ${
        isSelected ? "text-black" : "text-primary"
      } ${
        isSelected
          ? "border-2 border-specialgray rounded-t border-b-0"
          : "border-b-2 border-specialgray"
      }`}
    >
      {name}
    </button>
  );
};

const TabViewer = () => {
  const [selectedItem, setHeaderItem] = useState(HeaderItems.USER_INFO);

  return (
    <div>
      <div className="flex pb-8">
        <HeaderItem
          name={HeaderItems.USER_INFO}
          setHeaderItem={setHeaderItem}
          selectedItem={selectedItem}
        />
        <HeaderItem
          name={HeaderItems.DEPOSIT}
          setHeaderItem={setHeaderItem}
          selectedItem={selectedItem}
        />
        <HeaderItem
          name={HeaderItems.WIDTHDRAWAL}
          setHeaderItem={setHeaderItem}
          selectedItem={selectedItem}
        />
        <HeaderItem
          name={HeaderItems.TRANSFER}
          setHeaderItem={setHeaderItem}
          selectedItem={selectedItem}
        />
        <HeaderItem
          name={HeaderItems.BENEFICIARIES}
          setHeaderItem={setHeaderItem}
          selectedItem={selectedItem}
        />
        <div className="py-2 px-4 text-base text-black border-b-2 border-specialgray flex-auto" />
      </div>
      <div>
        {(() => {
          switch (selectedItem) {
            case HeaderItems.USER_INFO:
              return <UserInfo />;
            case HeaderItems.DEPOSIT:
              return <Deposit />;
            case HeaderItems.WIDTHDRAWAL:
              return <Withdraw />;
            case HeaderItems.TRANSFER:
              return <Transfer />;
            case HeaderItems.BENEFICIARIES:
              return <Beneficiaries />;
          }
        })()}
      </div>
    </div>
  );
};

export default TabViewer;
