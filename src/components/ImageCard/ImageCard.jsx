import styles from "./ImageCard.module.css";

const ImageCard = ({ img, openModal }) => {
  return (
    <div>
      <img
        className={styles.image}
        onClick={() => openModal(img)}
        src={img.urls.small}
        alt={img.alt_description}
      />
    </div>
  );
};

export default ImageCard;
