import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectIsUserFound } from "./userinfo/userinfoSlice";

const SearchResult = () => {
  const isUserFound = useAppSelector(selectIsUserFound);

  return (
    <div className="h-11">
      {isUserFound === null ? (
        <></>
      ) : (
        <div
          className={`${
            isUserFound ? "bg-primary" : "bg-danger"
          } px-2 py-1 inline-block rounded`}
        >
          <p className="text-xs text-specialwhite">
            {isUserFound ? "A" : "No"} user found
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
