export const ButtonPrimary = ({label, style, onClick}) => {
    return (
        <>
            <button className={"text-lg bg-brand-yellow py-2 px-6 text-font-high-emphasis rounded-lg text-center hover:bg-brand-yellow/80 hover:text-font-high-emphasis/80 transition cursor-pointer " + style} onClick={onClick}  >
                {label}
            </button>
        </>
    )
}