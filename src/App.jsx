import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [image, setImage] = useState(null);
  const [modalImg, setModalImg] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [isTotalPages, setIsTotalPages] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (searchValue === null) return;

    const fetchImageBySearchValue = async () => {
      try {
        setLoader(true);
        const param = {
          params: {
            query: searchValue,
            orientation: "portrait",
            page: page,
            per_page: 15,
            client_id: "359vDlC2T5vUIuHFri9HxPKVRCptfDUzd2peYalhz1I",
          },
        };

        const { data } = await axios.get(
          `https://api.unsplash.com/search/photos`,
          param
        );

        const date = data.results;
        setImage(image ? [...image, ...date] : date);
        setIsTotalPages(data.total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };

    fetchImageBySearchValue();
  }, [searchValue, page]);

  const onSubmit = (value) => {
    setSearchValue(value);
    setPage(1);
  };

  const openModal = (img) => {
    setIsOpen(true);
    setModalImg(img);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery image={image} openModal={openModal} />
      {modalImg && (
        <ImageModal
          modalImg={modalImg}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      )}
      {page <= isTotalPages && (
        <LoadMoreBtn
          pages={() => {
            setPage(page + 1);
          }}
        />
      )}
    </div>
  );
}

export default App;
