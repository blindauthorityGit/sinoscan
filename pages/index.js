import Image from "next/image";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import useStore from "../store/store"; // Import the store

import Card from "../components/cards";
import { motion } from "framer-motion";

import MainContainer from "../components/layout/mainContainer";
import config from "../config";
//IMAGES
import Logo from "../assets/logo.png";

export default function Home() {
    const [currentStep, setCurrentStep] = useState(0);
    // const [activeIds, setActiveIds] = useState([]);
    const { activeIds, setActiveIds, isNextButtonEnabled } = useStore();

    const handleCardClick = (id) => {
        const stepActiveIds = activeIds && activeIds[currentStep] ? activeIds[currentStep] : [];
        const multipleChoice = config.steps[currentStep].multipleChoice;

        if (multipleChoice) {
            const newIds = stepActiveIds.includes(id) ? stepActiveIds.filter((i) => i !== id) : [...stepActiveIds, id];
            setActiveIds(currentStep, newIds);
        } else {
            setActiveIds(currentStep, [id]);
        }
    };

    const goToNextStep = () => {
        if (currentStep < config.steps.length - 1) {
            setCurrentStep(currentStep + 1);
            setActiveIds([]); // Reset selections when moving to the next step
        }
    };

    const goToPreviousStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
            setActiveIds([]); // Reset selections when moving back
        }
    };

    const nextButtonStyle = isNextButtonEnabled(currentStep, config.steps[currentStep].multipleChoice, activeIds)
        ? {
              backgroundColor: "#007bff", // Primary color
              color: "white",
              opacity: 1,
              cursor: "pointer",
          }
        : {
              backgroundColor: "#cccccc", // Disabled color
              color: "white",
              opacity: 0.5,
              cursor: "not-allowed",
          };

    // const isNextButtonEnabled = () => {
    //     if (config.steps[currentStep].multipleChoice) {
    //         return activeIds.length > 0; // Multiple choices must have at least one selected
    //     } else {
    //         return activeIds.length === 1; // Single choice must have exactly one selected
    //     }
    // };

    useEffect(() => {
        console.log(config);
        console.log(config.steps[0].image);
    }, []);

    return (
        <MainContainer width="container mx-auto pt-4 font-sans">
            <div className="col-span-8 pr-8 pt-2">
                <div className="topBar flex justify-between">
                    <img src={Logo.src} alt="" />
                    <div className="text-right font-sans font-semibold underline">
                        <a href="tel:+4961038055685">+49 (0) 6103 805 56 85</a>
                        <br />
                        <a href="mailto:info@sinoscan.de">info@sinoscan.de</a>
                    </div>
                </div>
                <div className="stepCounter  mt-16">
                    <div className="flex">
                        {config.steps.map((e, i) => {
                            return (
                                <div
                                    className={`${
                                        i == currentStep ? "bg-green" : " bg-mediumGray"
                                    } step  w-16 h-2 mr-4`}
                                    key={`stepNr${i}`}
                                ></div>
                            );
                        })}
                    </div>
                    <p className="mt-2">
                        {currentStep + 1} / {config.steps.length}
                    </p>
                </div>
                <div className="text mt-12 text-primaryColor">
                    <h2 className="font-sans font-semibold text-5xl">{config.steps[currentStep].headline}</h2>
                    <p className="mt-6 text-sm">{config.steps[currentStep].subline}</p>
                </div>
                <div className="bg-lightGray p-8 grid grid-cols-12 gap-4 mt-8">
                    {config.steps[currentStep].boxes.map((e, i) => {
                        const isActive =
                            activeIds && activeIds[currentStep] ? activeIds[currentStep].includes(i) : false;

                        return (
                            <Card
                                length={config.steps[currentStep].boxes.length}
                                headline={e.headline}
                                text={e.text}
                                icon={e.icon}
                                answer={e.headline}
                                id={i}
                                isActive={isActive}
                                onClick={(e) => {
                                    console.log(e.currentTarget.dataset.answer);
                                    handleCardClick(i); // Simplify the onClick handler
                                }}
                            ></Card>
                        );
                    })}
                </div>
                <div className="buttons flex mt-8">
                    <button
                        className="px-8 py-2 border border-1 font-semibold mr-4"
                        onClick={() => setCurrentStep(currentStep - 1)}
                        style={{ backgroundColor: "#bgt-primaryColor", color: "white" }}
                    >
                        zurück
                    </button>
                    <button
                        className="px-8 py-2 border border-1 font-semibold"
                        onClick={() => setCurrentStep(currentStep + 1)}
                        style={nextButtonStyle}
                        disabled={
                            !isNextButtonEnabled(currentStep, config.steps[currentStep].multipleChoice, activeIds)
                        }
                    >
                        weiter
                    </button>
                </div>
            </div>
            <div className="col-span-4">
                <motion.img
                    key={config.steps[currentStep].image.src} // Key changes when image source changes
                    src={config.steps[currentStep].image.src}
                    alt=""
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                />
            </div>
        </MainContainer>
    );
}
