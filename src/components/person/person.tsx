import Image  from "next/image"

const Person = () => {
    return (
        <div className="select-none non-interactive pointer-events-none hidden xl:flex xl:max-w-none">
        <Image 
        src={'/avatar.png'} 
        width={517} 
        height={458}
         alt=''
         className="translate-z-0  w-full h-full">

        </Image>
        </div>
    )
}

export default Person