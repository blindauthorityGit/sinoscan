import One from "../assets/1.jpg";
import Two from "../assets/2.jpg";
import Three from "../assets/3.jpg";
import Four from "../assets/4.jpg";
import Five from "../assets/5.jpg";
import Six from "../assets/6.jpg";
import Seven from "../assets/7.jpg";
import Eight from "../assets/8.jpg";

// ICONS

import Produktdesign from "../assets/icons/produktdesign.svg";
import TechnischeGetaltung from "../assets/icons/technischeGestaltung.svg";
import Produktionsmanagement from "../assets/icons/produktionsmanagement.svg";
import Logistik from "../assets/icons/logistik.svg";

import Idee from "../assets/icons/idee.svg";
import Skizze from "../assets/icons/skizze.svg";
import DetailiertesDesign from "../assets/icons/detailiertesDesign.svg";
import Prototyp from "../assets/icons/prototyp.svg";

import Benutzerfreundlichkeit from "../assets/icons/benutzerfreundlichkeit.svg";
import Aesthetic from "../assets/icons/aesthetic.svg";
import Material from "../assets/icons/material.svg";
import Kosten from "../assets/icons/kosten.svg";
import Innovation from "../assets/icons/innovation.svg";
import Ergonomie from "../assets/icons/ergonomie.svg";
import Langlebigkeit from "../assets/icons/langlebigkeit.svg";
import Skalierbarkeit from "../assets/icons/skalierbarkeit.svg";

import B2C from "../assets/icons/b2c.svg";
import B2B from "../assets/icons/b2b.svg";
import Nische from "../assets/icons/nische.svg";

export default {
    steps: [
        {
            id: 1,
            headline: "What type of service do you need?",
            subline: "Please select the service most suitable for your projea:",
            image: One,
            multipleChoice: false,
            hasBoxes: true,
            category: "services",
            boxes: [
                {
                    id: 1,
                    headline: "Product design",
                    text: "Development of concepts and designs for new products",
                    icon: Produktdesign,
                    selected: false,
                },
                {
                    id: 2,
                    headline: "Technical <br/> Design",
                    text: "Detailing and optimizing your product design for production",
                    icon: TechnischeGetaltung,
                    selected: false,
                },
                {
                    id: 3,
                    headline: "Production-<br/>management",
                    text: "Monitoring and management of manufacturing processes",
                    icon: Produktionsmanagement,
                    selected: false,
                },
                {
                    id: 4,
                    headline: "Logistics and<br/>  supply chain ",
                    text: "Planning and managing the delivery of finished products",
                    icon: Logistik,
                    selected: false,
                },
            ],
        },
        {
            id: 2,
            headline: "What stage is your design concept at?",
            subline: "Please select the service most suitable for your project:",
            image: Two,
            multipleChoice: false,
            category: "stages",
            boxes: [
                {
                    id: 1,
                    headline: "ldea",
                    text: "I have an idea or a concept",
                    icon: Idee,
                    selected: false,
                },
                {
                    id: 2,
                    headline: "Sketch / draft",
                    text: "I have hand-drawn Sketches or rough 3D designs available",
                    icon: Skizze,
                    selected: false,
                },
                {
                    id: 3,
                    headline: "Detailed design",
                    text: "I have detailed 3D drawing or files to be used",
                    icon: DetailiertesDesign,
                    selected: false,
                },
                {
                    id: 4,
                    headline: "Prototype",
                    text: "I have a prototype that needs to go into manufacturing",
                    icon: Prototyp,
                    selected: false,
                },
            ],
        },
        {
            id: 3,
            headline: "What specific design requirements do you have?",
            subline: "Please select all options that apply:",
            image: Three,
            multipleChoice: true,
            category: "requirements",
            boxes: [
                {
                    id: 1,
                    headline: "User-<br/>friendliness",
                    // text: "Nur eine grundlegende Idee oder Konzept",
                    icon: Benutzerfreundlichkeit,
                    selected: false,
                },
                {
                    id: 2,
                    headline: "Aesthetics and style",
                    // text: "Handgezeichnete Skizzen oder einfache digitale Entwürfe vorhanden",
                    icon: Aesthetic,
                    selected: false,
                },
                {
                    id: 3,
                    headline: "Materials and sustainability",
                    // text: "Detaillierte Designzeichnungen oder 3D-Modelle sind bereits erstellt",
                    icon: Material,
                    selected: false,
                },
                {
                    id: 4,
                    headline: "Cost<br/>optimization",
                    // text: "Ein physischer oder funktionaler Prototyp wurde bereits entwickelt",
                    icon: Kosten,
                    selected: false,
                },
                {
                    id: 5,
                    headline: "Innovative technologies",
                    // text: "Nur eine grundlegende Idee oder Konzept",
                    icon: Innovation,
                    selected: false,
                },
                {
                    id: 6,
                    headline: "Ergonomics and comfort",
                    // text: "Handgezeichnete Skizzen oder einfache digitale Entwürfe vorhanden",
                    icon: Ergonomie,
                    selected: false,
                },
                {
                    id: 7,
                    headline: "Longevity and durability",
                    // text: "Detaillierte Designzeichnungen oder 3D-Modelle sind bereits erstellt",
                    icon: Langlebigkeit,
                    selected: false,
                },
                {
                    id: 8,
                    headline: "Scalability",
                    // text: "Ein physischer oder funktionaler Prototyp wurde bereits entwickelt",
                    icon: Skalierbarkeit,
                    selected: false,
                },
            ],
        },
        {
            id: 4,
            headline: "Which market or target group is the product intended for?",
            image: Four,
            multipleChoice: true,
            category: "market",
            boxes: [
                {
                    id: 1,
                    headline: "B2C",
                    text: "Business to consumer",
                    icon: B2C,
                    selected: false,
                },
                {
                    id: 2,
                    headline: "B2B",
                    text: "Business to business",
                    icon: B2B,
                    selected: false,
                },
                {
                    id: 3,
                    headline: "Specialized<br/> industry ",
                    text: "Niche product",
                    icon: Nische,
                    selected: false,
                },
            ],
        },
        {
            id: 5,
            headline: "Please enter a short description of your project.",
            image: Five,
            multipleChoice: false,
            component: "textarea", // Indicates this step should render a Dropzone component
        },
        {
            id: 6,
            headline: "Do you have existing design materials or documents you would like to share with us?",
            subline:
                "Please note that the maximum file size is 20 MB and the following file formats are supported: PDF, DOCX, JPEG, PNG, TIFF.",
            image: Six,
            multipleChoice: false,
            component: "dropzone", // Indicates this step should render a Dropzone component
        },
        {
            id: 7,
            headline: "What is your budget & time frame for this design project?",
            // subline:
            //     "Bitte beachten Sie, dass die maximale Dateigröße 20 MB beträgt und die folgenden Dateiformate unterstützt werden: PDF, DOCX, JPEG, PNG, TIFF.",
            image: Seven,
            multipleChoice: false,
            component: "options", // Indicates this step should render a Dropzone component
        },
        {
            id: 9,
            headline: "Almost there! Please provide your details.",
            image: Eight,
            multipleChoice: false,
            component: "personal", // Indicates this step should render a Dropzone component
        },
        {
            id: 10,
            headline: "Please check your data",
            image: Eight,
            multipleChoice: false,
            component: "summary", // Indicates this step should render a Dropzone component
        },
    ],
};
