import React from "react";
import useStore from "../../store/store"; // Adjust the path as necessary

const SummaryComponent = () => {
    const { personalInfo, budgetOption, timeframeOption, textAreaValue, files, totalFileSize } = useStore((state) => ({
        personalInfo: state.personalInfo,
        budgetOption: state.budgetOption,
        timeframeOption: state.timeframeOption,
        textAreaValue: state.textAreaValue,
        files: state.files,
        totalFileSize: state.totalFileSize,
    }));

    return (
        <div className="bg-white p-4 rounded w-full my-8 col-span-12">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Zusammenfassung Ihrer Eingaben</h2>
            <div>
                <h3 className="text-lg font-semibold text-gray-700">Persönliche Informationen:</h3>
                <p>
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
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-700">Budgetoption:</h3>
                <p>{budgetOption || "Keine Angabe"}</p>
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-700">Zeitrahmen:</h3>
                <p>{timeframeOption || "Keine Angabe"}</p>
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-700">Zusätzliche Nachricht:</h3>
                <p>{textAreaValue || "Keine Angabe"}</p>
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-700">Hochgeladene Dateien:</h3>
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
    );
};

export default SummaryComponent;
