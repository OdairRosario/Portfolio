
import Image from "next/image"
import Link from "next/link"

import Socials from "../socials/socials"


const Header = () => {
    return (
        <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[-90px] ">
            <div className="container mx-auto ">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 py-6">
                    {/* logo */}
                    <Link href={'/'} className='select-none non-interactive pointer-events-none'>
                        <Image
                            src={'/logo.svg'}
                            width={210}
                            height={58}
                            alt=''
                            priority={true}
                            
                        >
                            
                        </Image>
                    </Link>
                  
                    {/* socials */}
                    <Socials/>
                    
                </div>
        
            </div>
        </header>
    )
}

export default Header
