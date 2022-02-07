import React from "react";
import Masonry from "react-masonry-css";
import { useNavigate } from "react-router-dom";
import "./ListOfGifs.css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const ListOfGifs = ({ gifs }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {gifs.map((gif) => {
        return (
          <img
            key={gif.id}
            className="gif"
            src={gif.images.original.webp}
            alt=""
            onClick={() => handleClick(gif.id)}
          />
        );
      })}
    </Masonry>
  );
};

export default ListOfGifs;
