import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ pages }) => {
  return (
    <button className={styles.loadMoreBtn} onClick={pages} type="button">
      Load more
    </button>
  );
};

export default LoadMoreBtn;
