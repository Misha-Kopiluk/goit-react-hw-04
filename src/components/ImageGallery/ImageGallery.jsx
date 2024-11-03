import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ image, openModal }) => {
  return (
    <ul className={styles.gallery}>
      {image !== null &&
        image.map((img) => (
          <li className={styles.item} key={img.id}>
            <ImageCard img={img} openModal={openModal} />
          </li>
        ))}
    </ul>
  );
};

export default ImageGallery;
