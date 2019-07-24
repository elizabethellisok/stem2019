import React from "react";
import { Link } from "react-router-dom";
/*
<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Thanks for your input!</h5>
        <button type="button" class="close" data-dismiss="mpodal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <img src="LikeButton.png" alt="LikeButton" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
*/

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