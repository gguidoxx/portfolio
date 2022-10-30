import "./App.css";
import Aboutme from "./components/AboutMe/aboutme";
import Cards from "./components/CardsProyectos/Cards";
import Conocimientos from "./components/Conocimientos/Conocimientos";
import Contacto from "./components/Contacto/Contacto";
import Nav from "./components/Nav/Nav";

export default function App() {
  return (
    <div className="max-w-md min-h-full bg-slate-900">
      <Nav />
      <div className=" 2xl:m-auto">
        <Aboutme className="w-screen" />
        <Conocimientos className="w-screen" />
        <Cards className="w-screen" />
        <br></br>
        <Contacto className="w-screen" />
      </div>
    </div>
  );
}
