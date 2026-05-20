export const ButtonSecondary = ({label, style, onClick}) => {
    return (
        <>
            <button className={"text-lg bg-transparent border-2 border-bg-line py-2 px-6 text-font-high-emphasis rounded-lg text-center hover:text-font-high-emphasis/80 hover:border-bg-line/80 transition cursor-pointer " + style} onClick={onClick}  >
                {label}
            </button>
        </>
    )
}