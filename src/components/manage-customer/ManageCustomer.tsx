import React from "react";
import SearchUser from "./SearchUser";
import SearchResult from "./SearchResult";
import TabViewer from "./TabViewer";

const ManageCustomer = () => {
  return (
    <div className="">
      <div className="flex items-center py-12 font-black">
        <h1 className="text-3xl">Manage customer</h1>
      </div>
      <SearchUser />
      <SearchResult />
      <TabViewer />
    </div>
  );
};

export default ManageCustomer;
