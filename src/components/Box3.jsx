import { motion } from "framer-motion";
import { useState } from "react";

const Box3 = () => {
    // State to manage animation (if needed)

    return (
        <div className="box-container">
            {/* Box */}
            <motion.div 
                className="box"
                // Animation applied when the element is in view
                whileInView={{
                    scale:[1,1.4,1.4,1,1],      // Scale animation values
                    borderRadius:["20%","20%","50%","50%","20%"],  // BorderRadius animation values
                    rotate:[0,0,270,270,0],     // Rotation animation values
                }}
                // Options for the viewport
                viewport={{
                    once:true  // Animation occurs only once when entering the viewport
                }}
                transition={{
                    duration:3  // Duration of the animation
                }}
            ></motion.div>
        </div>
    );
};

export default Box3;
