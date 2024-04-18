import { motion } from "framer-motion";
// import { useState } from "react";

const Box4 = () => {
    // State to manage animation
    

    return (
        <div className="box-container">
            {/* Box */}
            <motion.div 
                className="box"
                // Initial styles
                whileInView={{
                    x:0,
                    opacity:1,
                    backgroundColor:"red"
                }}
                transition={{
                    duration:3
                }}
                viewport={{
                    once:true
                }}
                initial={{
                    x:-100,
                    opacity:0.2
                }}
            ></motion.div>
        </div>
    );
};

export default Box4;
