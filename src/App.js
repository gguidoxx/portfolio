import "./App.css";
import Aboutme from "./components/AboutMe/aboutme";
import Cards from "./components/CardsProyectos/Cards";
import Conocimientos from "./components/Conocimientos/Conocimientos";
import Contacto from "./components/Contacto/Contacto";
import Nav from "./components/Nav/Nav";

export default function App() {
  return (
    <div className="min-h-full bg-slate-900">
      <Nav />
      <div className=" 2xl:m-auto">
        <Aboutme />
        <Conocimientos />
        <Cards />
        <br></br>
        <Contacto />
      </div>
    </div>
  );
}
