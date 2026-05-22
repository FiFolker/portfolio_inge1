export const Navbar = ({name}) => {
    return (
        <nav className="w-full text-font-high-emphasis flex flex-row flex-wrap items-center justify-between gap-2 bg-bg-white/80 sm:bg-transparent rounded-lg px-3 sm:px-0 py-2 sm:py-0 shadow-sm sm:shadow-none">
            <div className="font-comfortaa text-sm sm:text-lg font-bold text-left">{name}</div>
            <ul className="flex flex-row flex-wrap gap-3 sm:gap-0 sm:space-x-12 font-raleway text-xs sm:text-lg items-center">
                <li><a href="#About">About</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
    )
}