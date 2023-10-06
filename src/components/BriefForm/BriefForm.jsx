import React, { useState } from 'react';
import './BriefForm.css';

function BriefForm() {
  const [briefVisible, setBriefVisible] = useState(false);
  const [briefText, setBriefText] = useState('');
  
  const handleBriefButtonClick = () => {
    setBriefVisible(true);
  };

  const handleBriefChange = (e) => {
    setBriefText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
    <h2 className='brief__title'>/ Brief form</h2>
    <div className="brief-form">
      {!briefVisible ? (
        <div>
            <div className='brief__description'>
              <div>
                <p>
                  A brief is a document that helps gather information from a client before starting a project or providing a service.
                </p>
                <p>
                  It helps to understand the needs and expectations of the customer in order to create the perfect product or service.
                </p>
              </div>
            <button onClick={handleBriefButtonClick}>Fill now</button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='input__field'>
            <textarea
              value={briefText}
              onChange={handleBriefChange}
              cols="50"
              placeholder="What would you like us to work on?"
            ></textarea>

            <textarea
              value={briefText}
              onChange={handleBriefChange}
              cols="50"
              placeholder="Client Information"
            ></textarea>

            <textarea
              value={briefText}
              onChange={handleBriefChange}
              cols="50"
              placeholder="What is your ideal timeframe?"
            ></textarea>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
    </>
  );
}

export default BriefForm;
