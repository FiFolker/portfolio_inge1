export const ProjectItem = ({ imageFirst=false ,title, description, image, link }) => {
    return (
        <div className="bg-bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row w-full max-w-5xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] mx-auto md:h-[524px]">


            {imageFirst &&
                <div className="w-full md:w-1/2 h-[300px] md:h-full">
                <img
                src={image}
                alt={`Aperçu du projet ${title}`}
                className="w-full h-full object-cover object-top"
                />
                </div>
            }

            <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-center md:h-full">
                <h3 className="font-playfair text-font-high-emphasis text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                    {title}
                </h3>

                <p className="font-nunito text-font-medium-emphasis text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                    {description}
                </p>

                <a
                    href={link}
                    className="w-fit px-6 sm:px-8 py-2.5 rounded-full border border-font-high-emphasis text-font-high-emphasis font-nunito font-bold hover:bg-font-high-emphasis hover:text-bg-white transition-colors"
                    target="_blank"
                >
                    View Project
                </a>
            </div>

            {!imageFirst &&
                <div className="w-full md:w-1/2 h-[300px] md:h-full">
                    <img
                        src={image}
                        alt={`Aperçu du projet ${title}`}
                        className="w-full h-full object-cover object-bottom"
                    />
                </div>
            }

        </div>
    );
};