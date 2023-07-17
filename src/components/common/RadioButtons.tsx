import React, { useState } from "react";

const RadioButton = ({
  name,
  selectedItem,
  setSelectedItem,
  setValue,
}: {
  name: string;
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const onClick = () => {
    setSelectedItem(name);
    setValue(name);
  };

  return (
    <div>
      <button
        className="flex gap-2 items-center"
        type="button"
        onClick={onClick}
      >
        <div className="border-[1px] rounded-full border-specialgray">
          <div
            className={`w-4 h-4 border-4 ${
              name === selectedItem ? "border-primary" : "border-specialwhite"
            } rounded-full`}
          />
        </div>
        <p className="text-base font-bold">{name}</p>
      </button>
    </div>
  );
};

const RadioButtons = ({
  names,
  setValue,
}: {
  names: string[];
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [selecteditem, setSelectedItem] = useState(names[0]);

  return (
    <div className="flex flex-col gap-1.5">
      {names.map((name, index) => (
        <RadioButton
          setSelectedItem={setSelectedItem}
          key={index}
          name={name}
          selectedItem={selecteditem}
          setValue= {setValue}
        />
      ))}
    </div>
  );
};

export default RadioButtons;
