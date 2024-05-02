// components/Meta.js
import Head from "next/head";

const Meta = ({ data }) => {
    return (
        <Head>
            <title>Produktentwicklung und Produktion | SinoScan DE</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />

            {/* Favicon Setup */}
            <link
                rel="icon"
                href="https://sinoscan.de/wp-content/uploads/2019/07/sinoscan-icon-150x150.png"
                sizes="32x32"
            />
            <link
                rel="icon"
                href="https://sinoscan.de/wp-content/uploads/2019/07/sinoscan-icon-200x200.png"
                sizes="192x192"
            />
            {/* <link rel="manifest" href="/site.webmanifest" /> */}
            <link
                rel="apple-touch-icon"
                href="https://sinoscan.de/wp-content/uploads/2019/07/sinoscan-icon-200x200.png"
            />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
            {/* End Favicon Setup */}
            <meta
                name="description"
                content="Brauchen Sie Unterstützung bei der Produktentwicklung oder Produktion? Dann kontaktieren Sie uns und lassen Sie uns besprechen, wie wir Ihnen bei der Realisierung Ihres Produkts helfen können."
            />
            {/* {data.mainSEO.keywords ? (
                <meta name="keywords" content={data.mainSEO.keywords.map((e) => e)} />
            ) : (
                <meta name="keywords" content="MainGlücksKind" />
            )} */}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="SinoScan"></meta>
            {/* <meta property="og:url" content={url} /> */}
            <meta property="og:title" content="Produktentwicklung und Produktion | SinoScan DE" />
            <meta
                property="og:description"
                content="Brauchen Sie Unterstützung bei der Produktentwicklung oder Produktion? Dann kontaktieren Sie uns und lassen Sie uns besprechen, wie wir Ihnen bei der Realisierung Ihres Produkts helfen können."
            />
            {/* Use ternary operator to check for ogImage existence */}
            <meta
                property="og:image"
                content="https://sinoscan.de/wp-content/uploads/2024/01/SinoScan-map-_-2024-_-German.webp"
            />
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            {/* <meta property="twitter:url" content={url} /> */}
            <meta property="twitter:title" content="Produktentwicklung und Produktion | SinoScan DE" />
            <meta
                property="twitter:description"
                content="Brauchen Sie Unterstützung bei der Produktentwicklung oder Produktion? Dann kontaktieren Sie uns und lassen Sie uns besprechen, wie wir Ihnen bei der Realisierung Ihres Produkts helfen können."
            />
            <meta
                property="twitter:image"
                content="https://sinoscan.de/wp-content/uploads/2024/01/SinoScan-map-_-2024-_-German.webp"
            />
        </Head>
    );
};

export default Meta;
