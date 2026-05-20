import {Navbar} from "./components/Navbar.jsx";
import {Hero} from "./components/Hero.jsx";
import {Projects} from "./Projects.jsx";

function App() {
    const name = "Elouan Le Merle";

    const projects = [
        {
            id:0,
            title: "Mazespin",
            description:"A Race Game project in Godot with qte",
            image:"/image",
            link:"https://github.com/FiFolker/Mazespin",
        }
    ]

    return (
        <div className="bg-bg-gray min-h-screen w-full relative overflow-x-hidden">

            <div className="absolute top-0 left-0 w-full px-20 z-50 mt-4">
                <Navbar name={name} />
            </div>

            <Hero name={name}/>

            <Projects projects={projects} />

        </div>
    );
}

export default App;