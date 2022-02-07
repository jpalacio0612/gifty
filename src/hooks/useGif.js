import axios from "../lib/axios";
import { useEffect, useState } from "react";

export const useGif = ({ id }) => {
  const [gif, setGif] = useState([]);

  useEffect(() => {
    axios.get(`${id}`).then((res) => {
      setGif(res.data.data);
    });
  }, [id]);

  return { gif };
};
