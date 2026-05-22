export const ButtonSecondary = ({label, style, onClick}) => {
    return (
        <>
            <button className={"text-base sm:text-lg bg-transparent border-2 hover:bg-font-high-emphasis hover:text-bg-white transition-colors border-bg-line py-2 px-5 sm:px-6 text-font-high-emphasis rounded-lg text-center cursor-pointer " + style} onClick={onClick}  >
                {label}
            </button>
        </>
    )
}