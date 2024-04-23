// TextareaComponent.js
import React from "react";

const TextareaComponent = ({ value, onChange }) => {
    return <textarea value={value} onChange={onChange} />;
};

export default TextareaComponent;
