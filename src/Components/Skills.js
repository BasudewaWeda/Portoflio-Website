import SkillsItem from "./SkillsItem"
import {skills} from "./SkillsData"

export default function Skills() {
    const skillItem = skills.map(skill => <SkillsItem 
        skillTitle = {skill.title}
        skillLogo = {skill.logo} 
    />)

    return (
        <section className='h-screen flex flex-col justify-center' id="skills-section">
            <div className="p-20">
                <h1 className="text-sky-500 font-bold text-5xl text-center p-5 mb-10">SKILLS</h1>
                <div className="grid grid-cols-5 gap-6">
                    {skillItem}
                </div>
            </div>
        </section>
    )
}