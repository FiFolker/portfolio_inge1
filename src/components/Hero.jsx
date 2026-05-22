import {Intro} from "./Intro.jsx";

export const Hero = ({name}) => {
    return (
        <div id="About" className="relative w-full flex items-start sm:items-center pt-20 sm:pt-0 pb-6 sm:pb-0 min-h-[55vh] sm:min-h-screen">
            <div className="px-4 sm:px-10 md:px-20 z-10 max-w-2xl mx-auto">
                <Intro name={name} />
            </div>

        </div>
    );
};