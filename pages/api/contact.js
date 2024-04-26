import nodemailer from "nodemailer";
import axios from "axios";

import { saveToFirestore, uploadFiles } from "../../config/firebase";

async function subscribeToNewsletter(email, firstName, lastName) {
    const data = {
        email_address: email,
        status: "subscribed",
        // merge_fields: {
        //     FNAME: firstName,
        //     LNAME: lastName,
        // },
    };

    try {
        const response = await axios.post(
            `https://${process.env.NEXT_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.NEXT_LIST_ID}/members/`,
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.NEXT_MAILCHIMP_API}`,
                },
            }
        );
        console.log("DREINNEN", response.data);
        return response.data;
    } catch (error) {
        console.error("Mailchimp Error:", error.response.data);
        throw new Error("Failed to subscribe to newsletter.");
    }
}

export default async function handler(req, res) {
    console.log(req.body, req.body.personalInfo.email, req.body.personalInfo.firstName, req.body.personalInfo.lastName);
    if (req.method === "POST") {
        try {
            // Save to Firestore

            saveToFirestore(req.body);
            // uploadFiles()
            if (req.body.newsletterSubscribed) {
                await subscribeToNewsletter(req.body.personalInfo.email);
            }

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
                to: req.body.personalInfo.email,
                subject: "Anfrage Bestätigung",
                html: `
                    <p>Sehr geehrte/r ${req.body.personalInfo.name},</p>
                    <p>vielen Dank für Ihre Anfrage!</p>
                    <p>Ein Mitarbeiter von uns wird sich in Kürze mit Ihnen in Verbindung setzen.</p>
              
                    <br>
                    <p>Viele Grüße / Best Regards,</p>
                    <p><strong>Tanja</strong></p>
                    <p><strong>SinoScan | Deutschland</strong></p>
                    <p>SinoScan Design | Engineering | Manufacturing</p>
                    <img src="https://sinoscan.vercel.app/logo.jpg" style="width: 100px; height: auto;"/>
                    <p><strong>TEL</strong> +49 6103 8055685 | <strong>MOBIL</strong> +49 176 31144326 | <strong>MAIL</strong> tanja.behnisch@sinoscan.com | <strong>WEB</strong> www.sinoscan.de</p>
                `,
            };

            const adminMailOptions = {
                from: process.env.NEXT_DEV === "true" ? process.env.NEXT_W4YUSER : process.env.NEXT_W4YUSER,
                to: process.env.NEXT_DEV === "true" ? "contact@sabocon.com" : "office@atelierbuchner.at", // Replace with your admin email
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
                    <ul>${req.body.fileUrls.map((url) => `<li><a href="${url}">${url}</a></li>`).join("")}
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

{
    /* <ul>
${req.body.files
    .map(
        (file) => `
    <li>${file.path} - ${(file.size / 1024 / 1024).toFixed(2)} MB</li>
`
    )
    .join("")}
</ul> */
}
