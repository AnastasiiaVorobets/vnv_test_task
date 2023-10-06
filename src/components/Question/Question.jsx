import React, { useState } from 'react';
import './Question.css';
import fqa from '../../data/faqData';

function Question() {
  const [showMore, setShowMore] = useState(false);
  const initialCount = 3;

  const visibleQuestions = showMore ? fqa : fqa.slice(0, initialCount);

  return (
    <div className='question'>
      <h2 className='question__title'>FAQ</h2>
      <div className='question__block'>
        {visibleQuestions.map((qa) => (
          <div key={qa.id} className='question__item'>
            <h3 className='question__item-title'>/{qa.id} {qa.question}</h3>
            <p className='question__item-answer'>{qa.answer}</p>
          </div>
        ))}
      </div>
      {!showMore && (
        <button
          className='show-more-button'
          onClick={() => setShowMore(true)}
        >
          Show more
        </button>
      )}
    </div>
  );
}

export default Question;
