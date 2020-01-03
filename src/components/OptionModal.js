import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.modalClose}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}
    <button className="button" onClick={props.modalClose}>
      Okay
    </button>
  </Modal>
);
export default OptionModal;

// Create a new event handle in IndecisionAPp that clears selectedOption state
// Pass that into OptionModal
// Call it on button click
