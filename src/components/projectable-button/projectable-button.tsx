
import Link from "next/link"
import { HiArrowRight } from "react-icons/hi2"



const ProjectableButton = () => {
    return (
        <div className="non-interactive mx-auto mb-15 xl:mx-0">

            <Link href={'/projects'} className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group '>
                
                <img
                    src={`/Portifolio/rounded-text.png`}
                    width={141}
                    height={148}
                    alt=''
                    className="non-interactive pointer-events-none animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]" />

                <HiArrowRight className="non-interactive pointer-events-none absolute text-4xl group-hover:translate-x-2 translation-all duration-300" />

            </Link>
        </div>
    )
}

export default ProjectableButton