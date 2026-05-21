import {ProjectItem} from "./ProjectItem.jsx";
import {TitleUnderlined} from "./TitleUnderlined.jsx";


export const Projects = ({projects}) => {
    return (
        <div id="Projects" className="flex-col justify-center items-center space-y-20">
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