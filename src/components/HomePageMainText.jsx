import React from 'react';
import '../styles/Homepage.css'; // Make sure to adjust the path to your CSS file

const HomePageMainText = () => {
    return (
        <div className="home-main">
            <div className="home-photo">
                <img className="home-image" src="/images/banktalk.jpg" alt="Bank Talk" />
            </div>
            <div className="home-text">
                <h1 className="home-fo">
                    Mēs esam apņēmušies sniegt augstas kvalitātes finanšu konsultācijas, balstoties uz katru klientu un viņa individuālajām vajadzībām. Mūsu pieredzējušie finanšu konsultanti strādā kopā ar klientiem, lai izstrādātu personalizētu finanšu plānu, kas atbilst viņu mērķiem un prioritātēm.<br /><br />

                    Mazetracker uzskata, ka izglītība un informētība ir svarīga finanšu veiksmes sastāvdaļa. Tāpēc mēs strādājam, lai klientiem nodrošinātu saprotamu un skaidru informāciju par finanšu jautājumiem. Mūsu mērķis ir palīdzēt cilvēkiem iemācīties pārvaldīt savus finanses, veikt gudrus ieguldījumus un nodrošināt pensijas vecumu, kas ir drošs un komfortabls.<br /><br />

                    Mazetracker ir uzticams partneris, uz kuru varat paļauties, kad runa ir par jūsu finansiālo nākotni. Mēs cenšamies nodrošināt, ka katrs mūsu klienti saņem individuālu uzmanību un atbalstu, lai sasniegtu savus finansiālos mērķus. Sazinieties ar mums šodien, lai uzzinātu vairāk par to, kā Mazetracker var palīdzēt jums sasniegt finansiālo stabilitāti un panākumus.
                </h1>
            </div>
        </div>
    );
};

export default HomePageMainText;
