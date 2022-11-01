import React, { useState, useEffect } from 'react';
import { FcApproval, FcCancel } from "react-icons/fc";
import SuccessPopup from 'components/SuccessPopup';
import { runFireworks } from '../../../lib/confetti';
import s from './Input.module.css';

const Input = ({ tasks }) => {
  const [inputValue, setInputValue] = useState({
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answer5: '',
    answer6: '',
    answer7: '',
    answer8: '',
    answer9: '',
    answer10: ''
  });
  const [correctAnswer] = useState({
    correctAnswer1: tasks[0].correct,
    correctAnswer2: tasks[1].correct,
    correctAnswer3: tasks[2].correct,
    correctAnswer4: tasks[3].correct,
    correctAnswer5: tasks[4].correct,
    correctAnswer6: tasks[5].correct,
    correctAnswer7: tasks[6].correct,
    correctAnswer8: tasks[7].correct,
    correctAnswer9: tasks[8].correct,
    correctAnswer10: tasks[9].correct,
  });
  const [result, setResult] = useState({
    result1: false,
    result2: false,
    result3: false,
    result4: false,
    result5: false,
    result6: false,
    result7: false,
    result8: false,
    result9: false,
    result10: false,
  });
  const [showResult, setShowResult] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const {
    answer1,
    answer2,
    answer3,
    answer4,
    answer5,
    answer6,
    answer7,
    answer8,
    answer9,
    answer10
  } = inputValue;

  const {
    correctAnswer1,
    correctAnswer2,
    correctAnswer3,
    correctAnswer4,
    correctAnswer5,
    correctAnswer6,
    correctAnswer7,
    correctAnswer8,
    correctAnswer9,
    correctAnswer10
  } = correctAnswer;

  const {
    result1,
    result2,
    result3,
    result4,
    result5,
    result6,
    result7,
    result8,
    result9,
    result10
  } = result;
  
  useEffect(() => {
    if (
      result1 && result2 && result3 && result4 && result5
      && result6 && result7 && result8 && result9 && result10
    ) {
      runFireworks();
      setShowPopup(true);
    }
  }, [result1, result2, result3, result4, result5
    , result6, result7, result8, result9, result10]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onCheckBtnClick = () => {
    if (answer1.trim() === correctAnswer1.trim()) {
      setResult(prev => ({
        ...prev,
        result1: true
      }));
    } else {
      setResult(prev => ({
        ...prev,
        result1: false
      }));
    }
    if (answer2.trim() === correctAnswer2.trim()) {
      setResult(prev => ({
        ...prev,
        result2: true
      }));
    } else {
      setResult(prev => ({
        ...prev,
        result2: false
      }));
    }
    if (answer3.trim() === correctAnswer3.trim()) {
      setResult(prev => ({
        ...prev,
        result3: true
      }));
    } else {
      setResult(prev => ({
        ...prev,
        result3: false
      }));
    }
    if (answer4.trim() === correctAnswer4.trim()) {
      setResult(prev => ({
        ...prev,
        result4: true
      }));
    } else {
      setResult(prev => ({
        ...prev,
        result4: false
      }));
    }
    if (answer5.trim() === correctAnswer5.trim()) {
      setResult(prev => ({
        ...prev,
        result5: true
      }));
    } else {
      setResult(prev => ({
        ...prev,
        result5: false
      }));
    }
    if (answer6.trim() === correctAnswer6.trim()) {
      setResult(prev => ({
        ...prev,
        result6: true
      }));
    } else {
      setResult(prev => ({
        ...prev,
        result6: false
      }));
    }
    if (answer7.trim() === correctAnswer7.trim()) {
      setResult(prev => ({
        ...prev,
        result7: true
      }));
    } else {
      setResult(prev => ({
        ...prev,
        result7: false
      }));
    }
    if (answer8.trim() === correctAnswer8.trim()) {
      setResult(prev => ({
        ...prev,
        result8: true
      }));
    } else {
      setResult(prev => ({
        ...prev,
        result8: false
      }));
    }
    if (answer9.trim() === correctAnswer9.trim()) {
      setResult(prev => ({
        ...prev,
        result9: true
      }));
    } else {
      setResult(prev => ({
        ...prev,
        result9: false
      }));
    }
    if (answer10.trim() === correctAnswer10.trim()) {
      setResult(prev => ({
        ...prev,
        result10: true
      }));
    } else {
      setResult(prev => ({
        ...prev,
        result10: false
      }));
    }
    setShowResult(true);
    console.log( result1 , result2 , result3 , result4 , result5
      , result6 , result7 , result8 , result9 , result10);
    
  }

  const onClosePopup = () => {
    setShowPopup(false);
  }

  const onShowAnswersClick = () => {
    setInputValue(prev => ({
      ...prev,
      answer1: correctAnswer1
    }));
    setInputValue(prev => ({
      ...prev,
      answer2: correctAnswer2
    }));
    setInputValue(prev => ({
      ...prev,
      answer3: correctAnswer3
    }));
    setInputValue(prev => ({
      ...prev,
      answer4: correctAnswer4
    }));
    setInputValue(prev => ({
      ...prev,
      answer5: correctAnswer5
    }));
    setInputValue(prev => ({
      ...prev,
      answer6: correctAnswer6
    }));
    setInputValue(prev => ({
      ...prev,
      answer7: correctAnswer7
    }));
    setInputValue(prev => ({
      ...prev,
      answer8: correctAnswer8
    }));
    setInputValue(prev => ({
      ...prev,
      answer9: correctAnswer9
    }));
    setInputValue(prev => ({
      ...prev,
      answer10: correctAnswer10
    }));
  };

  return (
    <div className={s.wrapper}>
      {tasks && (
        <ol className={s.list}>
          <li className={s.item} key={tasks[0].id}>
            <p className={s.text}>
              {tasks[0].part1} &nbsp;
              <input
                type='text'
                value={answer1}
                name="answer1"
                className={s.input}
                onChange={handleChange}
              />
              &nbsp;
              {tasks[0].part2}
              &nbsp;
              {showResult &&
                (result1
                  ? <span className={s.mark}><FcApproval /></span>
                  : <span className={s.mark}><FcCancel /></span>
                )}
            </p>
          </li>
          
          <li className={s.item} key={tasks[1].id}>
            <p className={s.text}>
              {tasks[1].part1} &nbsp;
              <input
                type='text'
                value={answer2}
                name="answer2"
                id={tasks[1].correct}
                className={s.input}
                onChange={handleChange}
              />
              &nbsp;
              {tasks[1].part2}
              &nbsp;
              {showResult && (result2
                ? <span className={s.mark}><FcApproval /></span>
                : <span className={s.mark}><FcCancel /></span>)}
            </p>
          </li>
          
          <li className={s.item} key={tasks[2].id}>
            <p className={s.text}>
              {tasks[2].part1} &nbsp;
              <input
                type='text'
                value={answer3}
                name="answer3"
                id={tasks[2].correct}
                className={s.input}
                onChange={handleChange}
              />
              &nbsp;
              {tasks[2].part2}
              &nbsp;
              {showResult && (result3
                ? <span className={s.mark}><FcApproval /></span>
                : <span className={s.mark}><FcCancel /></span>)}
            </p>
          </li>
          
          <li className={s.item} key={tasks[3].id}>
            <p className={s.text}>
              {tasks[3].part1} &nbsp;
              <input
                type='text'
                value={answer4}
                name="answer4"
                id={tasks[3].correct}
                className={s.input}
                onChange={handleChange}
              />
              &nbsp;
              {tasks[3].part2}
              &nbsp;
              {showResult && (result4
                ? <span className={s.mark}><FcApproval /></span>
                : <span className={s.mark}><FcCancel /></span>)}
            </p>
          </li>
          
          <li className={s.item} key={tasks[4].id}>
            <p className={s.text}>
              {tasks[4].part1} &nbsp;
              <input
                type='text'
                value={answer5}
                name="answer5"
                id={tasks[4].correct}
                className={s.input}
                onChange={handleChange}
              />
              &nbsp;
              {tasks[4].part2}
              &nbsp;
              {showResult && (result5
                ? <span className={s.mark}><FcApproval /></span>
                : <span className={s.mark}><FcCancel /></span>)}
            </p>
          </li>
          
          <li className={s.item} key={tasks[5].id}>
            <p className={s.text}>
              {tasks[5].part1} &nbsp;
              <input
                type='text'
                value={answer6}
                name="answer6"
                id={tasks[5].correct}
                className={s.input}
                onChange={handleChange}
              />
              &nbsp;
              {tasks[5].part2}
              &nbsp;
              {showResult && (result6
                ? <span className={s.mark}><FcApproval /></span>
                : <span className={s.mark}><FcCancel /></span>)}
            </p>
          </li>
          
          <li className={s.item} key={tasks[6].id}>
            <p className={s.text}>
              {tasks[6].part1} &nbsp;
              <input
                type='text'
                value={answer7}
                name="answer7"
                id={tasks[6].correct}
                className={s.input}
                onChange={handleChange}
              />
              &nbsp;
              {tasks[6].part2}
              &nbsp;
              {showResult && (result7
                ? <span className={s.mark}><FcApproval /></span>
                : <span className={s.mark}><FcCancel /></span>)}
            </p>
          </li>
          
          <li className={s.item} key={tasks[7].id}>
            <p className={s.text}>
              {tasks[7].part1} &nbsp;
              <input
                type='text'
                value={answer8}
                name="answer8"
                id={tasks[7].correct}
                className={s.input}
                onChange={handleChange}
              />
              &nbsp;
              {tasks[7].part2}
              &nbsp;
              {showResult && (result8
                ? <span className={s.mark}><FcApproval /></span>
                : <span className={s.mark}><FcCancel /></span>)}
            </p>
          </li>
          
          <li className={s.item} key={tasks[8].id}>
            <p className={s.text}>
              {tasks[8].part1} &nbsp;
              <input
                type='text'
                value={answer9}
                name="answer9"
                id={tasks[8].correct}
                className={s.input}
                onChange={handleChange}
              />
              &nbsp;
              {tasks[8].part2}
              &nbsp;
              {showResult && (result9
                ? <span className={s.mark}><FcApproval /></span>
                : <span className={s.mark}><FcCancel /></span>)}
            </p>
          </li>
          
          <li className={s.item} key={tasks[9].id}>
            <p className={s.text}>
              {tasks[9].part1} &nbsp;
              <input
                type='text'
                value={answer10}
                name="answer10"
                id={tasks[9].correct}
                className={s.input}
                onChange={handleChange}
              />
              &nbsp;
              {tasks[9].part2}
              &nbsp;
              {showResult && (result10
                ? <span className={s.mark}><FcApproval /></span>
                : <span className={s.mark}><FcCancel /></span>)}
            </p>
          </li>
          {showPopup && <SuccessPopup onClosePopup={onClosePopup} />}
        </ol>
      )}
      <div className={s.btnWrapper}>
        <button type='button' className={s.controlBtn} onClick={onCheckBtnClick}>
          <p className={s.btnText}>Check</p>
        </button>
        <button type='button' className={s.controlBtn} onClick={onShowAnswersClick}>
          <p className={s.btnText}>Show correct answers</p>
        </button>
      </div>      
    </div>
  );
};

export default Input
