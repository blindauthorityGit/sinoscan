import React from "react";

const datenschutz = () => {
    return (
        <div>
            <div>
                <h2 className="mb-4">Hinweise zur Datenverarbeitung</h2>
                <p>
                    Mit diesen Hinweisen zur Datenverarbeitung informieren wir Sie gemäß unseren Informationspflichten
                    nach der Datenschutz-Grundverordnung (DSGVO) über die Einzelheiten der Verarbeitung Ihrer
                    personenbezogenen Daten, wenn Sie unsere Website besuchen oder mit uns in einer Geschäftsbeziehung
                    stehen oder sich eine solche anbahnt.
                </p>

                <h3 className="mb-4">Name und Kontaktdaten der für die Verarbeitung Verantwortlichen</h3>
                <address>
                    SinoScan GmbH
                    <br />
                    Otto-Hahn-Straße 36
                    <br />
                    63303 Dreieich
                    <br />
                    <br />
                    Telefon: <a href="tel:+4961038055685">+49 6103 805 56 85</a>
                    <br />
                    E-Mail: <a href="mailto:info@sinoscan.de">info@sinoscan.de</a>
                </address>
                <p>
                    Wenn Sie Fragen zum Datenschutz haben, kontaktieren Sie uns gerne unter{" "}
                    <a href="mailto:info@sinoscan.de">info@sinoscan.de</a>.
                </p>

                <h3 className="mb-4">Verarbeitung personenbezogener Daten beim Besuch der Website</h3>
                <h4 className="mb-4">2.1 Verarbeitung von Browserdaten</h4>
                <p>
                    Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser
                    automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden
                    temporär in einem sog. Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun
                    erfasst und bis zur automatisierten Löschung gespeichert:
                </p>
                <ul>
                    <li>IP-Adresse des anfragenden Rechners,</li>
                    <li>Datum und Uhrzeit des Zugriffs,</li>
                    <li>Name und URL der abgerufenen Datei,</li>
                    <li>Website, von der aus der Zugriff erfolgt (Referrer-URL),</li>
                    <li>
                        verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres
                        Access-Providers.
                    </li>
                </ul>
                <p>
                    Die genannten Daten werden durch uns verarbeitet, um einen reibungslosen Verbindungsaufbau der
                    Website, eine komfortable Nutzung und Stabilität unserer Website zu gewährleisten.
                </p>
                <p>
                    Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser
                    berechtigtes Interesse folgt aus oben aufgelisteten Zwecken. In keinem Fall verwenden wir die
                    erhobenen Daten zu dem Zweck, Rückschlüsse auf Ihre Person zu ziehen.
                </p>
                <p>
                    Die in Logfiles gespeicherten Browserdaten werden spätestens sieben Tage nach ihrer Erhebung
                    automatisch gelöscht.
                </p>

                <h4 className="mb-4">2.2 Verarbeitung von personenbezogenen Daten zur Kontaktaufnahme</h4>
                <p>
                    Bei einem Wunsch nach Kontaktaufnahme oder Fragen jeglicher Art bieten wir Ihnen die Möglichkeit,
                    mit uns über ein auf der Website bereitgestelltes Formular Kontakt aufzunehmen. Dabei ist die Angabe
                    einer gültigen E-Mail-Adresse und einer Nachricht erforderlich, damit wir wissen, von wem die
                    Anfrage stammt und um diese beantworten zu können.
                </p>
                <p>
                    Alternativ können Sie über die auf unserer Website angegeben E-Mail-Adressen und per Telefon Kontakt
                    zu uns aufnehmen. Dabei werden die an uns übermittelten Daten je nach Erforderlichkeit von uns
                    verarbeitet. Die Kontaktaufnahme und Bereitstellung von Daten erfolgen freiwillig.
                </p>
                <p>
                    Die Datenverarbeitung zum Zwecke der Kontaktaufnahme mit uns erfolgt nach Art. 6 Abs. 1 S. 1 lit. f
                    DSGVO. Unser berechtigtes Interesse liegt in der Bearbeitung und Beantwortung Ihrer Kontaktanfrage.
                    Zielt die Kontaktaufnahme auf den Abschluss eines Vertragsverhältnisses mit uns ab, so ist
                    zusätzliche Rechtsgrundlage Art. 6 Abs. 1 S. 1 lit. b DSGVO, da die Datenverarbeitung als
                    vorvertragliche Maßnahme erforderlich ist.
                </p>
                <p>
                    Die für die Benutzung des Kontaktformulars von uns erhobenen personenbezogenen Daten werden nach
                    Erledigung der von Ihnen gestellten Anfrage automatisch gelöscht, spätestens nach Ablauf von drei
                    Jahren zum Ende des Kalenderjahres, es sei denn der Löschung stehen gesetzliche Aufbewahrungsfristen
                    etwas aus einer laufenden Geschäftsbeziehung entgegen.
                </p>
                <p>
                    Die im Rahmen der Geschäftsanbahnung oder -beziehung erhobenen Daten werden gespeichert, so lange
                    dies für die Durchführung der Vertragsbeziehung erforderlich ist. Darüber hinaus archivieren wir die
                    Daten für die Erfüllung gesetzlicher Aufbewahrungsfristen. Diese betragen in der Regel zehn Jahre
                    für buchungsrelevante Daten und sechs Jahre für sonstige geschäftsrelevante Daten.
                    Aufbewahrungspflichten können sich auch unter Berücksichtigung zivilrechtlicher Verjährungsfristen
                    ergeben. Diese betragen in der Regel drei Jahre.
                </p>
                <p>Weitergabe von Daten erfolgt nur unter bestimmten Voraussetzungen und ist im Detail aufgeführt.</p>
            </div>
        </div>
    );
};

export default datenschutz;
