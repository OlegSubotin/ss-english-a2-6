import React from 'react';
import s from './Task.module.css';

const Task = ({ accentText, text }) => {
  return (
    <p className={s.text}>
      {accentText && <span className={s.accent}>{accentText}:</span>}
      &nbsp;
      {text}
    </p>
  )
};

export default Task