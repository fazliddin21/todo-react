import React from "react";
import "./modal.css";

export const Modal = ({ children, isOpen, close }) => {
  return isOpen ? (
    <div className="modal">
      <div className="modal_content">
        <button onClick={() => close(false)}>X</button>
        {children}
      </div>
    </div>
  ) : null;
};
