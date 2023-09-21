import { NEXT_PUBLIC_BASE_PATH } from "@/utils/constants"

const TopImage: React.FC = () => {
    return (
        <div className="select-none non-interactive pointer-events-none absolute left-0 top-0 mix-blend-color-dodge z-10 w-[300px] xl:w-[300px] opacity-30 animate-pulse duration-75 ">
            <img alt='' src={`${NEXT_PUBLIC_BASE_PATH}/top-img.png`} width={400} height={400} />
        </div>
    )
}

export default TopImage                                                                    