import React from "react";
import copyImg from "../../img/copy.svg";

const CopyableItem = ({
  name,
  copyValue,
  className = "",
}: {
  name: string;
  copyValue: string;
  className: string;
}) => {
  const onCopyButtonClicked = () => {
    navigator.clipboard.writeText(copyValue);
  };
  return (
    <div className="flex gap-3">
      <p className={className}>{name + ""}</p>
      {copyValue === null ? (
        <></>
      ) : (
        <button onClick={onCopyButtonClicked}>
          <img src={copyImg} />
        </button>
      )}
    </div>
  );
};

export default CopyableItem;
