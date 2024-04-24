import Image from "next/image";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import useStore from "../store/store"; // Import the store

import Card from "../components/cards";
import { motion } from "framer-motion";
import { Rings } from "react-loader-spinner";

import MainContainer from "../components/layout/mainContainer";
import config from "../config";
//IMAGES
import Logo from "../assets/logo.png";

//COMPS
import TextareaComponent from "../components/textArea";
import MyDropzone from "../components/dropzone";
import Budget from "../components/budget";
import Personal from "../components/personal";
import Summary from "../components/summary";

export default function Home() {
    const [currentStep, setCurrentStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState("");
    const currentStepConfig = config.steps[currentStep];
    const isLastStep = currentStep === config.steps.length - 1;

    // const [textValue, setTextValue] = useState(""); // Initialize the state

    // const [activeIds, setActiveIds] = useState([]);
    const {
        activeIds,
        setActiveIds,
        textValue,
        setTextValue,
        isNextButtonEnabled,
        budgetOption,
        timeframeOption,
        personalInfo,
        setSelectedServices,
        setSelectedStages,
        setSelectedRequirements,
        setSelectedMarket,
        textAreaValue,
        files,
        totalFileSize,
        selectedServices,
        selectedStages,
        selectedRequirements,
        selectedMarket,
    } = useStore();
    const nextButtonEnabled = isNextButtonEnabled(
        currentStep,
        config.steps[currentStep].multipleChoice,
        activeIds,
        textValue,
        currentStepConfig.component,
        budgetOption,
        timeframeOption,
        personalInfo
    );
    const renderComponent = (step, activeIds, handleCardClick) => {
        if (step.component) {
            switch (step.component) {
                case "dropzone":
                    return <MyDropzone onFilesAdded={(files) => console.log(files)} />;
                case "options":
                    return <Budget />;
                case "personal":
                    return <Personal />;
                case "summary":
                    return <Summary />;
                case "textarea":
                    return <TextareaComponent value={textValue} onChange={handleTextChange} />;

                default:
                    break; // Handle other types or throw an error
            }
        } else {
            return step.boxes.map((box, index) => {
                const isActive = activeIds[currentStep] && activeIds[currentStep].includes(box.id);
                return (
                    <Card
                        key={box.id} // Using box.id instead of index for key if id is unique
                        {...box}
                        length={config.steps[currentStep].boxes.length}
                        isActive={isActive}
                        onClick={() => handleCardClick(box.id, step.category)}
                    />
                );
            });
        }
    };

    // SUBMIT DATA

    const handleSubmit = async () => {
        const formData = {
            personalInfo,
            budgetOption,
            timeframeOption,
            textAreaValue,
            projectDescription: textValue, // Assuming textValue is the project description.
            files,
            totalFileSize,
            selectedServices,
            selectedStages,
            selectedRequirements,
            selectedMarket,
        };

        console.log(formData);
        console.log(JSON.stringify(formData));
        setLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            setLoading(false);

            if (response.ok) {
                console.log("Form submitted successfully");
                setSubmissionStatus("success");

                // Handle success here (e.g., update UI to show a success message)
            } else {
                console.log("Form submission failed");
                setSubmissionStatus("failed");

                // Handle failure here (e.g., update UI to show an error message)
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setLoading(false);
            setSubmissionStatus("failed");
            // Handle network errors here (e.g., update UI to show an error message)
        }
        // Here you could trigger your data submission logic or transition to a thank you page, etc.
    };

    const handleTextChange = (event) => {
        setTextValue(event.target.value); // Update the state on text change
    };

    const handleCardClick = (id, stepCategory) => {
        const stepActiveIds = activeIds && activeIds[currentStep] ? activeIds[currentStep] : [];
        const multipleChoice = config.steps[currentStep].multipleChoice;

        console.log(stepCategory);

        if (multipleChoice) {
            const newIds = stepActiveIds.includes(id) ? stepActiveIds.filter((i) => i !== id) : [...stepActiveIds, id];
            setActiveIds(currentStep, newIds);
            updateSelections(newIds, stepCategory);
        } else {
            setActiveIds(currentStep, [id]);
            updateSelections([id], stepCategory);
        }
    };

    const updateSelections = (ids, category) => {
        // Assuming you have a structure where each step category is defined
        const selectedItems = config.steps[currentStep].boxes.filter((box) => ids.includes(box.id));
        switch (category) {
            case "services":
                setSelectedServices(selectedItems.map((item) => item.headline));
                break;
            case "stages":
                setSelectedStages(selectedItems.map((item) => item.headline));
                break;
            case "requirements":
                setSelectedRequirements(selectedItems.map((item) => item.headline));
                break;
            case "market":
                setSelectedMarket(selectedItems.map((item) => item.headline));
                break;
            default:
                // handle other categories or errors
                break;
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
    const nextButtonStyle = nextButtonEnabled
        ? { backgroundColor: "#002a3a", color: "white", opacity: 1, cursor: "pointer" }
        : { backgroundColor: "#cccccc", color: "white", opacity: 0.5, cursor: "not-allowed" };

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

    const isEnabledBack = currentStep !== 0; // this should be dynamic based on your state or props

    return (
        <MainContainer width="container mx-auto pt-4 font-sans">
            <div className="col-span-12 px-4 lg:pl-0 lg:col-span-8 pr-8 pt-2">
                <div className="topBar flex justify-between">
                    <img src={Logo.src} alt="" />
                    <div className="text-right text-xs lg:text-base font-sans font-semibold underline">
                        <a href="tel:+4961038055685">+49 (0) 6103 805 56 85</a>
                        <br />
                        <a href="mailto:info@sinoscan.de">info@sinoscan.de</a>
                    </div>
                </div>
                <div className="stepCounter mt-8 lg:mt-16">
                    <div className="flex">
                        {config.steps.map((e, i) => {
                            return (
                                <div
                                    className={`${i == currentStep ? "!bg-green" : " bg-mediumGray"} ${
                                        i < currentStep ? "bg-primaryColor" : "bg-mediumGray"
                                    } step  w-16 h-2 mr-2 lg:mr-4`}
                                    key={`stepNr${i}`}
                                ></div>
                            );
                        })}
                    </div>
                    <p className="mt-2">
                        {currentStep + 1} / {config.steps.length}
                    </p>
                </div>
                <div className="text mt-6 lg:mt-12 text-primaryColor">
                    <h2 className="font-sans font-semibold text-2xl lg:text-5xl">
                        {config.steps[currentStep].headline}
                    </h2>
                    <p className="mt-6 text-sm">{config.steps[currentStep].subline}</p>
                </div>
                <div className="bg-lightGray p-4 lg:p-8 grid grid-cols-12 gap-4 mt-8">
                    {renderComponent(currentStepConfig, activeIds, handleCardClick)}
                </div>
                {loading ? (
                    <div className="flex justify-center">
                        <Rings height="80" width="80" color="#df3288" radius="6" visible={true} />
                    </div>
                ) : submissionStatus === "success" ? (
                    <p className="!text-green mt-4  mb-12">
                        Vielen Dank für Ihre Anfrage! <br /> Wir werden uns in Kürze bei Ihnen melden.
                    </p>
                ) : submissionStatus === "failed" ? (
                    <p className="!text-red-500  mb-12">
                        Fehler bei der Anmeldung. Bitte versuchen Sie es später erneut.
                    </p>
                ) : (
                    <div className="flex flex-wrap mt-8 mb-12">
                        <button
                            className="flex-1 sm:flex-initial px-4 sm:px-8 py-2 border border-primaryColor text-primaryColor font-semibold mr-2 sm:mr-4 bg-transparent"
                            onClick={() => setCurrentStep(currentStep - 1)}
                            disabled={!isEnabledBack}
                        >
                            zurück
                        </button>
                        {isLastStep ? (
                            <button
                                className="flex-1 sm:flex-initial px-4 sm:px-8 py-2 border border-1 font-semibold bg-primaryColor text-white"
                                onClick={handleSubmit}
                            >
                                Absenden
                            </button>
                        ) : (
                            <button
                                className="flex-1 sm:flex-initial px-4 sm:px-8 py-2 border border-1 font-semibold"
                                onClick={() => setCurrentStep(currentStep + 1)}
                                style={
                                    nextButtonEnabled
                                        ? { backgroundColor: "#002a3a", color: "white", opacity: 1, cursor: "pointer" }
                                        : {
                                              backgroundColor: "#cccccc",
                                              color: "white",
                                              opacity: 0.5,
                                              cursor: "not-allowed",
                                          }
                                }
                                disabled={!nextButtonEnabled}
                            >
                                weiter
                            </button>
                        )}
                    </div>
                )}
            </div>
            <div className="hidden lg:block lg:col-span-4">
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
