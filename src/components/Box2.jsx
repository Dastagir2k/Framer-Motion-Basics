import { motion } from "framer-motion";

const Box2 = () => {
    // State to manage animation (if needed)

    return (
        <div className="box-container">
            {/* Box */}
            <motion.div 
                className="box"
                // Enable drag functionality
                drag
                // Set drag constraints to limit movement within specified boundaries
                dragConstraints={{
                    right: 30,
                    left: -10,
                    top: 10,
                    bottom: 10
                }}
                // Scale up the box on hover
                whileHover={{
                    scale: 1.1
                }}
                // Scale down the box while it's being tapped
                whileTap={{
                    scale: 0.8
                }}
            ></motion.div>
        </div>
    );
};

export default Box2;
