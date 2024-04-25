// TextareaComponent.js
import React from "react";

const TextareaComponent = ({ value, onChange }) => {
    return (
        <div className="col-span-12">
            <textarea
                placeholder="Bitte beschreiben Sie Ihr Projekt, min. 50 Zeichen"
                rows="10"
                className="w-full p-4 lg:p-8"
                value={value}
                onChange={onChange}
            />
            <p className="text-primaryColor text-xs opacity-40"> {value.length} / 50</p>
        </div>
    );
};

export default TextareaComponent;
