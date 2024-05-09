import React from "react";
import useStore from "../../store/store"; // Adjust the path as necessary

const Personal = () => {
    const { personalInfo, setPersonalInfo, setProjectDescription } = useStore();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo({ [name]: value });
    };

    return (
        <div className="personal-form bg-white p-4 rounded col-span-12">
            {[
                { label: "Name", name: "name", type: "text", placeholder: "Your name" },
                { label: "Business", name: "company", type: "text", placeholder: "Your business" },
                { label: "Email", name: "email", type: "email", placeholder: "Your email address" },
                { label: "Telephone", name: "phone", type: "text", placeholder: "Your phone number " },
                { label: "Message", name: "message", type: "textarea", placeholder: "your message" },
            ].map((field, index) => (
                <div key={index} className="lg:flex items-center mb-4">
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
                            className="flex-1 bg-lightGray w-full placeholder-transparent sm:placeholder-gray-500 lg:w-auto appearance-none  rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder={field.placeholder}
                        />
                    ) : (
                        <textarea
                            name={field.name}
                            id={field.name}
                            value={personalInfo[field.name]}
                            onChange={handleChange}
                            className="flex-1 bg-lightGray w-full placeholder-transparent sm:placeholder-gray-500 lg:w-auto appearance-none  rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
