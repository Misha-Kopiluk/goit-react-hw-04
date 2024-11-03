import Modal from "react-modal";
import ReactDOM from "react-dom";
import styles from "./ImageModal.module.css";

const ImageModal = ({ modalImg, modalIsOpen, closeModal }) => {
  Modal.setAppElement("#root");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={styles.container}>
          <img
            className={styles.imgModal}
            src={modalImg.urls.regular}
            alt={modalImg.alt_description}
          />
          <h1 className={styles.titel}>{modalImg.user.name}</h1>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
