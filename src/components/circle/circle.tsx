import { basePath } from "../../../public/utils/config"

const Circle = () => {
    
    return (
        <div className="select-none non-interactive pointer-events-none w-[300px] xl:w-[300px] absolute -right-0 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10 ">
            <img 
            src={`${basePath}circles.png`} 
            width={260} 
            height={200}
            alt=''
            className='w-full h-full '></img>
        </div>

    )
}

export default Circle