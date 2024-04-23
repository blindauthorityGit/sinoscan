// TextareaComponent.js
import React from "react";

const TextareaComponent = ({ value, onChange }) => {
    return (
        <div className="col-span-12">
            <textarea
                placeholder="Bitte beschreiben Sie Ihr Projekt, min. 50 Chars"
                rows="10"
                className="w-full p-8"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default TextareaComponent;
