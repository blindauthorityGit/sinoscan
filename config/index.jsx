import One from "../assets/1.jpg";
import Two from "../assets/2.jpg";
import Three from "../assets/3.jpg";
import Four from "../assets/4.jpg";
import Five from "../assets/5.jpg";
import Six from "../assets/6.jpg";
import Seven from "../assets/7.jpg";

// ICONS

import Produktdesign from "../assets/icons/produktdesign.svg";
import TechnischeGetaltung from "../assets/icons/technischeGestaltung.svg";
import Produktionsmanagement from "../assets/icons/produktionsManagement.svg";
import Logistik from "../assets/icons/logistik.svg";

import Idee from "../assets/icons/idee.svg";
import Skizze from "../assets/icons/skizze.svg";
import DetailiertesDesign from "../assets/icons/detailiertesDesign.svg";
import Prototyp from "../assets/icons/prototyp.svg";

export default {
    steps: [
        {
            id: 1,
            headline: "Welche Art von Service benötigen Sie?",
            subline: "Bitte wählen Sie den für Ihr Projekt am besten geeigneten Service aus:",
            image: One,
            multipleChoice: false,
            hasBoxes: true,
            boxes: [
                {
                    id: 1,
                    headline: "Produktdesign",
                    text: "Entwicklung von Konzepten und Designs für neue Produkte",
                    icon: Produktdesign,
                    selected: false,
                },
                {
                    id: 2,
                    headline: "Technische Gestaltung",
                    text: "Detaillierung und Optimierung von Produktdesigns für die Produktion",
                    icon: TechnischeGetaltung,
                    selected: false,
                },
                {
                    id: 3,
                    headline: "ProduktionsManagement",
                    text: "Überwachung und Management der Herstellungsprozesse",
                    icon: Produktionsmanagement,
                    selected: false,
                },
                {
                    id: 4,
                    headline: "Logistik und Lieferkette",
                    text: "Planung und Management der Lieferung von Fertigprodukten",
                    icon: Logistik,
                    selected: false,
                },
            ],
        },
        {
            id: 2,
            headline: "In welchem Stadium befindet sich Ihr Designkonzept?",
            subline: "Bitte wählen Sie den für Ihr Projekt am besten geeigneten Service aus:",

            image: Two,
            multipleChoice: true,
            boxes: [
                {
                    id: 1,
                    headline: "Idee",
                    text: "Nur eine grundlegende Idee oder Konzept",
                    icon: Idee,
                    selected: false,
                },
                {
                    id: 2,
                    headline: "Skizze / Entwurf",
                    text: "Handgezeichnete Skizzen oder einfache digitale Entwürfe vorhanden",
                    icon: Skizze,
                    selected: false,
                },
                {
                    id: 3,
                    headline: "Detailliertes Design",
                    text: "Detaillierte Designzeichnungen oder 3D-Modelle sind bereits erstellt",
                    icon: DetailiertesDesign,
                    selected: false,
                },
                {
                    id: 4,
                    headline: "Prototyp",
                    text: "Ein physischer oder funktionaler Prototyp wurde bereits entwickelt",
                    icon: Prototyp,
                    selected: false,
                },
            ],
        },
        {
            id: 3,
            headline: "Step 2 Headline",
            image: Three,
            multipleChoice: true,
            boxes: [
                {
                    id: 1,
                    text: "Option 1",
                    icon: "/path/to/icon1.svg",
                    selected: false,
                },
                {
                    id: 2,
                    text: "Option 2",
                    icon: "/path/to/icon2.svg",
                    selected: false,
                },
            ],
        },
        {
            id: 4,
            headline: "Step 2 Headline",
            image: "/path/to/image2.jpg",
            multipleChoice: true,
            boxes: [
                {
                    id: 1,
                    text: "Option 1",
                    icon: "/path/to/icon1.svg",
                    selected: false,
                },
                {
                    id: 2,
                    text: "Option 2",
                    icon: "/path/to/icon2.svg",
                    selected: false,
                },
            ],
        },
        {
            id: 5,
            headline: "Step 2 Headline",
            image: "/path/to/image2.jpg",
            multipleChoice: true,
            boxes: [
                {
                    id: 1,
                    text: "Option 1",
                    icon: "/path/to/icon1.svg",
                    selected: false,
                },
                {
                    id: 2,
                    text: "Option 2",
                    icon: "/path/to/icon2.svg",
                    selected: false,
                },
            ],
        },
        {
            id: 6,
            headline: "Step 2 Headline",
            image: "/path/to/image2.jpg",
            multipleChoice: true,
            boxes: [
                {
                    id: 1,
                    text: "Option 1",
                    icon: "/path/to/icon1.svg",
                    selected: false,
                },
                {
                    id: 2,
                    text: "Option 2",
                    icon: "/path/to/icon2.svg",
                    selected: false,
                },
            ],
        },
        {
            id: 7,
            headline: "Step 2 Headline",
            image: "/path/to/image2.jpg",
            multipleChoice: true,
            boxes: [
                {
                    id: 1,
                    text: "Option 1",
                    icon: "/path/to/icon1.svg",
                    selected: false,
                },
                {
                    id: 2,
                    text: "Option 2",
                    icon: "/path/to/icon2.svg",
                    selected: false,
                },
            ],
        },
        {
            id: 8,
            headline: "Step 2 Headline",
            image: "/path/to/image2.jpg",
            multipleChoice: true,
            boxes: [
                {
                    id: 1,
                    text: "Option 1",
                    icon: "/path/to/icon1.svg",
                    selected: false,
                },
                {
                    id: 2,
                    text: "Option 2",
                    icon: "/path/to/icon2.svg",
                    selected: false,
                },
            ],
        },
    ],
};
