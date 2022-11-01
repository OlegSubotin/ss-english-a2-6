import React, { useState }  from 'react';
import { ReactPainter } from 'react-painter';
import s from './Board.module.css';

const Board = () => {
  const [showBoard, setShowBoard] = useState(false);

  const onBtnClick = () => {
    setShowBoard(prevState => !prevState);
  }

  return (
    <>
      <button onClick={()=>onBtnClick()} className={s.button}>
        <p className={s.text}>{showBoard ? "Hide board" : "Show board"}</p> 
      </button>
      {showBoard && (
        <ReactPainter
          width={900}
          height={500}
          initialColor='#50A4FF'
          render={({ canvas, setColor }) => (
            <div className={s.wrapper}>
              <input className={s.input} type="color" value="#50A4FF" onChange={e => setColor(e.target.value)} />
              <div>{canvas}</div>
            </div>
          )}
        />
      )}
    </>
  );
};

export default Board



