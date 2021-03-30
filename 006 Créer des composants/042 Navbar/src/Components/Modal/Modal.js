import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>Hello Modale</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis totam aut saepe quidem dolorum placeat velit fugit sed
                aperiam. Doloribus impedit repudiandae saepe commodi corrupti
                nobis id odit expedita quia! Quaerat magnam similique
                repudiandae accusamus tempora aliquid molestias minima nobis a
                aut ab magni ut saepe quis recusandae, reiciendis aperiam!
              </p>
              <button onClick={toggleModal} className="close-modal">
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
