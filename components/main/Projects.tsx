import { ProjectCard } from "../sub/ProjectCard";

export function Projects(){
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
                <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                src="/NextWebsite.png"
                title="Modern Next.js Portfolio"
                description= "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Officiis quas cupiditate iste esse reiciendis quae."
                />
                <ProjectCard
                src="/CardImage.png"
                title="Modern Next.js Portfolio"
                description= "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Officiis quas cupiditate iste esse reiciendis quae."
                />
                <ProjectCard
                src="/SpaceWebsite.png"
                title="Modern Next.js Portfolio"
                description= "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Officiis quas cupiditate iste esse reiciendis quae."
                />
                </div>

        </div>
    )
}