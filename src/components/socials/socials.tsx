import Link from "next/link";
import { useState } from "react";
import { RiLinkedinLine, RiWhatsappLine, RiTelegramLine, RiDiscordLine } from 'react-icons/ri';

const Socials: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    const handleIconClick = () => {
        setShowPopup(true);
        setIsExiting(false);

        setTimeout(() => {
            setIsExiting(true);

            setTimeout(() => {
                setShowPopup(false);
            }, 500);
        }, 2000);
    };

    return (
        <div className="flex items-center gap-x-5 text-lg relative">
            {/* Discord Popup */}
            {showPopup && (
                <div className={`absolute p-1 bg-white border rounded shadow-lg transition-all duration-300 transform bottom-full left-0 sm:left-auto sm:right-0 ${isExiting ? '-translate-y-full sm:translate-x-full opacity-0' : 'translate-y-1/4 sm:translate-x-1/4 opacity-100'}`}>
                    <div className='bg-white relative flex text-primary items-center mx-0 p-0 rounded-md'>
                        <div className='text-[12px] leading-none font-semibold '>
                            <span className="flex  text-center ">Nome do usúario copiado!</span>
                        </div>
                   
                    </div>
                </div>
            )}

            <Link href={'https://www.linkedin.com/in/odair-j-rosario-836845284'} className='hover:text-teal-400'>
                <RiLinkedinLine />
            </Link>

            <Link href={'https://wa.me/5549988699986?text=Ol%C3%A1+Odair%2C+como+voc%C3%AA+est%C3%A1%3F+'} className='hover:text-teal-400'>
                <RiWhatsappLine />
            </Link>

            <Link href={'https://t.me/OdairRos'} className='hover:text-teal-400'>
                <RiTelegramLine />
            </Link>

            <RiDiscordLine onClick={handleIconClick} className='hover:text-teal-400 cursor-pointer' />
        </div>
    );
}

export default Socials;
