import React from "react";
import { Link } from "react-router-dom";

var hourChosen;
var studentChosen;
var questionChosen;

function SelectClass() {
  return (
    <div>
      <SelectHour hours={["1st Hour", "2nd Hour", "3rd Hour"]}></SelectHour>
      <br></br>
      <SelectStudent students={["Fred", "Ted"]}></SelectStudent>
      <br></br>
      <SelectQuestion questions={["How do you feel?", "How do you feel about the lesson?"]}></SelectQuestion>
    </div>
  );
}

function SelectHour({ hours }) {
  return (
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="classDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Select Class
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {hours.map(hour => {
          return <a class="dropdown-item" onClick={HourSelected(hour)}>{hour}</a>
        })}
      </div>
    </div>
  );
}

function SelectStudent({ students }) {
    if(hourChosen == null)
      return null;

   return (
     
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Select Student
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {students.map(student => {
          return <a class="dropdown-item" href={"#"+ student}>{student}</a>
        })}
      </div>
    </div>
   );
}

function SelectQuestion({ questions }) {
  if(hourChosen == null)
      return null;

  return (
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Select Question
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {questions.map(question => {
          return <a class="dropdown-item" href={"#"+ question}>{question}</a>
        })}
      </div>
    </div>
   );
}

function HourSelected({ hour }) {
  hourChosen = hour;
  
  return null;
}

export default SelectClass;