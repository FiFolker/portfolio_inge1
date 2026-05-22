import {Intro} from "./Intro.jsx";

export const Hero = ({name}) => {
    return (
        <div id="About" className="relative md:w-full w-2/3 flex items-start sm:items-center pt-24 sm:pt-0 pb-8 sm:pb-0 min-h-[55vh] sm:min-h-screen">
            <div className="px-4 sm:px-10 md:px-20 z-10 max-w-xl sm:max-w-2xl mx-auto sm:mx-0">
                <Intro name={name} />
            </div>

        </div>
    );
};  