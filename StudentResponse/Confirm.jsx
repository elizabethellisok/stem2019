import React from "react";
import { Link } from "react-router-dom";

function Confirm() {
  return (
    <div>
      <p>Thanks for your input!</p>
      <img src="LikeButton.png" alt="LikeButton" />
      {/* <ConfirmDetails Questions={"Hi there"}/> */}
    </div>
  );
}

// function ConfirmDetails({Questions}) {
//   return (
//     <div>{Questions}</div>
//   )
// }

export default Confirm;