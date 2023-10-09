import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [contactMethod, setContactMethod] = useState('email');
  const [contactText, setContactText] = useState('');
  const [emailText, setEmailText] = useState('');
  const [telegramText, setTelegramText] = useState('');
  const [whatsappText, setWhatsappText] = useState('');
  const [viberText, setViberText] = useState('');

  const handleContactMethodChange = (event) => {
    setContactMethod(event.target.value);
    setContactText('');
  };

  const handleContactTextChange = (event) => {
    setContactText(event.target.value);
  };

  const handleEmailTextChange = (event) => {
    setEmailText(event.target.value);
  };

  const handleTelegramTextChange = (event) => {
    setTelegramText(event.target.value);
  };

  const handleWhatsappTextChange = (event) => {
    setWhatsappText(event.target.value);
  };

  const handleViberTextChange = (event) => {
    setViberText(event.target.value);
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
            required
          />

          <input
            type={contactMethod === 'email' ? 'email' : 'text'}
            value={
              contactMethod === 'email'
                ? emailText
                : contactMethod === 'telegram'
                ? telegramText
                : contactMethod === 'whatsapp'
                ? whatsappText
                : viberText
            }
            onChange={
              contactMethod === 'email'
                ? handleEmailTextChange
                : contactMethod === 'telegram'
                ? handleTelegramTextChange
                : contactMethod === 'whatsapp'
                ? handleWhatsappTextChange
                : handleViberTextChange
            }
            placeholder={getPlaceholder(contactMethod).input}
            required
          />
          <textarea
            value={contactText}
            placeholder="Message"
            onChange={handleContactTextChange}
          />
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
