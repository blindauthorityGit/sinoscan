import React from "react";

const FullWidthSection = (props) => {
    return (
        <div className={`${props.klasse} w-full py-12 lg:py-16`} id={props.id}>
            <div className="container mx-auto grid grid-cols-12">{props.children}</div>
        </div>
    );
};

export default FullWidthSection;
