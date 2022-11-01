import React from 'react';
import s from "./Questions.module.css"

const YoutubeEmbed = () => (
  <div className={s.wrapper}>
    <ol className={s.list}>
      <li className={s.item}>
        <p className={s.text}>
          It's Makayla's first day at a new school?
        </p>
      </li>
      <li className={s.item}>
        <p className={s.text}>
          Does Makayla know a lot of people at the school?
        </p>
      </li>
      <li className={s.item}>
        <p className={s.text}>
          Is Gemma rude and helpless?
        </p>
      </li>
      <li className={s.item}>
        <p className={s.text}>
          How old are the girls?
        </p>
      </li>
      <li className={s.item}>
        <p className={s.text}>
          How will Gemma help Makayla?
        </p>
      </li>
    </ol>
  </div>
);

export default YoutubeEmbed