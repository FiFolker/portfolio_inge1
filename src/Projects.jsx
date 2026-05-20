import {ProjectItem} from "./ProjectItem.jsx";

export const Projects = ({projects}) => {
    return (
        <div>
            <h2>Projects</h2>
            {projects.map(project => {
                return (
                    <ProjectItem title={project.title} description={project.description} image={project.image} link={project.link} key={project.id} />
                )
            })}
        </div>
    )
}