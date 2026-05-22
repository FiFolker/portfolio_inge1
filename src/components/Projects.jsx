import {ProjectItem} from "./ProjectItem.jsx";
import {TitleUnderlined} from "./TitleUnderlined.jsx";


export const Projects = ({projects}) => {
    return (
        <div id="Projects" className="flex flex-col justify-center items-center space-y-10 sm:space-y-16 md:space-y-20 px-6 sm:px-10 md:px-16">
            <TitleUnderlined name="Projects" />
            {projects.map((project, i) => {
                return (
                    <ProjectItem imageFirst={i % 2 !== 0} title={project.title} description={project.description}
                                 image={project.image} link={project.link} key={project.id}/>
                )
            })}

        </div>
    )
}