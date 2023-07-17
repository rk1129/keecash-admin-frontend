import React, { Fragment } from "react";
import spinnerSvg from "../../img/spinner.svg";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinnerSvg}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </Fragment>
  );
};

export default Spinner;
