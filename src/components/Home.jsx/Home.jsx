import "./home.scss";
export const Home = () => {
  return (
    <div>
      <h1>Bienvenido a la prueba tecnica de React</h1>

      <div className="btnDiv">
        <button className="homeBtn">Mostrar lista de tareas</button>
        <button className="homeBtn">Mostrar llamado a la APIs</button>
      </div>
    </div>
  );
};
