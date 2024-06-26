import axios from "axios";
import { verifyTokenAndGetEmail, updateSubscriptionStatus } from "../../config/firebase";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const { token } = req.query;

        console.log("Received token:", token);

        try {
            const email = await verifyTokenAndGetEmail(token);
            console.log("Email retrieved from token:", email);

            if (email) {
                await updateSubscriptionStatus(email);
                console.log("Subscription status updated for email:", email);

                // Call Mailchimp API to finalize the subscription
                const data = {
                    email_address: email,
                    status: "subscribed",
                };

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

                console.log("Subscription confirmed with Mailchimp:", response.data);
                res.status(200).send("Subscription confirmed successfully.");
            } else {
                console.error("Invalid or expired token");
                res.status(400).send("Invalid or expired token.");
            }
        } catch (error) {
            console.error("Error confirming subscription:", error.response ? error.response.data : error.message);
            res.status(500).send("Error confirming subscription.");
        }
    } else {
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
