import { motion, Variants } from 'framer-motion';



const spinner: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      ease: "linear",
      loop: Infinity
    }
  }
};

const LoadingComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div 
        initial={{ rotate: 0 }}
        animate="animate"
        variants={spinner}
        className="w-16 h-16 border-t-4 border-teal-500 border-solid rounded-full" 
      ></motion.div>
    </div>
  );
}

export default LoadingComponent;
