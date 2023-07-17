import React, { useState, useRef, useEffect } from "react";
import { getUserProfile } from "../../actions/manage-customer";

const SelectItem = ({
  name,
  setSearchType,
  menuClose,
}: {
  name: string;
  setSearchType: React.Dispatch<React.SetStateAction<string>>;
  menuClose: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const onClick = () => {
    setSearchType(name);
    menuClose(false);
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className="py-1 px-4 text-left text-base"
    >
      {name}
    </button>
  );
};

const SearchUser = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [searchType, setSearchType] = useState("");
  const [formData, setFormData] = useState({
    userId: "",
  });

  const { userId } = formData;

  const onSelectButtonClicked = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const onChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getUserProfile(userId);
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
    <form className="flex w-full h-20" onSubmit={onSubmit}>
      <div ref={wrapperRef} className="relative block w-44">
        <button
          type="button"
          className={`text-base w-full ${
            searchType === "" ? "text-specialgray" : ""
          } 
            hover:border-2 hover:border-specialyblue border-2 border-specialgray w-full rounded px-3 h-10 text-left`}
          onClick={onSelectButtonClicked}
        >
          {searchType === "" ? "Please select" : searchType}
        </button>
        <div
          className={`mt-1.5 w-44 py-2 border-2 absolute top-12 bg-specialwhite border-specialgray rounded flex flex-col ${
            isMenuOpened ? "visible" : "invisible"
          }`}
        >
          <SelectItem
            name="Email"
            setSearchType={setSearchType}
            menuClose={setIsMenuOpened}
          />
          <SelectItem
            name="Phone(international)"
            setSearchType={setSearchType}
            menuClose={setIsMenuOpened}
          />
          <SelectItem
            name="Refferal Id"
            setSearchType={setSearchType}
            menuClose={setIsMenuOpened}
          />
        </div>
      </div>
      <div className="flex-auto h-10 pr-3 pl-12">
        <div className="hover:border-2 hover:border-specialyblue border-2 border-specialgray w-full rounded">
          <input
            placeholder="Type to search"
            className="text-sm px-3 h-9 text-left outline-none w-full"
            name="userId"
            onChange={onChange}
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-[330px] h-10 flex-none text-base text-specialwhite bg-primary rounded"
      >
        Search
      </button>
    </form>
  );
};

export default SearchUser;
