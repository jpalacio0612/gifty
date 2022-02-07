import axios from "../lib/axios";
import { useEffect, useState } from "react";

export const useGifs = ({ url, page }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    axios.get(`${url}&offset=${page * 25}&limit=25`).then((res) => {
      setGifs((prevGifs) => [...prevGifs, ...res.data.data]);
    });
  }, [url, page]);

  return { gifs };
};
