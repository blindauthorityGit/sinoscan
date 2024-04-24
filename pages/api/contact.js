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

            // const adminMailOptions = {
            //     from: process.env.NEXT_DEV === "true" ? process.env.NEXT_W4YUSER : process.env.NEXT_MAIL_BUCHUNG_LIVE,
            //     to: process.env.NEXT_DEV === "true" ? "office@atelierbuchner.at" : req.body.trainerEmail, // Replace with your admin email
            //     cc: "info@mainglueckskind.de", // CC email
            //     subject: `Buchung von ${req.body.name} für ${req.body.kurs} am ${req.body.date}`,
            //     // text: `...`, // Your Text email content for admin
            //     html: `
            //             <p><strong>Kurs:</strong> ${req.body.kurs}</p>
            //             <p><strong>Name:</strong> ${req.body.name}</p>
            //             <p><strong>Email:</strong> ${req.body.email}</p>
            //             <p><strong>Telefon:</strong> ${req.body.phone}</p>
            //             ${req.body.birthDate ? `<p><strong>Geburtsdatum:</strong> ${req.body.birthDate}</p>` : ""}
            //             ${req.body.siblings ? `<p><strong>Geschwister:</strong> ${req.body.siblings}</p>` : ""}
            //             ${req.body.twins ? `<p><strong>Zwillinge:</strong> ${req.body.twins}</p>` : ""}
            //             <p><strong>Termin:</strong> ${req.body.date}</p>
            //             <p><strong>Nachricht:</strong><br/> ${
            //                 req.body.message ? req.body.message.replace(/\n/g, "<br>") : "keine Nachricht angegeben"
            //             }</p>`,
            // };

            // Send emails
            await transporter.sendMail(userMailOptions);
            // await transporter.sendMail(adminMailOptions);

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
