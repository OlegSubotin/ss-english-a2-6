import React from 'react';
import { FcBullish } from "react-icons/fc";
import s from "./SuccessPopup.module.css";

const SuccessPopup = ({ onClosePopup }) => {
  return (
    <div className={s.popup}>
      <span onClick={() => onClosePopup()} className={s.popupCross}>&times;</span>
      <p className={s.popupText}>Great job!👍 </p>
      <p className={s.popupIcon}><FcBullish /></p>
    </div>
  );
};

export default SuccessPopup