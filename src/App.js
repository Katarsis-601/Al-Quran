import { useEffect, useState } from "react";
import axios from "axios";
import { CardLayout } from "./components/MainComponent";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    document.body.style.backgroundColor = "gray";
    const fetchApi = async () => {
      await axios("https://quran-api-id.vercel.app/surahs").then((response) =>
        setData(response.data)
      );
    };
    fetchApi();
    console.log(data);
  }, []);
  return (
    <div className="max-w-screen-2xl mx-auto">
      <h1 className="text-center flex justify-center content-center">
        Quran App
      </h1>
      <div className=" mt-20 py-8  flex flex-row flex-wrap justify-center">
        {data.map((data) => (
          <CardLayout key={data.number}>
            <div className="  flex flex-row flex-wrap justify-between">
              <h2>{data.number}</h2>
              <h2>{data.name}</h2>
            </div>{" "}
            <div className=" flex flex-row flex-wrap justify-between border-t-4">
              <h2>Jumlah Ayat : </h2>
              <h2>{data.numberOfAyahs}</h2>
            </div>
          </CardLayout>
        ))}
      </div>
    </div>
  );
}

export default App;
