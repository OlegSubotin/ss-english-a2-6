import React from 'react';
import { NavLink } from "react-router-dom";
import s from "./AppBar.module.css";

const AppBar = () => {
  return (
    <nav className={s.navigation}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? s.active : s.inactive)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/lesson"
            className={({ isActive }) => (isActive ? s.active : s.inactive)}
          >
            Lesson
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppBar