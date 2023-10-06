import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [contactMethod, setContactMethod] = useState('email');
  const [contactText, setContactText] = useState('');

  const handleContactMethodChange = (event) => {
    setContactMethod(event.target.value);
  };

  const handleContactTextChange = (event) => {
    setContactText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  function getPlaceholder(contactMethod) {
    switch (contactMethod) {
      case 'email':
        return {
          input: 'Your Email',
        };
      case 'telegram':
        return {
          input: 'Your nickname in Telegram',
        };
      case 'whatsapp':
        return {
          input: 'Your number in WhatsApp',
        };
      case 'viber':
        return {
          input: 'Your number in Viber',
        };
      default:
        return {
          input: 'Your number',
        };
    }
  }

  return (
    <section className="contact">
      <h2 className='contact__title'>/ Contact Us</h2>
      <div className="contact-methods">
        <label>
          <input
            type="radio"
            value="email"
            checked={contactMethod === 'email'}
            onChange={handleContactMethodChange}
          />
          E-mail
        </label>
        <label>
          <input
            type="radio"
            value="telegram"
            checked={contactMethod === 'telegram'}
            onChange={handleContactMethodChange}
          />
          Telegram
        </label>
        <label>
          <input
            type="radio"
            value="whatsapp"
            checked={contactMethod === 'whatsapp'}
            onChange={handleContactMethodChange}
          />
          WhatsApp
        </label>
        <label>
          <input
            type="radio"
            value="viber"
            checked={contactMethod === 'viber'}
            onChange={handleContactMethodChange}
          />
          Viber
        </label>
      </div>
      <div className='input-field'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
          />

          <input
            type={contactMethod === 'email' ? 'email' : 'text'}
            value={contactText}
            onChange={handleContactTextChange}
            placeholder={getPlaceholder(contactMethod).input}
          />
          <textarea
            value={contactText}
            placeholder="Message"
            onChange={handleContactTextChange}>
          </textarea>
          <button
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
