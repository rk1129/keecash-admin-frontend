import React, { useState } from "react";
import MultiSelector from "../common/MultiSelector";
import TabViewer from "./TabViewer";

const ManageCountry = () => {
  const [country, setCountry] = useState("All");
  return (
    <div className="">
      <div className="flex items-center py-12 font-black">
        <h1 className="text-3xl">Manage countries</h1>
      </div>
      <div className="flex items-center gap-20 pb-8">
        <span className="text-base inline-block">Select a country</span>
        <div className="w-96">
          <MultiSelector
            names={["All", "FR"]}
            value="ALL"
            setSelectorValue={setCountry}
          />
        </div>
      </div>
      <TabViewer />
    </div>
  );
};

export default ManageCountry;
