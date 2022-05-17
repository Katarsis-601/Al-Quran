import { CardLayout } from "../components/MainComponent";
import Header from "../components/Header";
import { useContext } from "react";
import { apiContext } from "../context/MainContext";
export default function Home() {
  const value = useContext(apiContext);
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <Header />
      <div className="  py-8  flex flex-row flex-wrap justify-center">
        {value.data.map((data) => (
          <CardLayout key={data.number} goDetail={data.number}>
            <div className="  flex flex-row flex-wrap justify-between">
              <h1>{data.asma.id.short}</h1>
              <h1>{data.asma.ar.short}</h1>
            </div>{" "}
          </CardLayout>
        ))}
      </div>
    </div>
  );
}
