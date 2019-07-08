import React from "react";
import { Link } from "react-router-dom";

function SelectClass() {
  return (
    <div>
      <p>Select your class:</p>
      <Dropdown classes={["1st Hour", "2nd Hour", "3rd Hour"]}></Dropdown>
      <ClassList Classes={["1st Hour", "2nd Hour", "3rd Hour"]}></ClassList>
    </div>
  )
}

function Dropdown({ classes }) {
  return (
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Select Class
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {classes.map(hour => {
          return <a class="dropdown-item" href={"#"+ hour}>{hour}</a>
        })}
      </div>
    </div>
  );
}

function ClassList({ Classes }) {
  return (
    <div>{Classes}</div>
  )
}

export default SelectClass;