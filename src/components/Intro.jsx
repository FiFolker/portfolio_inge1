import {ButtonPrimary} from "./ButtonPrimary.jsx";
import {ButtonSecondary} from "./ButtonSecondary.jsx";

export const Intro = ({name}) => {
    return (
        <div className="flex flex-col space-y-4">
            <div className="text-brand-yellow font-nunito font-bold text-xl tracking-wider">UI/UX DESIGNER</div>
            <h2 className="text-font-high-emphasis font-playfair text-6xl font-bold leading-tight">
                Hello, my name is {name}
            </h2>
            <div className="text-font-low-emphasis font-nunito text-2xl leading-relaxed">
                Short text with details about you, what you do or your professional career. You can add more information on the about page.
            </div>
            <div className="space-x-4 pt-2">
                <ButtonPrimary label="Projects" onClick={() => window.location.href = "#Projects"} />
                <ButtonSecondary label="Linkedin" onClick={() => alert("Linkedin")} />
            </div>
        </div>
    );
};