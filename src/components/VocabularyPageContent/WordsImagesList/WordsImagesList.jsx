import React from 'react';
import s from "./WordsImagesList.module.css";
import aircondition from "../../../db/vocabularyImages/aircondition.jpg"
import carpet from "../../../db/vocabularyImages/carpet.jpg"
import ceiling from "../../../db/vocabularyImages/ceiling.jpg"
import door from "../../../db/vocabularyImages/door.jpg"
import floor from "../../../db/vocabularyImages/floor.jpg"
import heating from "../../../db/vocabularyImages/heating.jpg"
import light from "../../../db/vocabularyImages/light.jpg"
import radiator from "../../../db/vocabularyImages/radiator.jpg"
import socket from "../../../db/vocabularyImages/socket.jpg"
import switchEl from "../../../db/vocabularyImages/switch.jpg"
import wall from "../../../db/vocabularyImages/wall.jpg"
import window from "../../../db/vocabularyImages/window.jpg"

const WordsImagesList = () => {
  return (
    <div>
      <ul className={s.list}>
        <li className={s.item}>
          <img src={aircondition} alt="air-condition" width='190' />
          <p className={s.text}>air-condition</p>
        </li>

        <li className={s.item}>
          <img src={carpet} alt="carpet" width='190' />
          <p className={s.text}>carpet</p>
        </li>
        
        <li className={s.item}>
          <img src={ceiling} alt="ceiling" width='190' />
          <p className={s.text}>ceiling</p>
        </li>
        
        <li className={s.item}>
          <img src={door} alt="door" width='190' />
          <p className={s.text}>door</p>
        </li>
        
        <li className={s.item}>
          <img src={floor} alt="floor" width='190' />
          <p className={s.text}>floor</p>
        </li>
        
        <li className={s.item}>
          <img src={heating} alt="heating" width='190' />
          <p className={s.text}>heating</p>
        </li>

        <li className={s.item}>
          <img src={light} alt="light" width='190' />
          <p className={s.text}>light</p>
        </li>

        <li className={s.item}>
          <img src={radiator} alt="radiator" width='190' />
          <p className={s.text}>radiator</p>
        </li>

        <li className={s.item}>
          <img src={socket} alt="socket" width='190' />
          <p className={s.text}>socket</p>
        </li>

        <li className={s.item}>
          <img src={switchEl} alt="switch" width='190' />
          <p className={s.text}>switch</p>
        </li>

        <li className={s.item}>
          <img src={wall} alt="wall" width='190' />
          <p className={s.text}>wall</p>
        </li>
        
        <li className={s.item}>
          <img src={window} alt="window" width='190' />
          <p className={s.text}>window</p>
        </li>
      </ul>
    </div>
  );
};

export default WordsImagesList