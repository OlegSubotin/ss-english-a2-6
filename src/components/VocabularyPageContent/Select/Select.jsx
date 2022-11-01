import React, { useState, useEffect } from 'react';
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import { FcApproval, FcCancel } from "react-icons/fc";
import { runFireworks } from '../../../lib/confetti';
import SuccessPopup from 'components/SuccessPopup';
import s from "./Select.module.css";


const Select = ({ tasks }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(tasks[questionNumber].correct);
  const [showTip, setShowTip] = useState(false);
  const [showPlus, setShowPlus] = useState(false);
  const [showMinus, setShowMinus] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect((() => {
    setCorrectAnswer(tasks[questionNumber].correct)
  }), [tasks, questionNumber]);

  const onNextBtnClick = () => {
    const inputsEl = document.querySelectorAll("input");
    inputsEl.forEach(el => el.checked = false);

    if (questionNumber < tasks.length - 1) {
      setQuestionNumber(questionNumber + 1);
      setShowPlus(false);
      setShowMinus(false);
    }
  };
  
  const onPreviousBtnClick = () => {
    const inputsEl = document.querySelectorAll("input");
    inputsEl.forEach(el => el.checked = false);
    if (questionNumber === 0) {
      return;
    } else {
      setQuestionNumber(questionNumber - 1);
      setShowPlus(false);
      setShowMinus(false);
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    let userAnswer = e.target.elements.answer.value;
    if (userAnswer.length === 0) {
      setShowTip(true);
    }
    if (userAnswer.length > 0) {
      setShowTip(false);
      if (userAnswer.trim() === correctAnswer.trim()) {
        setShowPlus(true);
        setShowMinus(false);
        if (questionNumber + 1 === tasks.length) {
          runFireworks();
          setShowPopup(true);
        }
      } else {
        setShowMinus(true);
        setShowPlus(false);
      }
    }
  };

  const onClosePopup = () => {
    setShowPopup(false);
  }


  return (
    <div className={s.selectWrapper}>
      <div className={s.headWrapper}>
        <button
          className={s.navigator}
          onClick={() => onPreviousBtnClick()}
        >
          <span className={s.icon}><GrFormPreviousLink /></span>
        </button>
        <p className={s.description}>Question {questionNumber + 1}/{tasks.length}</p>
        <button
          className={s.navigator}
          onClick={() => onNextBtnClick()}
        >
          <span className={s.icon}> <GrFormNextLink /></span>
        </button>
      </div>
      <p className={s.questionText}>{tasks[questionNumber].question}</p>
      <form className={s.form} onChange={() => setShowTip(false)} onSubmit={onFormSubmit}>
        <label htmlFor={tasks[questionNumber].variant1} className={s.label} >
          <input
            name="answer"
            type="radio"
            id={tasks[questionNumber].variant1}
            value={tasks[questionNumber].variant1}
          />
          <span className={s.variantText}>{tasks[questionNumber].variant1}</span>
        </label>
        <label htmlFor={tasks[questionNumber].variant2} className={s.label} >
          <input
            name="answer"
            type="radio"
            id={tasks[questionNumber].variant2}
            value={tasks[questionNumber].variant2}
          />
          <span className={s.variantText}>{tasks[questionNumber].variant2}</span>
        </label>
        <label htmlFor={tasks[questionNumber].variant3} className={s.label} >
          <input
            name="answer"
            type="radio"
            id={tasks[questionNumber].variant3}
            value={tasks[questionNumber].variant3}
          />
          <span className={s.variantText}>{tasks[questionNumber].variant3}</span>
        </label>
        <label htmlFor={tasks[questionNumber].variant4} className={s.label} >
          <input
            name="answer"
            type="radio"
            id={tasks[questionNumber].variant4}
            value={tasks[questionNumber].variant4}
          />
          <span className={s.variantText}>{tasks[questionNumber].variant4}</span>
        </label>
        <div className={s.submitBtnWrapper}>
          <button className={s.submitBtn} type='submit' >
            <p className={s.btnText}>{showTip ? 'Choose your answer' : 'Check'}</p> 
          </button>
        </div>
      </form>
      {showPlus && <h2 className={s.mark}><FcApproval /></h2>}
      {showMinus && <h2 className={s.mark}><FcCancel /></h2>}
      {showPopup && <SuccessPopup onClosePopup={onClosePopup} />}
    </div>
  );
};

export default Select
