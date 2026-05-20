import {ButtonPrimary} from "./ButtonPrimary.jsx";
import {ButtonSecondary} from "./ButtonSecondary.jsx";

export const Intro = ({name}) => {
    return (
        <div className="flex-col space-y-3.5 ms-32">
            <div className="text-brand-yellow">UI/UX DESIGNER</div>
            <h2 className="text-font-high-emphasis">
                Hello, my name is {name}
            </h2>
            <div className="text-font-low-emphasis">
                Short text with details about you, what you do or your professional career. You can add more information on the about page.
            </div>
            <div className="space-x-3">
                <ButtonPrimary label="Projects" onClick={() => window.location.href = "#Projects"} />
                <ButtonSecondary label="Linkedin" onClick={() => alert("Linkedin")} />
            </div>
        </div>
    )
}