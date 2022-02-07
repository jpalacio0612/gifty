import React from "react";
import { useParams } from "react-router-dom";
import { useGif } from "../hooks/useGif";

const Detail = () => {
  const { id } = useParams();
  const { gif } = useGif({ id });

  return (
    <div>
      <img style={{ width: "100%" }} src={gif?.images?.original?.url} alt="" />
    </div>
  );
};

export default Detail;
