export default function ProjectItems(props) {
    return (
        <a href={props.projectLink} target="_blank" className="group text-zinc-50 bg-sky-950 rounded-lg flex flex-col overflow-hidden text-center w-screen sm:w-auto md:text-left shadow hover:shadow-lg hover:bg-zinc-50 hover:shadow-zinc-50 hover:-translate-y-1 transition ease-in-out">
            <div className="bg-sky-800 p-2 lg:p-5 group-hover:text-sky-500 group-hover:bg-zinc-300">
                <h1 className="text-xl xl:text-3xl font-bold">{props.projectTitle}</h1>
            </div>
            <div className="p-2 lg:p-5 group-hover:text-sky-500">
                <p className="overflow-hidden text-sm xl:text-lg">{props.projectDesc}</p>
                <p className="font-bold">Language Used : {props.languageUsed}</p>
            </div>
        </a>
    )
}