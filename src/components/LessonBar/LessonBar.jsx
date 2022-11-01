import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { TbVocabulary } from 'react-icons/tb';
import { SlNotebook } from 'react-icons/sl';
import { BsBook } from 'react-icons/bs';
import { GiPublicSpeaker } from 'react-icons/gi';
import { BiTask } from 'react-icons/bi';
import s from "./LessonBar.module.css";

const LessonBar = () => {
  return (
      <nav className={s.navigation}>
        <ul className={s.list}>
          <li className={s.item}>
          <Link to="*"></Link>
          <NavLink to="vocabulary" className={({ isActive }) => (isActive ? s.active : s.inactive)}>
            <TbVocabulary />
            <p className={s.text}>vocabulary</p> 
          </NavLink>
          </li>
          <li className={s.item}>
          <NavLink to="grammar" className={({ isActive }) => (isActive ? s.active : s.inactive)}>
            <SlNotebook/>
            <p className={s.text}>grammar</p> 
          </NavLink>
          </li>
          <li className={s.item}>
          <NavLink to="reading" className={({ isActive }) => (isActive ? s.active : s.inactive)}>
            <BsBook/>
            <p className={s.text}>reading</p> 
          </NavLink>
          </li>
          <li className={s.item}>
          <NavLink to="speaking" className={({ isActive }) => (isActive ? s.active : s.inactive)}>
            <GiPublicSpeaker/>
            <p className={s.text}>speaking</p> 
          </NavLink>
          </li>
          <li className={s.item}>
          <NavLink to="practice" className={({ isActive }) => (isActive ? s.active : s.inactive)}>
            <BiTask/>
            <p className={s.text}>practice</p> 
          </NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default LessonBar