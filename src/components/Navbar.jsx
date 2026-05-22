import {useState} from "react";

export const Navbar = ({name}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full text-font-high-emphasis flex flex-row flex-wrap items-center justify-between gap-2 bg-bg-white/80 sm:bg-transparent rounded-lg px-3 sm:px-0 py-2 sm:py-0 shadow-sm sm:shadow-none">
            <div className="font-comfortaa text-sm sm:text-lg font-bold text-left">{name}</div>
            <button
                type="button"
                className="nav-burger hidden items-center justify-center h-9 w-9 rounded-md border border-font-high-emphasis/20"
                aria-label="Open menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="sr-only">Menu</span>
                <svg
                    className="h-5 w-5 text-font-high-emphasis"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </button>
            <ul className={`nav-links flex flex-row flex-wrap gap-3 sm:gap-0 sm:space-x-12 font-raleway text-xs sm:text-lg items-center ${isOpen ? "open" : ""}`}>
                <li><a href="#About">About</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
    )
}