import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../App";

export default function ReturnBtn() {
  const state = useContext(Context);
  const clearInput = state.clearInput;
  return (
    <>
      <div className="back-clear-btn-div">
        <div className="back-btn-div">
          <Link className="back-btn" to="/" onClick={clearInput}>
            Go Back Home
          </Link>
        </div>
        <div className="clear-btn-div">
          <button className=" clear-btn" onClick={state.clearInput}>
            Clear
          </button>
        </div>
      </div>
    </>
  );
}
