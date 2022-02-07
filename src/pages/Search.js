import { useState } from "react";
import { useParams } from "react-router-dom";
import ListOfGifs from "../components/ListOfGifs";
import { useGifs } from "../hooks/useGifs";

const Search = () => {
  const [page, setPages] = useState(0);
  const { query } = useParams();
  const { gifs } = useGifs({
    url: `/search?q=${query}`,
    page,
  });

  const handleLoadMore = () => {
    setPages(page + 1);
  };

  return (
    <div>
      <ListOfGifs gifs={gifs} />
      <buton onClick={handleLoadMore} className="btn-more">
        Cargar más...
      </buton>
    </div>
  );
};

export default Search;
