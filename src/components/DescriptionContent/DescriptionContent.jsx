import React from 'react';
import { Link } from "react-router-dom";
import s from "./DescriptionContent.module.css";

const DescriptionContent = () => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        <li className={s.item}>
          <Link to='vocabulary'>
            <h4 className={s.title}>Vocabulary block</h4>
            <p className={s.text}>Vocabulary exercises to help learn words for things you can see in a room (air-condition, carpet, ceiling, door, floor, heating, light, radiator, socket, switch, wall, window).</p>
          </Link>
        </li>
        <li className={s.item}>
          <Link to="grammar">
            <h4 className={s.title}>Grammar block</h4>
            <p className={s.text}>Past Simple. Verb (to be)</p>
          </Link>
        </li>
        <li className={s.item}>
          <Link to="reading">
            <h4 className={s.title}>Reading block</h4>
            <p className={s.text}>Poster at work</p>
          </Link>
        </li>
        <li className={s.item}>
          <Link to="speaking">
            <h4 className={s.title}>Speaking block</h4>
            <p className={s.text}>Meeting people</p>
          </Link>
        </li>
      </ul>
    </div>
  )
};

export default DescriptionContent