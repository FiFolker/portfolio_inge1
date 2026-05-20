import {Intro} from "./Intro.jsx";

export const Hero = ({name}) => {
    return (
        <div className="h-screen flex items-center justify-between w-[486px]">
            <Intro name={name} />
            
        </div>
    )
}