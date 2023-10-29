import SkillsItem from "./SkillsItem"
import {skills} from "./SkillsData"

export default function Skills() {
    const skillItem = skills.map(skill => <SkillsItem 
        skillTitle = {skill.title}
        skillLogo = {skill.logo} 
    />)

    return (
        <section className='h-screen flex flex-col justify-center' id="skills-section">
            <div className="p-5 md:p-20">
                <h1 className="text-sky-500 font-bold text-5xl text-center p-5 md:mb-10">SKILLS</h1>
                <div className="overflow-x-scroll md:overflow-auto">
                    <div className="p-5 grid grid-rows-3 grid-flow-col gap-2 sm:grid-flow-row sm:grid-rows-none sm:grid-cols-4 md:grid-cols-5 sm:gap-3 md:gap-4 lg:gap-6">
                        {skillItem}
                    </div>
                </div>
            </div>
        </section>
    )
}