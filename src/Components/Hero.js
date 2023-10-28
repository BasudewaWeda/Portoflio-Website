import profileImg from '../Images/Foto Profil 1x1.png'

export default function Hero() {
    return (
        <section className='h-screen flex items-center'>
            <div className="p-5 flex flex-col items-center justify-center md:flex-row lg:px-20 lg:py-20 md:items-center md:justify-evenly">
                <div className='text-center md:text-left'>
                    <h1 className='text-zinc-50 text-5xl'>HI! I'm Basudewa Weda</h1>
                    <h2 className='text-sky-500 text-3xl'>Frontend Developer</h2>
                    <p className='text-zinc-50 text-1xl mt-5 max-w-xl md:text-justify'>I am a sophomore student currently studying Computer Science in Udayana University. My hobbies are playing video games and reading books. I plan on learning about frontend development and continuing with backend development for full-stack development.</p>
                    <div className='flex justify-center md:justify-normal text-zinc-50 text-xl py-5'>
                        <a href='#skills-section' className='mr-6 px-5 py-1 w-32 text-center bg-sky-500 rounded-md hover:bg-zinc-50 hover:-translate-y-1 hover:text-sky-500 hover:shadow-md hover:shadow-zinc-50 transition ease-in-out'>Skills</a>
                        <a href='#contact-section' className='px-5 py-1 w-32 text-center bg-sky-500 rounded-md hover:bg-zinc-50 hover:-translate-y-1 hover:text-sky-500 hover:shadow-md hover:shadow-zinc-50 transition ease-in-out'>Contact</a>
                    </div>
                </div>
                <img className='w-1/2 md:flex-none h-full md:w-1/3 border-4 border-sky-500 rounded-full hover:bg-zinc-50 hover:border-zinc-50 hover:-translate-y-1 hover:shadow-md hover:shadow-zinc-50 transition ease-in-out' src={profileImg} alt='Profile picture'></img>
            </div>
        </section>
    )
}