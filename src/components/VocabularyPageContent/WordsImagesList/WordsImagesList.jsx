import React from 'react';
import s from "./WordsImagesList.module.css";
import carrot from "../../../db/vocabularyImages/carrot.jpg"
import potato from "../../../db/vocabularyImages/potato.jpg"
import tomato from "../../../db/vocabularyImages/tomato.jpg"
import onion from "../../../db/vocabularyImages/onion.jpg"
import cabbage from "../../../db/vocabularyImages/cabbage.jpg"
import peas from "../../../db/vocabularyImages/peas.jpg"
import aubergine from "../../../db/vocabularyImages/aubergine.jpg"
import lettuce from "../../../db/vocabularyImages/lettuce.jpg"
import cucumber from "../../../db/vocabularyImages/cucumber.jpg"
import sweetcorn from "../../../db/vocabularyImages/sweetcorn.jpg"
import cauliflower from "../../../db/vocabularyImages/cauliflower.jpg"
import pepper from "../../../db/vocabularyImages/pepper.jpg"

const WordsImagesList = () => {
  return (
    <div>
      <ul className={s.list}>
        <li className={s.item}>
          <img src={carrot} alt="carrot" width='190' />
          <p className={s.text}>carrot</p>
        </li>

        <li className={s.item}>
          <img src={potato} alt="potato" width='190' />
          <p className={s.text}>potato</p>
        </li>
        
        <li className={s.item}>
          <img src={tomato} alt="tomato" width='190' />
          <p className={s.text}>tomato</p>
        </li>
        
        <li className={s.item}>
          <img src={onion} alt="onion" width='190' />
          <p className={s.text}>onion</p>
        </li>
        
        <li className={s.item}>
          <img src={cabbage} alt="cabbage" width='190' />
          <p className={s.text}>cabbage</p>
        </li>
        
        <li className={s.item}>
          <img src={peas} alt="peas" width='190' />
          <p className={s.text}>peas</p>
        </li>

        <li className={s.item}>
          <img src={aubergine} alt="aubergine" width='190' />
          <p className={s.text}>aubergine</p>
        </li>

        <li className={s.item}>
          <img src={lettuce} alt="lettuce" width='190' />
          <p className={s.text}>lettuce</p>
        </li>

        <li className={s.item}>
          <img src={cucumber} alt="cucumber" width='190' />
          <p className={s.text}>cucumber</p>
        </li>

        <li className={s.item}>
          <img src={sweetcorn} alt="sweetcorn" width='190' />
          <p className={s.text}>sweetcorn</p>
        </li>

        <li className={s.item}>
          <img src={cauliflower} alt="cauliflower" width='190' />
          <p className={s.text}>cauliflower</p>
        </li>
        
        <li className={s.item}>
          <img src={pepper} alt="pepper" width='190' />
          <p className={s.text}>pepper</p>
        </li>
      </ul>
    </div>
  );
};

export default WordsImagesList