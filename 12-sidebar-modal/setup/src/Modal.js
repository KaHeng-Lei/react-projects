import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className={isModalOpen ? `modal-overlay show-modal` : `modal-overlay`}>
      <div className="modal-container">
        <h3>Modal Content</h3>
        <div className="close-modal-btn">
          <FaTimes onClick={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
