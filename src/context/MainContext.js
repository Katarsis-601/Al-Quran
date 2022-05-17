import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
export const apiContext = createContext({
  empty: true,
});

export function ApiProvider({ children }) {
  const [data, setData] = useState([]);
  const [api, setApi] = useState("https://quran-endpoint.vercel.app");
  useEffect(() => {
    document.body.style.backgroundColor = "gray";
    const getAllSurah = async () => {
      await axios(api + "/quran").then((response) =>
        setData(response.data.data)
      );
    };
    getAllSurah();
  }, [api]);
  const value = {
    data,
    api,
    setApi,
  };
  return <apiContext.Provider value={value}>{children}</apiContext.Provider>;
}
