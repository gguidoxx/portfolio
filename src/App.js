import "./App.css";
import Aboutme from "./components/AboutMe/aboutme";
import Cards from "./components/CardsProyectos/Cards";
import Conocimientos from "./components/Conocimientos/Conocimientos";
import Contacto from "./components/Contacto/Contacto";
import Nav from "./components/Nav/Nav";

export default function App() {
  return (
    <div className="bg-slate-900 min-h-full w-full xsm:w-screen">
      <Nav />
      <div className="max-w-7xl xsm:ml-7 2xl:m-auto">
        <Aboutme />
        <Conocimientos />
        <Cards />
        <br></br>
        <Contacto />
      </div>
    </div>
  );
}
