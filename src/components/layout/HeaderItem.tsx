import React from "react";
import { Link } from "react-router-dom";

const HeaderItem = ({ name, to }: { name: string; to: string }) => {
  return (
    <div className="px-4 text-base">
      <Link to={to}>{name}</Link>
    </div>
  );
};

export default HeaderItem;
