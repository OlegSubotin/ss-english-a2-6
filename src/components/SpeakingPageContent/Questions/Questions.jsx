import React from 'react';
import s from "./Questions.module.css"

const YoutubeEmbed = () => (
  <div className={s.wrapper}>
    <ol className={s.list}>
      <li className={s.item}>
        <p className={s.text}>
          What does Sam want to buy?
        </p>
      </li>
      <li className={s.item}>
        <p className={s.text}>
          How much do they cost?
        </p>
      </li>
      <li className={s.item}>
        <p className={s.text}>
          What is Sam's size?
        </p>
      </li>
      <li className={s.item}>
        <p className={s.text}>
          What color of trainers does he prefer?
        </p>
      </li>
      <li className={s.item}>
        <p className={s.text}>
          Finally, did Sam buy the trainers?
        </p>
      </li>
    </ol>
  </div>
);

export default YoutubeEmbed