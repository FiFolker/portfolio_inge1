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
            image:"/assets/mazespin.png",
            link:"https://github.com/FiFolker/Mazespin",
        },
        {
            id:1,
            title: "Mini Rogue",
            description:"A roguelike video game written in Java and heavily inspired by the board game of the same name (it could be considered an adaptation as long as I don't change any features or mechanics)",
            image:"/assets/minirogue.png",
            link:"https://github.com/FiFolker/MiniRogue",
        },
        {
            id:2,
            title: "Rogue Like Shooter",
            description:"Development of a prototype of a 3D rogue-like shooter (like Enter the Gungeon but in 3D). This includes the idea of also testing with the self-learning agents I sent before (the idea of having these artificial agents if to have them play and analyze the difficulty, because the levels should be later generated procedurally)",
            image:"/assets/roguelike.png",
            link:"https://github.com/FiFolker/Rogue-like-Shooter",
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