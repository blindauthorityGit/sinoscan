import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            {/* Google Analytics Script */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-PSQDNHSPTV"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-PSQDNHSPTV');
                        `,
                }}
            />
            {/* End Google Analytics Script */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
                rel="stylesheet"
            />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
