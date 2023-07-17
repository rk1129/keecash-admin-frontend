import React from "react";
import deleteSvg from "../../img/delete.svg";

const ListItem = () => {
  return (
    <tr className="w-full">
      <td className="w-3/12 border-2 border-specialgray text-base p-2 ">
        ryan.kennedy@keecash.com
      </td>
      <td className="border-2 border-specialgray text-base p-2">super admin</td>
      <td className="w-10 pl-2">
        <button
          type="button"
          className="flex items-center border-primary border-[1px] rounded p-1"
        >
          <img src={deleteSvg} alt="" />
        </button>
      </td>
    </tr>
  );
};

const AdminViewer = () => {
  return (
    <table className="pt-2 w-full">
      <thead className="w-full">
        <tr className="w-full">
          <th className="w-6/12 border-2 border-specialgray border-b-black text-base p-2 font-bold">
            Email
          </th>
          <th className="border-2 border-specialgray border-b-black text-base p-2 font-bold">
            Type
          </th>
          <th className="w-10"></th>
        </tr>
      </thead>
      <tbody className="w-full">
        <ListItem />
      </tbody>
    </table>
  );
};

export default AdminViewer;
