import React from 'react';
import Poster from '../../../db/ReadingImages/poster.jpg'
import s from './Text.module.css';

const Task = ({ text, title }) => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>{title}</h1>
       <img className={s.image} src={Poster} alt="poster" width='370' />
      <p className={s.text}>{text}</p>
    </div>
  )
};

export default Task