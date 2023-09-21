
import { NEXT_PUBLIC_BASE_PATH } from "@/utils/constants"
import Link from "next/link"
import { HiArrowRight } from "react-icons/hi2"

const CircleButton: React.FC = () => {
    return (
        <div className="mx-auto mb-15 xl:mx-0">
            <Link href={'/projects'} className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group '>
                
                <img
                    src={`${NEXT_PUBLIC_BASE_PATH}rounded-text.png`}
                    width={141}
                    height={148}
                    alt=''
                    className=" select-none non-interactive pointer-events-none animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]" />

                <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 translation-all duration-300" />
            </Link>
        </div>
    )
}

export default CircleButton