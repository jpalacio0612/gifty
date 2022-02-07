import React from "react";
import ListOfGifs from "../components/ListOfGifs";
import { useGifs } from "../hooks/useGifs";

const Home = () => {
  const { gifs } = useGifs({ url: "/trending?" });

  return (
    <div>
      <ListOfGifs gifs={gifs} />
    </div>
  );
};

export default Home;
