export default function Navbar() {
    return(
        <div className="flex justify-between px-5 md:px-20 py-5 text-zinc-50 bg-sky-500 fixed top-0 right-0 left-0 z-50">
            <p className="font-bold mr-auto">BASUDEWA</p>
            <div className="flex">
                <a className="mx-5 hover:text-sky-950 hover:-translate-y-0.5 transition ease-in-out" href="#">Home</a>
                <a className="mx-5 hover:text-sky-950 hover:-translate-y-0.5 transition ease-in-out" href="#projects-section">Projects</a>
                <a className="mx-5 hover:text-sky-950 hover:-translate-y-0.5 transition ease-in-out" href="#skills-section">Skills</a>
                <a className="mx-5 hover:text-sky-950 hover:-translate-y-0.5 transition ease-in-out" href="#contact-section">Contact</a>
            </div>
        </div>
    )
}