export default function ContactItem(props) {
    return (
        <a href={props.link ? props.link : "#"} target={props.link ? "_blank" : ""} className="flex flex-col items-center justify-center w-72 sm:w-2/3 lg:w-full bg-sky-950 my-2 lg:my-5 py-1 lg:py-5 rounded-lg text-zinc-50 text-md lg:text-2xl hover:text-sky-500 hover:bg-zinc-50 hover:-translate-y-1 hover:text-sky-500 hover:shadow-md hover:shadow-zinc-50 hover:cursor-pointer transition ease-in-out">
            <img src={props.logo} className="w-12 h-12 lg:w-1/12 lg:h-full"/>
            <p>{props.text}</p>
        </a>
    )
}