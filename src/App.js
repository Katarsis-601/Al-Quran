import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { ApiProvider } from "./context/MainContext";
function App() {
  return (
    <ApiProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:surah" element={<Detail />} />
      </Routes>
    </ApiProvider>
  );
}

export default App;
