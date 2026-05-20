import {Navbar} from "./components/Navbar.jsx";
import {Hero} from "./components/Hero.jsx";

function App() {
    const name = "Elouan Le Merle"

  return (
    <div className="bg-bg-gray">
        <Navbar name={name} />
        <Hero name={name}/>
    </div>
  )
}

export default App
