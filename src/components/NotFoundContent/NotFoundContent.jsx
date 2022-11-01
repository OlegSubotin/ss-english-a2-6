import React from 'react';
import { NavLink } from "react-router-dom";
import s from './NotFoundContent.module.css';

const NotFoundContent = () => {
  return (
    <section className={s.section}>
      <div className={s.bg}>
        <h1 className={s.title}>404... You are lost</h1>
        <NavLink to='/' className={s.link}>Go home</NavLink>
      </div>
    </section>
  )
};

export default NotFoundContent