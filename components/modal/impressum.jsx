import React from "react";

const impressum = () => {
    return (
        <div>
            <div>
                <h2 className="text-xl font-semibold mb-6">Impressum (Angaben gemäß § 5 Telemediengesetz)</h2>
                <address className="py-4">
                    <strong>SinoScan GmbH</strong>
                    <br />
                    Otto-Hahn-Straße 36
                    <br />
                    63303 Dreieich
                    <br />
                    Telefon: <a href="tel:+4961038055685">+49 6103 805 56 85</a>
                    <br />
                    E-Mail: <a href="mailto:info@sinoscan.de">info@sinoscan.de</a>
                </address>

                <p>
                    <strong>Registereintrag:</strong> Amtsgericht Langen, HRB 96446
                    <br />
                    <strong>Umsatzsteueridentifikationsnummer:</strong> DE280337858
                    <br />
                    <strong>Geschäftsführer:</strong> Tanja Behnisch
                </p>

                <h3 className="mt-4 font-semibold">Haftung für Inhalte</h3>
                <p>
                    Als Diensteanbieter sind wir für die auf unserer Website veröffentlichten eigenen Inhalte
                    verantwortlich, jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                    überwachen oder sämtliche Tatsachen zu prüfen, die auf eine rechtswidrige Tätigkeit hinweisen. Bei
                    Bekanntwerden von Rechtsverletzungen werden wir die betroffenen Inhalte umgehend entfernen.
                </p>

                <h3 className="mt-4 font-semibold">Haftung für Links</h3>
                <p>
                    Unser Angebot kann Links zu externen Websites Dritter enthalten. Auf den Inhalt dieser externen
                    Websites haben wir keinen Einfluss, weshalb wir für diese fremden Inhalte auch keine Gewähr
                    übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter des
                    Internetangebots verantwortlich. Die verlinkten Websites wurden zum Zeitpunkt der Verlinkung auf
                    mögliche Rechtsverstöße überprüft. Eine permanente inhaltliche Kontrolle ist ohne konkrete
                    Anhaltspunkte einer Rechtsverletzung nicht möglich und nicht zumutbar. Bei Bekanntwerden von
                    Rechtsverletzungen werden wir betroffene Links umgehend entfernen.
                </p>

                <h3 className="mt-4 font-semibold">Urheberrecht</h3>
                <p>
                    Die durch uns erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen
                    Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung, öffentliche Zugänglichmachung und jede
                    sonstige Art der Verwertung bedürfen – sofern nicht durch gesetzliche Schranken erlaubt – der
                    schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Soweit die Inhalte auf dieser
                    Website von Dritten erstellt wurden, kennzeichnen wir dies entsprechend und beachten die
                    Urheberrechte dieser Dritten. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
                    werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
                    wir betroffene Inhalte umgehend entfernen.
                </p>
            </div>
        </div>
    );
};

export default impressum;
