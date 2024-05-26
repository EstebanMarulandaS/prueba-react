import { Link } from "react-router-dom";
import "./home.scss";

export function Home() {
  return (
    <div className="home">
      <div className="btnDiv">
        <h1 className="homeh1">Bienvenido a la prueba de React</h1>

        <button className="homeBtn">
          <Link to="/listaDeTareas">Mostrar lista de tareas</Link>
        </button>
        <button className="homeBtn">
          <Link to="/api">Mostrar llamado a la APIs</Link>
        </button>
      </div>
    </div>
  );
}
