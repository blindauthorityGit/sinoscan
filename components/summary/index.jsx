import React, { useState } from "react";
import useStore from "../../store/store"; // Adjust the path as necessary

const SummaryComponent = () => {
    const {
        personalInfo,
        budgetOption,
        timeframeOption,
        textAreaValue,
        projectDescription,
        files,
        textValue,
        totalFileSize,
        selectedServices,
        selectedStages,
        selectedRequirements,
        selectedMarket,
    } = useStore((state) => ({
        personalInfo: state.personalInfo,
        budgetOption: state.budgetOption,
        timeframeOption: state.timeframeOption,
        textAreaValue: state.textAreaValue,
        textValue: state.textValue,
        files: state.files,
        totalFileSize: state.totalFileSize,
        selectedServices: state.selectedServices,
        selectedStages: state.selectedStages,
        selectedRequirements: state.selectedRequirements,
        selectedMarket: state.selectedMarket,
    }));

    const [newsletterSubscribed, setNewsletterSubscribed] = useState(true);
    const [termsAgreed, setTermsAgreed] = useState(false);

    return (
        <>
            <div className="bg-white p-4 rounded w-full my-0 col-span-12 lg:grid lg:grid-cols-2 gap-4 text-primaryColor font-sans">
                <div>
                    <h2 className="text-xl font-semibold text-primaryColor mb-3">Persönliche Informationen</h2>
                    <p className="">
                        <strong>Name:</strong> {personalInfo.name}
                    </p>
                    <p>
                        <strong>Firma:</strong> {personalInfo.company}
                    </p>
                    <p>
                        <strong>Email:</strong> {personalInfo.email}
                    </p>
                    <p>
                        <strong>Telefon:</strong> {personalInfo.phone}
                    </p>
                    <p className="mt-3">
                        <strong>Budgetoption:</strong> {budgetOption || "Keine Angabe"}
                    </p>
                    <p>
                        <strong>Zeitrahmen:</strong> {timeframeOption || "Keine Angabe"}
                    </p>
                    <p className="mt-3 hyphens-auto">
                        <strong>Projektbeschreibung:</strong> {textValue || "Keine Angabe"}
                    </p>
                    {/* <p>
                    <strong>Zeitrahmen:</strong> {timeframeOption || "Keine Angabe"}
                </p> */}
                </div>
                <div>
                    <h2 className="text-xl font-semibold mt-8 lg:mt-0 text-primaryColor mb-3">Projektdetails</h2>
                    <h3 className=" font-semibold text-gray-700">Ausgewählte Services:</h3>
                    <ul>
                        {selectedServices.map((service) => (
                            <li key={service}>{service}</li>
                        ))}
                    </ul>
                    <h3 className=" font-semibold text-gray-700">Stadium des Konzepts:</h3>
                    <ul>
                        {selectedStages.map((stage) => (
                            <li key={stage}>{stage}</li>
                        ))}
                    </ul>
                    <h3 className=" font-semibold text-gray-700">Spezifische Anforderungen:</h3>
                    <ul>
                        {selectedRequirements.map((requirement) => (
                            <li key={requirement}>{requirement}</li>
                        ))}
                    </ul>
                    <h3 className=" font-semibold text-gray-700">Zielgruppe / Markt:</h3>
                    <ul>
                        {selectedMarket.map((market) => (
                            <li key={market}>{market}</li>
                        ))}
                    </ul>
                    <h3 className=" font-semibold text-gray-700">Zusätzliche Nachricht:</h3>
                    <p>{textAreaValue || "Keine Angabe"}</p>
                </div>
                <div className="col-span-2">
                    <h3 className=" font-semibold text-gray-700  mt-8 lg:mt-0">Hochgeladene Dateien:</h3>
                    <ul>
                        {files.map((file, index) => (
                            <li key={index}>
                                {file.path} - {Math.round(file.size / 1024 / 1024)} MB
                            </li>
                        ))}
                    </ul>
                    <p>
                        <strong>Gesamte Dateigröße:</strong> {Math.round(totalFileSize / 1024 / 1024)} MB
                    </p>
                </div>
            </div>
            <div className="col-span-12 mt-0">
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        checked={newsletterSubscribed}
                        onChange={() => setNewsletterSubscribed(!newsletterSubscribed)}
                        className="mr-2 h-4 w-4"
                    />
                    <label className="text-sm text-gray-700">
                        Sie werden für unseren Newsletter angemeldet, um Updates zu erhalten.
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        checked={termsAgreed}
                        onChange={() => setTermsAgreed(!termsAgreed)}
                        className="mr-2 h-4 w-4"
                    />
                    <label className="text-sm text-gray-700">Ich stimme den Allgemeinen Geschäftsbedingungen zu.</label>
                </div>
            </div>
        </>
    );
};

export default SummaryComponent;
