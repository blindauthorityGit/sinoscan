import nodemailer from "nodemailer";
import axios from "axios";

import { saveToFirestore, uploadFile, moveToPermanentStorage } from "../../config/firebase";

async function subscribeToNewsletter(email, name, phone, company, service, stadium, anforderungen, zielgruppe) {
    const data = {
        email_address: email,
        status: "subscribed",
        // Uncomment and complete merge_fields if you want to use them
        merge_fields: {
            FNAME: name.split(" ")[0],
            LNAME: name.split(" ")[1],
            PHONE: phone,
            COMPANY: company,
            SERVICE: service,
            STADIUM: stadium,
            REQS: anforderungen.join(", "),
            ZIELGRUPPE: zielgruppe.join(", "),
        },
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
        console.log("Subscription successful", response.data);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            const errorData = error.response.data;
            // Mailchimp error code for already existing subscriber is 'Member Exists'
            if (errorData.title === "Member Exists") {
                console.log("Subscriber already exists, no action taken.");
                return { status: "already_subscribed", detail: errorData.detail };
            } else {
                console.error("Mailchimp Error:", errorData.detail);
                throw new Error("Failed to subscribe to newsletter: " + errorData.detail);
            }
        } else {
            throw new Error("Failed to connect to Mailchimp.");
        }
    }
}

export default async function handler(req, res) {
    console.log(req.body, req.body.personalInfo.email, req.body.personalInfo.firstName, req.body.personalInfo.lastName);
    if (req.method === "POST") {
        try {
            // Save to Firestore
            // const { fileUrls } = req.body;

            // if (fileUrls && fileUrls.length > 0) {
            //     const permanentUrls = await moveToPermanentStorage(fileUrls);
            //     console.log("Files moved to permanent storage:", permanentUrls);
            //     // Optionally add permanent URLs to Firestore or send in the email
            // }

            saveToFirestore(req.body);
            // uploadFiles()
            if (req.body.newsletterSubscribed) {
                await subscribeToNewsletter(
                    req.body.personalInfo.email,
                    req.body.personalInfo.name,
                    req.body.personalInfo.phone,
                    req.body.personalInfo.company,
                    req.body.selectedServices[0],
                    req.body.selectedStages[0],
                    req.body.selectedRequirements,
                    req.body.selectedMarket
                );
            }

            // Set up Nodemailer
            const transporter = nodemailer.createTransport({
                host: process.env.NEXT_DEV === "true" ? "smtp.world4you.com" : "smtp.office365.com",
                port: 587,
                secure: false,
                auth: {
                    user: process.env.NEXT_DEV === "true" ? process.env.NEXT_W4YUSER : process.env.NEXT_SINOSCAN_EMAIL,
                    pass:
                        process.env.NEXT_DEV === "true"
                            ? process.env.NEXT_W4YPASSWORD
                            : process.env.NEXT_SINOSCAN_EMAIL_PASSWORD,
                },
            });

            const userMailOptions = {
                from: process.env.NEXT_DEV === "true" ? "office@atelierbuchner.at" : process.env.NEXT_SINOSCAN_EMAIL,
                to: req.body.personalInfo.email,
                subject: "Request Confirmation",
                html: `
                    <p>Dear ${req.body.personalInfo.name},</p>
                    <p>Thank you for your request!</p>
                    <p>One of our employees will get in touch with you shortly.</p>
    
                    <br>
                    <p>Best regards,</p>
                    <p><strong>Malene Newman</strong></p>
                    <p><strong>SinoScan | US</strong></p>
                    <p>SinoScan Design | Engineering | Manufacturing</p>
                    <img src="https://sinoscan.vercel.app/logo.jpg" style="width: 100px; height: auto;"/>
                    <p><strong>TEL</strong> +1 630-691-9546| <strong>MAIL</strong> malene.newman@sinoscan.com | <strong>WEB</strong> www.sinoscan.com</p>
                `,
            };

            const adminMailOptions = {
                from: process.env.NEXT_DEV === "true" ? process.env.NEXT_W4YUSER : process.env.NEXT_SINOSCAN_EMAIL,
                to: process.env.NEXT_DEV === "true" ? "office@atelierbuchner.at" : "malene.newman@sinoscan.com", // Replace with your admin email
                subject: `Project Inquiry from ${req.body.personalInfo.name}`,
                html: `
                    <h1>Project Inquiry Details</h1>
                    <h2>Personal Information</h2>
                    <p><strong>Name:</strong> ${req.body.personalInfo.name}</p>
                    <p><strong>Company:</strong> ${req.body.personalInfo.company}</p>
                    <p><strong>Email:</strong> ${req.body.personalInfo.email}</p>
                    <p><strong>Phone:</strong> ${req.body.personalInfo.phone}</p>
                    <p><strong>Message:</strong> ${req.body.personalInfo.message}</p>
            
                    <h2>Project Details</h2>
                    <p><strong>Budget Option:</strong> ${req.body.budgetOption}</p>
                    <p><strong>Timeframe:</strong> ${req.body.timeframeOption}</p>
                    <p><strong>Project Description:</strong> ${req.body.projectDescription}</p>
                    <p><strong>Additional Notes:</strong> ${req.body.textAreaValue}</p>
            
                    <h2>Selected Services</h2>
                    <ul>${req.body.selectedServices.map((service) => `<li>${service}</li>`).join("")}</ul>
            
                    <h2>Concept Stage</h2>
                    <ul>${req.body.selectedStages.map((stage) => `<li>${stage}</li>`).join("")}</ul>
            
                    <h2>Specific Requirements</h2>
                    <ul>${req.body.selectedRequirements.map((requirement) => `<li>${requirement}</li>`).join("")}</ul>
            
                    <h2>Target Audience / Market</h2>
                    <ul>${req.body.selectedMarket.map((market) => `<li>${market}</li>`).join("")}</ul>
            
                    <h2>Uploaded Files</h2>
                    <p>Total Upload Size: ${(req.body.totalFileSize / 1024 / 1024).toFixed(2)} MB</p>
                    <ul>${req.body.fileUrls.map((url) => `<li><a href="${url}">${url}</a></li>`).join("")}</ul>
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
