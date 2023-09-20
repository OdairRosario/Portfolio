import { motion, Variants } from 'framer-motion'

const transitionVariants: Variants = {
    initial: {
        x: '100%',
        width: '100%'
    },
    animate: {
        x: '0%',
        width: '0%'
    },
    exit: {
        x: ['0%', '100%'],
        width: ['0%', '100%']
    }

}


const Transition = () => {
    return (
        <>
            <motion.div 
            className='fixed top-0 bottom-0 right-full  w-screen h-screen z-30 bg-[#193368]' 
            variants={transitionVariants} 
            initial="initial" 
            animate="animate" 
            exit="exit" 
            transition={{ delay: 0.2, duration: 0.2, ease: 'easeInOut' }}>
                
            </motion.div>
            <motion.div 
            className='fixed top-0 bottom-0 right-full  w-screen h-screen z-20 bg-[#193368]' 
            variants={transitionVariants} 
            initial="initial" 
            animate="animate" 
            exit="exit" 
            transition={{ delay: 0.2, duration: 0.4, ease: 'easeInOut' }}>
                
            </motion.div>
            <motion.div 
            className='fixed top-0 bottom-0 right-full  w-screen h-screen z-10 bg-[#1c3974]' 
            variants={transitionVariants} 
            initial="initial" 
            animate="animate" 
            exit="exit" 
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}>
                
            </motion.div>
           
        </>


    ) 
}

export default Transition;

