import React from "react";
import useStore from "../../store/store"; // Adjust the path as necessary

const OptionsComponent = () => {
    const { budgetOption, setBudgetOption, timeframeOption, setTimeframeOption, textAreaValue, setTextAreaValue } =
        useStore();
    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
        console.log(event.target.value);
    };

    const handleBudgetChange = (event) => {
        setBudgetOption(event.target.value);
    };

    const handleTimeframeChange = (event) => {
        setTimeframeOption(event.target.value);
    };

    const handleTextChange = (event) => {
        setTextAreaValue(event.target.value);
    };

    const radioStyle = {
        display: "inline-block",
        position: "relative",
        paddingLeft: "35px",
        marginBottom: "12px",
        cursor: "pointer",
        fontSize: "22px",
        userSelect: "none",
    };

    const inputStyle = {
        position: "absolute",
        opacity: 0,
        cursor: "pointer",
        height: 0,
        width: 0,
    };

    const checkmarkStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        height: "25px",
        width: "25px",
        backgroundColor: "#eee",
        borderRadius: "50%",
    };

    const checkmarkInnerStyle = {
        position: "absolute",
        top: "6px",
        left: "6px",
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        backgroundColor: "green",
    };

    return (
        <>
            <div className="options-component col-span-12">
                <div className="radio-options bg-white p-4">
                    <p className="font-sans text-primary text-sm mb-4">
                        Bitte geben Sie eine Budgetspanne an, die für Ihr Projekt vorgesehen ist.
                        <br /> Dies hilft uns, eine Lösung zu finden, die Ihren finanziellen Möglichkeiten entspricht.
                    </p>

                    {["Unter 5.000 €", "5.000 € - 10.000 €", "10.000 € - 20.000 €", "Über 20.000 €"].map((option) => (
                        <label
                            key={option}
                            className="inline-block relative pl-8 mb-3 cursor-pointer text-lg mr-6 select-none"
                        >
                            <input
                                type="radio"
                                name="budget"
                                value={option}
                                checked={budgetOption === option}
                                onChange={handleBudgetChange}
                                className="absolute opacity-0 cursor-pointer h-0 w-0"
                            />
                            <span className="absolute top-0 left-0 h-6 w-6 bg-gray-200 rounded-full">
                                {budgetOption === option && <span style={checkmarkInnerStyle} />}
                            </span>
                            {option}
                        </label>
                    ))}
                </div>
            </div>
            <div className="options-component col-span-12 lg:col-span-6 lg:order-1">
                <div className="radio-options bg-white p-4">
                    <p className="font-sans text-primary text-sm mb-4">Bis wann benötigen Sie das fertige Design?</p>

                    {["1 - 3 Monate", "3 - 6 Monate", "flexibel"].map((option) => (
                        <label
                            key={option}
                            className="inline-block relative pl-8 mb-3 cursor-pointer text-lg mr-6 select-none"
                        >
                            <input
                                type="radio"
                                name="timeframe"
                                value={option}
                                checked={timeframeOption === option}
                                onChange={handleTimeframeChange}
                                className="absolute opacity-0 cursor-pointer h-0 w-0"
                            />
                            <span className="absolute top-0 left-0 h-6 w-6 bg-gray-200 rounded-full">
                                {timeframeOption === option && <span style={checkmarkInnerStyle} />}
                            </span>
                            {option}
                        </label>
                    ))}
                </div>
            </div>
            <div className="options-component col-span-12 lg:col-span-6 lg:order-0">
                <div className="radio-options bg-white p-4">
                    <p className="font-sans text-primary text-sm mb-4">
                        Haben Sie spezifische Meilensteine oder Deadlines, die wir berücksichtigen sollten?
                    </p>
                    <textarea
                        value={textAreaValue}
                        onChange={handleTextChange}
                        placeholder="Bitte geben Sie Details ein..."
                        className="mt-4 w-full p-2 border rounded"
                        style={{ minHeight: "100px" }}
                    />
                </div>
            </div>
        </>
    );
};

export default OptionsComponent;
