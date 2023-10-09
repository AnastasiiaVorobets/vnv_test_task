import React, { useState } from 'react';
import './BriefForm.css';

function BriefForm() {
  const [briefVisible, setBriefVisible] = useState(false);
  const [briefText, setBriefText] = useState('');
  const [clientInfoText, setClientInfoText] = useState('');
  const [timeframeText, setTimeframeText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleBriefButtonClick = () => {
    setBriefVisible(true);
    setSubmitted(false);
  };

  const handleBriefClose = () => {
    setBriefVisible(false);
    setSubmitted(false);
  };

  const handleBriefChange = (e) => {
    setBriefText(e.target.value);
  };

  const handleClientInfoChange = (e) => {
    setClientInfoText(e.target.value);
  };

  const handleTimeframeChange = (e) => {
    setTimeframeText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Очищення полів форми
    setBriefText('');
    setClientInfoText('');
    setTimeframeText('');
  };

  return (
    <>
      <h2 className='brief__title'>/ Brief form</h2>
      <div className="brief-form">
        {!briefVisible ? (
          <div className='brief-form-container'>
            <div className='brief__description'>
              <div>
                <p>
                  A brief is a document that helps gather information <br />from a client before starting a project or providing a service.
                </p>
                <p>
                  It helps to understand the needs and expectations of <br />the customer in order to create the perfect product or service.
                </p>
              </div>
              <button onClick={handleBriefButtonClick}>Fill now</button>
            </div>
          </div>
        ) : (
          <div>
            {submitted ? (
              <div>
                <p  className="submitted-message">Thank you!</p>
                <button onClick={handleBriefClose}>Back</button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className='input__field'
              >
                <textarea
                  value={briefText}
                  onChange={handleBriefChange}
                  cols="50"
                  placeholder="What would you like us to work on?"
                  required
                ></textarea>

                <textarea
                  value={clientInfoText}
                  onChange={handleClientInfoChange}
                  cols="50"
                  placeholder="Client Information"
                  required
                ></textarea>

                <textarea
                  value={timeframeText}
                  onChange={handleTimeframeChange}
                  cols="50"
                  placeholder="What is your ideal timeframe?"
                  required
                ></textarea>
                <button type="submit">Send</button>
              </form>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default BriefForm;
