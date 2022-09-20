import React from "react";
import "../Styles/List.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";

let ListItems = ({ text, togglechecking, isckecked, deleting }) => {
  return (
    <div className="newtask">
      <div
        className={`${isckecked ? "checking-icon" : "unchecking-icon"}`}
        onClick={togglechecking}
      >
        {isckecked && <BsFillCheckCircleFill size={19} />}
      </div>
      <div className={`${isckecked ? "test-text-completed" : "test-text"}`}>
        {text}
      </div>
      <div className="deletingicon" onClick={deleting}>
        <BsFillTrashFill size={19} />
      </div>
    </div>
  );
};

export default ListItems;
