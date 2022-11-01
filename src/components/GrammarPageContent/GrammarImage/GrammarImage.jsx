import React from 'react';
import RuleOne from "../../../db/GrammarImages/rule-1.jpg";
import s from './GrammarImage.module.css';

const GrammarImage = () => {
  return (
    <div className={s.wrapper}>
      <img className={s.image} src={RuleOne} alt="rule" width='370' />
    </div>
  )
}

export default GrammarImage