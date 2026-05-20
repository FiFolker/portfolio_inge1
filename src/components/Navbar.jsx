export const Navbar = ({name}) => {
    return (
        <nav className="w-full h-16 text-font-high-emphasis flex items-center justify-between">
            <div className="font-comfortaa text-lg font-bold">{name}</div>
            <ul className="flex font-raleway space-x-12 text-lg">
                <li><a href="#About">About</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contacts">Contacts</a></li>
            </ul>
        </nav>
    )
}