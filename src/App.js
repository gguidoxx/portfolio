import "./App.css";
import Aboutme from "./components/AboutMe/aboutme";
import Cards from "./components/CardsProyectos/Cards";
import Nav from "./components/Nav/Nav";

export default function App() {
  return (
    <div className="bg-slate-900 min-h-screen w-full ">
      <Nav/>
      <div className="max-w-7xl m-auto">
        <Aboutme />
        <Cards />
      </div>
    </div>
  );
}
