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
            headline: "Welche Art von Service benötigen Sie?",
            subline: "Bitte wählen Sie den für Ihr Projekt am besten geeigneten Service aus:",
            image: One,
            multipleChoice: false,
            hasBoxes: true,
            category: "services",
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
                    headline: "Technische <br/> Gestaltung",
                    text: "Detaillierung und Optimierung von Produktdesigns für die Produktion",
                    icon: TechnischeGetaltung,
                    selected: false,
                },
                {
                    id: 3,
                    headline: "Produktions-<br/>Management",
                    text: "Überwachung und Management der Herstellungsprozesse",
                    icon: Produktionsmanagement,
                    selected: false,
                },
                {
                    id: 4,
                    headline: "Logistik und<br/>  Lieferkette",
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
            multipleChoice: false,
            category: "stages",
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
            headline: "Welche spezifischen Anforderungen haben Sie an das Design?",
            subline: "Bitte wählen Sie alle zutreffenden Optionen aus:",
            image: Three,
            multipleChoice: true,
            category: "requirements",
            boxes: [
                {
                    id: 1,
                    headline: "Benutzerfreundlichkeit",
                    // text: "Nur eine grundlegende Idee oder Konzept",
                    icon: Benutzerfreundlichkeit,
                    selected: false,
                },
                {
                    id: 2,
                    headline: "Ästhetik und Stil",
                    // text: "Handgezeichnete Skizzen oder einfache digitale Entwürfe vorhanden",
                    icon: Aesthetic,
                    selected: false,
                },
                {
                    id: 3,
                    headline: "Materialien und Nachhaltigkeit",
                    // text: "Detaillierte Designzeichnungen oder 3D-Modelle sind bereits erstellt",
                    icon: Material,
                    selected: false,
                },
                {
                    id: 4,
                    headline: "Kostenoptimierung",
                    // text: "Ein physischer oder funktionaler Prototyp wurde bereits entwickelt",
                    icon: Kosten,
                    selected: false,
                },
                {
                    id: 5,
                    headline: "Innovative Technologien",
                    // text: "Nur eine grundlegende Idee oder Konzept",
                    icon: Innovation,
                    selected: false,
                },
                {
                    id: 6,
                    headline: "Ergonomie und Komfort",
                    // text: "Handgezeichnete Skizzen oder einfache digitale Entwürfe vorhanden",
                    icon: Ergonomie,
                    selected: false,
                },
                {
                    id: 7,
                    headline: "Langlebigkeit und Haltbarkeit",
                    // text: "Detaillierte Designzeichnungen oder 3D-Modelle sind bereits erstellt",
                    icon: Langlebigkeit,
                    selected: false,
                },
                {
                    id: 8,
                    headline: "Skalierbarkeit",
                    // text: "Ein physischer oder funktionaler Prototyp wurde bereits entwickelt",
                    icon: Skalierbarkeit,
                    selected: false,
                },
            ],
        },
        {
            id: 4,
            headline: "Für welchen Markt oder welche Zielgruppe ist das Produkt bestimmt?",
            image: Four,
            multipleChoice: true,
            category: "market",
            boxes: [
                {
                    id: 1,
                    headline: "B2C",
                    text: "Verbrauchermarkt",
                    icon: B2C,
                    selected: false,
                },
                {
                    id: 2,
                    headline: "B2B",
                    text: "Geschäftsmarkt",
                    icon: B2B,
                    selected: false,
                },
                {
                    id: 3,
                    headline: "Spezialisierte Branche",
                    text: "oder Nische",
                    icon: Nische,
                    selected: false,
                },
            ],
        },
        {
            id: 5,
            headline: "Bitte geben Sie eine kurze Beschreibung Ihres Projekts ein.",
            image: Five,
            multipleChoice: false,
            component: "textarea", // Indicates this step should render a Dropzone component
        },
        {
            id: 6,
            headline: "Haben Sie bestehende Designmaterialien oder Dokumente, die Sie mit uns teilen möchten?",
            subline:
                "Bitte beachten Sie, dass die maximale Dateigröße 20 MB beträgt und die folgenden Dateiformate unterstützt werden: PDF, DOCX, JPEG, PNG, TIFF.",
            image: Six,
            multipleChoice: false,
            component: "dropzone", // Indicates this step should render a Dropzone component
        },
        {
            id: 7,
            headline: "Was ist Ihr Budget & Zeitrahmen für dieses Designprojekt?",
            // subline:
            //     "Bitte beachten Sie, dass die maximale Dateigröße 20 MB beträgt und die folgenden Dateiformate unterstützt werden: PDF, DOCX, JPEG, PNG, TIFF.",
            image: Seven,
            multipleChoice: false,
            component: "options", // Indicates this step should render a Dropzone component
        },
        {
            id: 9,
            headline: "Fast geschafft! Geben Sie bitte noch Ihre Daten an.",
            image: Eight,
            multipleChoice: false,
            component: "personal", // Indicates this step should render a Dropzone component
        },
        {
            id: 10,
            headline: "Bitte prüfen Sie Ihre Daten",
            image: Eight,
            multipleChoice: false,
            component: "summary", // Indicates this step should render a Dropzone component
        },
    ],
};
