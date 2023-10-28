export default function SkillsItems(props) {
    return (
        <div className="p-5 text-zinc-50 bg-sky-950 rounded-lg flex flex-col items-center hover:bg-zinc-50 hover:text-sky-500 hover:-translate-y-1 hover:shadow-md hover:shadow-zinc-50 transition ease-in-out">
            <img src={props.skillLogo} className="h-full w-4/12"/>
            <h1 className="text-2xl font-bold">{props.skillTitle}</h1>
        </div>
    )
}