import { Toaster, toast } from "react-hot-toast";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const fieldValue = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const inputValue = form.elements.text.value;

    if (inputValue === "") {
      toast("This field is empty, please fill it in.", {
        style: {
          color: "#ffffff",
          backgroundColor: "#e95c5c",
          border: "1px solid red",
        },
      });

      return;
    }

    onSubmit(inputValue);
    form.reset();
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={fieldValue}>
        <input
          className={styles.input}
          type="text"
          name="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster position="top-right" />
      </form>
    </header>
  );
};

export default SearchBar;
