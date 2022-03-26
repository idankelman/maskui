

import { motion } from 'framer-motion';

const animations = {
    inital: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
}

const AnimatePage = ({ children }) => {
    return (
        <div>
            <motion.div variants={animations}
                inital="inital"
                animate="animate"
                exit="exit"
                transition = {{duration:1}}
                >
                {children}
            </motion.div>
        </div>
    );
}
export default AnimatePage;