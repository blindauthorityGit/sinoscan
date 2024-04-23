import React from "react";
//COMPONENTS
import { CoverImage } from "../images";

//FUNCTIONS
import urlFor from "../../functions/urlFor";

const FullWidthSectionBGImage = (props) => {
    return (
        <div
            className={`${props.klasse} w-full py-12 lg:py-64 h-screen bg-cover bg-center`}
            style={{ backgroundImage: "url(" + urlFor(props.image) + ")" }}
        >
            <div className="container mx-auto grid grid-cols-12 relative">{props.children}</div>
        </div>
    );
};

export default FullWidthSectionBGImage;
