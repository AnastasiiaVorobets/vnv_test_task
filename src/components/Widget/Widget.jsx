import React, { useState } from 'react';
import './Widget.css';

function Widget() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="widget">
      <button className="widget-button" onClick={openModal}>
        CLICK HERE TO RECEIVE A SPECIAL OFFER
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className='offer'>
              <p>Congratulations!</p>
              <p>You have received a FREE consultation</p>
              <button
                className="close-modal"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Widget;
