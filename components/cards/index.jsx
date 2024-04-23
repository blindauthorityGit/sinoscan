import React from "react";
import { motion } from "framer-motion";
import { IoCheckmarkSharp } from "react-icons/io5"; // Importing the checkmark icon

const Card = ({ length, headline, text, icon, id, isActive, onClick, answer }) => {
    let colSpanClass;

    switch (true) {
        case length === 4:
            colSpanClass = "col-span-3";
            break;
        case length > 4:
            colSpanClass = "col-span-3";
            break;
        default:
            colSpanClass = "col-span-3"; // Default fallback if length is not 4 or greater than 4
            break;
    }

    // Animation settings for hover
    const hoverAnimation = {
        scale: 1.05, // Scale up the card a bit when hovered
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add shadow for depth
    };

    // Initial style before hover
    const initialStyle = {
        scale: 1,
        transition: { type: "spring", stiffness: 300 },
    };

    // Styles for active and inactive states
    const activeStyle = {
        scale: 1.05,
        background: "linear-gradient(to bottom, #002A3A, #0C4B63)", // Gradient from #002A3A to #0C4B63
        transition: { type: "spring", stiffness: 300 },
        color: "white",
    };

    const inactiveStyle = {
        scale: 1,
        backgroundColor: "#ffffff", // Default background
        transition: { type: "spring", stiffness: 300 },
    };

    // Checkmark animation
    const checkmarkAnimation = {
        initial: { scale: 0 },
        animate: { scale: 1, transition: { delay: 0.2 } },
    };

    const activeIconStyle = {
        filter: "brightness(0) invert(1)", // This makes the image white
    };

    // return <div className={`col-span-${12 / length}`}>BUBUBUBU</div>;
    return (
        <motion.div
            className={`${colSpanClass} ${
                length > 4 ? "h-48" : "h-72"
            } p-4 font-sans text-primary rounded-lg bg-white flex flex-col justify-around items-center shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out`}
            whileHover={hoverAnimation}
            initial={initialStyle}
            animate={isActive ? activeStyle : inactiveStyle}
            onClick={onClick}
            data-id={id}
            data-answer={answer}
            style={{ cursor: "pointer" }} // Optional: Change cursor to indicate it's clickable
        >
            {isActive && (
                <motion.div
                    className="absolute top-2 right-2 w-8 h-8 bg-green rounded-full flex items-center justify-center"
                    variants={checkmarkAnimation}
                    initial="initial"
                    animate="animate"
                >
                    <IoCheckmarkSharp className="text-white text-xl" />
                </motion.div>
            )}
            <img src={icon.src} alt="" className="w-16 h-16" style={isActive ? activeIconStyle : null} />
            <h3 className="font-semibold text-xl hyphens-auto text-center">{headline}</h3>
            {length > 4 ? null : <p className="text-sm text-center">{text}</p>}
        </motion.div>
    );
};

export default Card;
