import React, { useState } from "react";
import SetActivation from "./SetActivation";
import SetFees from "./SetFees";

const enum HeaderItems {
  SET_ACTIVATION = "Set activation",
  SET_FEES = "Set fees",
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
  const [selectedItem, setHeaderItem] = useState(HeaderItems.SET_ACTIVATION);

  return (
    <div>
      <div className="flex pb-8">
        <HeaderItem
          name={HeaderItems.SET_ACTIVATION}
          setHeaderItem={setHeaderItem}
          selectedItem={selectedItem}
        />
        <HeaderItem
          name={HeaderItems.SET_FEES}
          setHeaderItem={setHeaderItem}
          selectedItem={selectedItem}
        />
        <div className="py-2 px-4 text-base text-black border-b-2 border-specialgray flex-auto" />
      </div>
      <div>
        {(() => {
          switch (selectedItem) {
            case HeaderItems.SET_ACTIVATION:
              return <SetActivation />;
            case HeaderItems.SET_FEES:
              return <SetFees />
          }
        })()}
      </div>
    </div>
  );
};

export default TabViewer;
