import React from "react";

const Checkbox = ({ name }: { name: string }) => {
  return (
    <div className="flex gap-2 items-center">
      <input type="checkbox" value={name} />
      <p className="text-base">{name}</p>
    </div>
  );
};

export default Checkbox;
