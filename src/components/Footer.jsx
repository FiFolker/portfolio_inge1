import {LogoButton} from "./LogoButton.jsx";

export const Footer = ({name}) => {
    const buttons = [
        { id:0, logo:"/assets/insta.webp", link:"https://www.instagram.com" },
        { id:1, logo:"/assets/linkedin.webp", link:"https://www.linkedin.com/" },
        { id:2, logo:"/assets/email.webp", link:"mailto:elouan.le-merle@efrei.net" }
    ]

    return (
        <footer className="relative w-full mt-20">

            <img
                src="/assets/footer.webp"
                alt="Vague de décoration"
                className="w-full h-auto min-h-[150px] object-cover object-bottom select-none pointer-events-none block"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-start pt-8 sm:pt-12 md:pt-16">

                <div className="flex space-x-6 mb-4">
                    {buttons.map(btn => (
                        <LogoButton style="w-10 md:w-12 p-2 hover:scale-110 transition-transform" logo={btn.logo} link={btn.link} key={btn.id}/>
                    ))}
                </div>

                <div className="font-nunito text-font-medium-emphasis text-xs sm:text-sm md:text-base">
                    {name} 2026
                </div>

            </div>

        </footer>
    )
}