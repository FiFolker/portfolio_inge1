import {ProjectItem} from "./ProjectItem.jsx";

export const Projects = ({projects}) => {
    return (
        <div id="Projects" className="flex-col justify-center items-center space-y-20">
            <div className="justify-items-center">
                <h2 className="text-5xl text-bold font-playfair flex-col">
                    Projects
                    <div className="mt-1 border-b-brand-yellow border-b-4 w-full"></div>
                </h2>

            </div>
            {projects.map((project, i) => {
                return (
                    <ProjectItem imageFirst={i % 2 !== 0} title={project.title} description={project.description} image={project.image} link={project.link} key={project.id} />
                )
            })}

        </div>
    )
}