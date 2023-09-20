import { basePath } from "../../../public/utils/config"

const Person = () => {
    return (
        <div className="select-none non-interactive pointer-events-none hidden xl:flex xl:max-w-none">
        <img 
        src={`${basePath}avatar.png`}
        width={517} 
        height={458}
         alt=''
         className="translate-z-0  w-full h-full">

        </img>
        </div>
    )
}

export default Person