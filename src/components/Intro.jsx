import {ButtonPrimary} from "./ButtonPrimary.jsx";
import {ButtonSecondary} from "./ButtonSecondary.jsx";

export const Intro = ({name}) => {
    return (
        <div className="flex flex-col space-y-5 text-center sm:text-left">
            <div className="text-brand-yellow font-nunito font-bold text-xs sm:text-base md:text-xl tracking-[0.2em]">UI/UX DESIGNER</div>
            <h2 className="text-font-high-emphasis font-playfair text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Hello, my name is {name}
            </h2>
            <div className="text-font-low-emphasis font-nunito text-sm sm:text-lg md:text-2xl leading-relaxed">
                Short text with details about you, what you do or your professional career. You can add more information on the about page.
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 items-center sm:items-start">
                <ButtonPrimary label="Projects" onClick={() => window.location.href = "#Projects"} />
                <ButtonSecondary label="Linkedin" onClick={() => alert("Linkedin")} />
            </div>
        </div>
    );
};