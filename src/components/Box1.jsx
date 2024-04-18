import { motion } from "framer-motion";
import { useState } from "react";

const Box1 = () => {
    // State to manage animation
    const [isAnimating, setIsAnimate] = useState(false);

    return (
        <div className="box-container">
            {/* Box */}
            <motion.div 
                className="box"
                // Initial styles
                initial={{
                    opacity: 0.1
                }}
                // Animated styles based on 'isAnimating' state
                animate={{
                    x: isAnimating ? 1100 : 0,
                    opacity: isAnimating ? 1 : 0.5,
                    rotate: isAnimating ? 360 : 0,
                    
                }}
                // Transition configuration
                transition={{
                    type: "spring", // Animation type
                    stiffness: 60,  // Stiffness of the spring animation
                }}
                // Toggle animation on click
                onClick={() => setIsAnimate(!isAnimating)}
            ></motion.div>
        </div>
    );
};

export default Box1;
