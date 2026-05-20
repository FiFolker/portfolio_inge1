import {Navbar} from "./components/Navbar.jsx";
import {Hero} from "./components/Hero.jsx";

function App() {
    const name = "Elouan Le Merle";

    return (
        <div className="bg-bg-gray min-h-screen w-full relative overflow-x-hidden">

            <div className="absolute top-0 left-0 w-full px-20 z-50 mt-4">
                <Navbar name={name} />
            </div>

            <Hero name={name}/>
        </div>
    );
}

export default App;