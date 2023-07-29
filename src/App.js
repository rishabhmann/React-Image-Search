import "./styles.css";

import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import { useState } from "react";

export default function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const listOfImages = await searchImages(term);

    setImages(listOfImages);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
