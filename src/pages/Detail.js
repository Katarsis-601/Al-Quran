import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "../components/MainComponent";
import { apiContext } from "../context/MainContext";
export default function Detail() {
  const value = useContext(apiContext);
  const params = useParams();

  const [asmaId, setAsmaId] = useState("");
  const [audio, setAudio] = useState({});
  const [ayah, setAyah] = useState([]);
  useEffect(() => {
    const getSurah = async () => {
      await axios(value.api + "/quran/" + params.surah).then((response) => {
        setAsmaId(response.data.data.asma.id.short);
        setAudio(response.data.data.recitation.full);
        setAyah(response.data.data.ayahs);
      });
    };
    getSurah();
  }, []);
  return (
    <div className="flex justify-center">
      <div className=" w-4/5 bg-white items-center flex-wrap justify-center">
        <BackButton />
        <h2 className="text-center mt-2">{asmaId}</h2>
        <div className="flex m-6 flex-col">
          <h3>Audio : </h3>
          <audio></audio>
          <h3>Ayat : </h3>
          <div className="flex flex-col ">
            {ayah.map((data) => (
              <ul key={data.number.inquran}>
                <p className="mt-4 text-right">{data.text.ar}</p>
                <p className="mt-4 text-left pb-2 text-gray-600 text-xs border-b-2">
                  {data.text.read}
                </p>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
