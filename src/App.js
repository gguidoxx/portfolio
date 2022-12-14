import { Toaster } from "react-hot-toast";
import "./App.css";
import Aboutme from "./components/AboutMe/aboutme";
import Cards from "./components/CardsProyectos/Cards";
import Conocimientos from "./components/Conocimientos/Conocimientos";
import Contacto from "./components/Contacto/Contacto";
import Nav from "./components/Nav/Nav";

export default function App() {
  return (
    <div className="min-h-full m-auto bg-slate-900 max-w-7xl">
      <Nav className=""/>
      <div className="m-auto">
        <Aboutme />
        <Conocimientos/>
        <Cards />
        <br></br>
        <Contacto />
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}
