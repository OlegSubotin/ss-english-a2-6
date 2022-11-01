import React from 'react';
import s from "./LessonPageWrapper.module.css";

const Container = ({children}) => {
  return (
    <div className={s.wrapper}>
      {children}
    </div>
  );
};

export default Container