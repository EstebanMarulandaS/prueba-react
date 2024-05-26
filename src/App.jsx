import "./App.scss";
import { Tarea } from "./components/Tarea/Tarea";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApiCall } from "./components/Api/ApiCall";
import { Home } from "./components/Home.jsx/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listaDeTareas" element={<Tarea />} />
        <Route path="/api" element={<ApiCall />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
