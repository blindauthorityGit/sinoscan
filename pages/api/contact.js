import nodemailer from "nodemailer";

import { saveToFirestore } from "../../config/firebase";

export default async function handler(req, res) {
    console.log(req.body);
    if (req.method === "POST") {
        try {
            // Save to Firestore

            saveToFirestore(req.body);

            // Set up Nodemailer
            const transporter = nodemailer.createTransport({
                host: process.env.NEXT_DEV === "true" ? "smtp.world4you.com" : "smtp.world4you.com",
                port: 587,
                secure: false,
                auth: {
                    user:
                        process.env.NEXT_DEV === "true" ? process.env.NEXT_W4YUSER : process.env.NEXT_MAIL_BUCHUNG_LIVE,
                    pass:
                        process.env.NEXT_DEV === "true" ? process.env.NEXT_W4YPASSWORD : process.env.NEXT_MAIL_PW_LIVE,
                },
            });

            const userMailOptions = {
                from: "office@atelierbuchner.at",
                // from: "info@mainglueckskind.de",
                to: req.body.personalInfo.email,
                subject: "Anfrage Bestätigung",
                // text: `Sehr geehrte/r ${req.body.personalInfo.name}, vielen Dank für Deine Reservierung in unserem Cafe am ${new Date(
                //     req.body.date
                // ).toLocaleDateString("de-DE")} um ${req.body.timeSlot}! Wir freuen uns auf dich! Main Glückskind`,
                html: `
                <p>Sehr geehrte/r ${req.body.personalInfo.name},</p>
                <p>vielen Dank für Ihre Anfrage!</p>
                <p>Ein Mitarbeiter von uns wird sich in Kürze mit Ihnen in Verbindung stellen.</p>
                <p>Mit freundlichen Grüßen</p>
                <p>Sinoscan GmbH</p>
            `,
            };

            const adminMailOptions = {
                from: process.env.NEXT_DEV === "true" ? process.env.NEXT_W4YUSER : process.env.NEXT_W4YUSER,
                to: process.env.NEXT_DEV === "true" ? "office@atelierbuchner.at" : "office@atelierbuchner.at", // Replace with your admin email
                subject: `Projektanfrage von ${req.body.personalInfo.name}`,
                html: `
                    <h1>Projektanfrage Details</h1>
                    <h2>Persönliche Informationen</h2>
                    <p><strong>Name:</strong> ${req.body.personalInfo.name}</p>
                    <p><strong>Firma:</strong> ${req.body.personalInfo.company}</p>
                    <p><strong>Email:</strong> ${req.body.personalInfo.email}</p>
                    <p><strong>Telefon:</strong> ${req.body.personalInfo.phone}</p>
                    <p><strong>Nachricht:</strong> ${req.body.personalInfo.message}</p>
            
                    <h2>Projektdetails</h2>
                    <p><strong>Budgetoption:</strong> ${req.body.budgetOption}</p>
                    <p><strong>Zeitrahmen:</strong> ${req.body.timeframeOption}</p>
                    <p><strong>Projektbeschreibung:</strong> ${req.body.projectDescription}</p>
                    <p><strong>Zusätzliche Notizen:</strong> ${req.body.textAreaValue}</p>
            
                    <h2>Ausgewählte Services</h2>
                    <ul>${req.body.selectedServices.map((service) => `<li>${service}</li>`).join("")}</ul>
            
                    <h2>Stadium des Konzepts</h2>
                    <ul>${req.body.selectedStages.map((stage) => `<li>${stage}</li>`).join("")}</ul>
            
                    <h2>Spezifische Anforderungen</h2>
                    <ul>${req.body.selectedRequirements.map((requirement) => `<li>${requirement}</li>`).join("")}</ul>
            
                    <h2>Zielgruppe / Markt</h2>
                    <ul>${req.body.selectedMarket.map((market) => `<li>${market}</li>`).join("")}</ul>
            
                    <h2>Hochgeladene Dateien</h2>
                    <p>Total Upload Size: ${(req.body.totalFileSize / 1024 / 1024).toFixed(2)} MB</p>
                    <ul>
                        ${req.body.files
                            .map(
                                (file) => `
                            <li>${file.path} - ${(file.size / 1024 / 1024).toFixed(2)} MB</li>
                        `
                            )
                            .join("")}
                    </ul>
                `,
            };

            // Send emails
            await transporter.sendMail(userMailOptions);
            await transporter.sendMail(adminMailOptions);

            res.status(200).json({ message: "Anmeldung erfolgreich gespeichert und bestätigt" });
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ error: "Fehler bei der Verarbeitung Ihrer Anfrage" });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
