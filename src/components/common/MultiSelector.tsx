import React, { useState, useRef, useEffect } from "react";

const SelectItem = ({
  name,
  setSearchType,
  menuClose,
  setSelectorValue,
}: {
  name: string;
  setSearchType: React.Dispatch<React.SetStateAction<string>>;
  menuClose: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectorValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const onClick = () => {
    setSearchType(name);
    setSelectorValue(name);
    menuClose(false);
  };
  return (
    <button onClick={onClick} className="py-1 px-4 text-left text-base">
      {name}
    </button>
  );
};

const MultiSelector = ({
  names,
  value,
  setSelectorValue,
}: {
  names: string[];
  value: string;
  setSelectorValue: React.Dispatch<React.SetStateAction<string>>
}) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [searchType, setSearchType] = useState(value);

  const onSelectButtonClicked = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as any)
    ) {
      setIsMenuOpened(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex w-full">
      <div ref={wrapperRef} className="relative block w-full">
        <button
          className={`text-base w-full ${
            searchType === "" ? "text-specialgray" : ""
          } 
            hover:border-2 hover:border-specialyblue border-2 border-specialgray w-full rounded px-3 h-10 text-left`}
          onClick={onSelectButtonClicked}
        >
          {searchType === "" ? "Please select" : searchType}
        </button>
        <div
          className={`mt-1.5 w-full py-2 border-2 z-10 absolute top-12 bg-specialwhite border-specialgray rounded flex flex-col ${
            isMenuOpened ? "visible" : "invisible"
          }`}
        >
          {names.map((item, index) => {
            return (
              <SelectItem
                key={index}
                name={item}
                setSearchType={setSearchType}
                menuClose={setIsMenuOpened}
                setSelectorValue={setSelectorValue}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MultiSelector;
