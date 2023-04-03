import React, { useState } from "react";
import completeImg from "../../images/remove-sign-sm.png";
import "./CompleteBtn.css";

function CompleteBtn(props) {
  return <img src={completeImg} height="60" className="button" />;
}

export default CompleteBtn;
