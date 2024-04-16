import "./Modal.scss";

const Modal = ({ message }) => {
  return (
    <div className="modal">
      <div className="modal__body">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;
