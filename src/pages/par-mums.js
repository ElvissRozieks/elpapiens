import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer/footer"
import image from "../images/par-mums.jpg"


const AboutPage = () => (
    <>
  <Layout>
    <SEO title="Par Mums" />
    <div className="container container--tall">
        <h1 className="ttu container-heading-1 mb4 green afterglow">Par mums</h1>

        <img width="100%" src={image} alt=""/>

        <div className="mb4">
            <h2 className="ttu h3 pt4">Par Elpu</h2>
            <p>
            ELPA – svaigi piena produkti no Kurzemes jau 27 gadus. Par kurzemniekiem mēdz teikt, ka tie ir atturīgi, lēnāki, vienlaikus – ja kas sakāms, tad tas būs tieši un godīgi. Tāda arī ELPA – tīri un godīgi produkti, kuri plauktos nav bijuši paši uzkrītošākie, taču ir izcelšanas vērti. Visi ELPA produkti ir īsteni kurzemnieki – neslēpjas aiz E uzlabotājiem, ir vienkārši un garšās tīri.<br/><br/>
            Uzņēmums Kurzemes dienvidos sākotnēji dibināts ar domu apvienot vietējos piena ražotājus un dot iespēju pienu iepirkt bez starpniekiem. Gadu gaitā uzņēmums pašu spēkiem ievērojami audzis un šodien jau piedāvā virkni kvalitatīvu produktu. Viens no ELPAs lepnumiem noteikti ir mīkstais siers – tam līdzinieku atrast grūti un nemaz nevajag! Ar dažādām garšām, katrs noteikti atradīs vienu, kas kļūs par “savējo”. Mīkstajam sieram blakus dižojas arī citi kvalitatīvi produkti – piens, kefīrs, krējums, biezpiens, jogurts.
            </p>
            <h2 className="ttu h3 pt4">Ekskursijas</h2>
            <p>
            EKSKURSIJAS. Plānojot dienu Dienvidkurzemē, noteikti ir vērts ieplānot ciemošanos ELPĀ. ELPA ir šajā Kurzemes daļā vienīgais piena pārstrādātājs un var lepoties ar kvalitatīviem, garšīgiem produktiem. Ekskursijas laikā interesentiem tiks pastāstīts ne tikai par uzņēmuma vēsturi, būtiskākajiem notikumiem un pašu produkciju, bet būs arī iespēja produktus degustēt. No ELPAS visi aizbrauc, atraduši kādu produktu, kuru saukt par “savējo”. Pagaršot svaigu, tikko kultu biezpiena našķi, piesiet dūšu ar īstu kefīru vai kādu no mīkstā siera garšām – skan taču labi, vai ne? Piesaki apmeklējumu! Uzņemam iepriekš pieteiktas grupas ar cilvēku skaitu līdz 20, ekskursijas organizējot pēc plkst.15:00. Tiekamies ELPĀ!
            </p>
        </div>
    </div>

  </Layout>
    <Footer />
    </>
)

export default AboutPage
