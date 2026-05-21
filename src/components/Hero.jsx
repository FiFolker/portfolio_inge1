import {Intro} from "./Intro.jsx";

export const Hero = ({name}) => {
    return (
        <div id="About" className="relative min-h-screen w-full flex items-center">
            <div className="pl-20 z-10 max-w-2xl">
                <Intro name={name} />
            </div>

            <div className="absolute top-0 right-0 h-full w-1/2 flex justify-end items-start pointer-events-none overflow-hidden">

                <div className="relative h-[85dvh] max-h-[800px] w-full max-w-[800px]">

                    <img
                        src="/assets/marlene.png"
                        alt=""
                        className="absolute top-0 right-0 w-full h-full object-contain object-right select-none"
                    />

                </div>
            </div>
        </div>
    );
};