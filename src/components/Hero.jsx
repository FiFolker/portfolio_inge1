import {Intro} from "./Intro.jsx";

export const Hero = ({name}) => {
    return (
        <div id="About" className="relative min-h-screen w-full flex items-center">
            <div className="pl-20 z-10 max-w-2xl">
                <Intro name={name} />
            </div>

        </div>
    );
};