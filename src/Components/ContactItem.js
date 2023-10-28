export default function ContactItem(props) {
    return (
        <a href={props.link ? props.link : "#"} target={props.link ? "_blank" : ""} className="flex flex-col items-center justify-center bg-sky-950 my-5 py-5 rounded-lg text-zinc-50 text-2xl hover:text-sky-500 hover:bg-zinc-50 hover:-translate-y-1 hover:text-sky-500 hover:shadow-md hover:shadow-zinc-50 hover:cursor-pointer transition ease-in-out">
            <img src={props.logo} className="w-1/12"/>
            <p>{props.text}</p>
        </a>
    )
}