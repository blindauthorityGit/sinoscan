import React from "react";
import useStore from "../../store/store"; // Adjust the path as necessary

const Personal = () => {
    const { personalInfo, setPersonalInfo } = useStore();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo({ [name]: value });
    };

    return (
        <div className="personal-form bg-white p-4 rounded col-span-12">
            {[
                { label: "Name", name: "name", type: "text", placeholder: "Ihr Name" },
                { label: "Firma", name: "company", type: "text", placeholder: "Ihr Unternehmen" },
                { label: "Email", name: "email", type: "email", placeholder: "Ihre E-Mail-Adresse" },
                { label: "Telefon", name: "phone", type: "text", placeholder: "Ihre Telefonnummer" },
                { label: "Nachricht", name: "message", type: "textarea", placeholder: "Ihre Nachricht" },
            ].map((field, index) => (
                <div key={index} className="flex items-center mb-4">
                    <label htmlFor={field.name} className="block text-gray-700 text-sm font-bold w-32">
                        {field.label}
                    </label>
                    {field.type !== "textarea" ? (
                        <input
                            type={field.type}
                            name={field.name}
                            id={field.name}
                            value={personalInfo[field.name]}
                            onChange={handleChange}
                            className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder={field.placeholder}
                        />
                    ) : (
                        <textarea
                            name={field.name}
                            id={field.name}
                            value={personalInfo[field.name]}
                            onChange={handleChange}
                            className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder={field.placeholder}
                            rows="4"
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default Personal;
