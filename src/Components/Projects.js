import React from 'react'
import ProjectItems from "./ProjectItem"

export default function Projects() {
    const [projects, setProjects] = React.useState([])
    React.useEffect(() => {
        fetch('https://api.github.com/users/BasudewaWeda/repos')
        .then(res => res.json())
        .then(data => data.filter(x => !x.fork))
        .then(filteredData => setProjects(filteredData))
    }, [])

    const projectItems = projects.map(project => <ProjectItems 
        projectTitle = {project.name}
        projectDesc = {project.description}
        projectLink = {project.html_url}
        languageUsed = {project.language}
    />
    )
    
    return (
        <section className='h-screen flex flex-col justify-center' id='projects-section'>
            <div className="p-5 lg:p-20">
                <h1 className="text-sky-500 font-bold text-3xl md:text-5xl text-center p-5 xl:mb-10">PROJECTS</h1>
                <div className='overflow-x-scroll md:overflow-auto'>
                    <div className="p-5 grid grid-rows-4 grid-flow-col gap-4 w-max sm:w-auto sm:grid-flow-row sm:grid-cols-2 lg:grid-rows-2 lg:grid-cols-none lg:grid-flow-col lg:gap-4">
                        {projectItems}
                    </div>
                </div>
            </div>
        </section>
    )
}