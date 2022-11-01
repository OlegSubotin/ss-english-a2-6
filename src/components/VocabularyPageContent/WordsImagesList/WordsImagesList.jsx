import React from 'react';
import s from "./WordsImagesList.module.css";
import cloud from "../../../db/vocabularyImages/cloud.jpg"
import cold from "../../../db/vocabularyImages/cold.jpg"
import dry from "../../../db/vocabularyImages/dry.jpg"
import fog from "../../../db/vocabularyImages/fog.jpg"
import hot from "../../../db/vocabularyImages/hot.jpg"
import rain from "../../../db/vocabularyImages/rain.jpg"
import snow from "../../../db/vocabularyImages/snow.jpg"
import storm from "../../../db/vocabularyImages/storm.jpg"
import sun from "../../../db/vocabularyImages/sun.jpg"
import warm from "../../../db/vocabularyImages/warm.jpg"
import wet from "../../../db/vocabularyImages/wet.jpg"
import wind from "../../../db/vocabularyImages/wind.jpg"

const WordsImagesList = () => {
  return (
    <div>
      <ul className={s.list}>
        <li className={s.item}>
          <img src={cloud} alt="cloud" width='190' />
          <p className={s.text}>cloud</p>
        </li>

        <li className={s.item}>
          <img src={cold} alt="cold" width='190' />
          <p className={s.text}>cold</p>
        </li>
        
        <li className={s.item}>
          <img src={dry} alt="dry" width='190' />
          <p className={s.text}>dry</p>
        </li>
        
        <li className={s.item}>
          <img src={fog} alt="fog" width='190' />
          <p className={s.text}>fog</p>
        </li>
        
        <li className={s.item}>
          <img src={hot} alt="hot" width='190' />
          <p className={s.text}>hot</p>
        </li>
        
        <li className={s.item}>
          <img src={rain} alt="rain" width='190' />
          <p className={s.text}>rain</p>
        </li>

        <li className={s.item}>
          <img src={snow} alt="snow" width='190' />
          <p className={s.text}>snow</p>
        </li>

        <li className={s.item}>
          <img src={storm} alt="storm" width='190' />
          <p className={s.text}>storm</p>
        </li>

        <li className={s.item}>
          <img src={sun} alt="sun" width='190' />
          <p className={s.text}>sun</p>
        </li>

        <li className={s.item}>
          <img src={warm} alt="warm" width='190' />
          <p className={s.text}>warm</p>
        </li>

        <li className={s.item}>
          <img src={wet} alt="wet" width='190' />
          <p className={s.text}>wet</p>
        </li>
        
        <li className={s.item}>
          <img src={wind} alt="wind" width='190' />
          <p className={s.text}>wind</p>
        </li>
      </ul>
    </div>
  );
};

export default WordsImagesList