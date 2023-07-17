import React from "react";

const ListItem = () => {
  return (
    <tr className="w-full">
      <td className="border-2 border-specialgray text-base p-2 ">
        ryan.kennedy@keecash.com
      </td>
      <td className="border-2 border-specialgray text-base p-2">
        Ryan kennedy
      </td>
      <td className="w-3/12 border-2 border-specialgray text-base p-2">
        ccefefeet
      </td>
    </tr>
  );
};

const UsersViewer = () => {
  return (
    <table className="pt-2 w-full">
      <thead className="w-full">
        <tr className="w-full">
          <th className="border-2 border-specialgray border-b-black text-base p-2 font-bold">
            Email
          </th>
          <th className="border-2 border-specialgray border-b-black text-base p-2 font-bold">
            Names
          </th>
          <th className="w-3/12 border-2 border-specialgray border-b-black text-base p-2 font-bold">
            UserId
          </th>
        </tr>
      </thead>
      <tbody className="w-full">
        <ListItem />
      </tbody>
    </table>
  );
};

export default UsersViewer;
