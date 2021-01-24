import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Footer from "../components/footer/footer"
import { useStaticQuery, graphql, Link } from "gatsby"

import "./products.scss"

const ProductsPage = () => {

const data = useStaticQuery(graphql`
  query GatsbyNodeQuery {
    allDirectusProdukti {
      edges {
        node {
          id,
          virsraksts,
          kategorija,
          bilde {
            data {
              full_url
            }
          }
        }
      }
    }
  }
`)

// componentDidMount() {
//   alert("Mount");
// }


let products = data.allDirectusProdukti.edges;

let siers = products.filter(produkts => produkts.node.kategorija === "siers");
let kefirs = products.filter(produkts => produkts.node.kategorija === "kefirs");
let piens = products.filter(produkts => produkts.node.kategorija === "piens");
let biezpiens = products.filter(produkts => produkts.node.kategorija === "biezpiens");
let krejums = products.filter(produkts => produkts.node.kategorija === "krejums");
let sporters = products.filter(produkts => produkts.node.kategorija === "sporters");
let jogurts = products.filter(produkts => produkts.node.kategorija === "jogurts");


siers = siers.map((produkts, id) => (
  <div className={ id%2===0 ? 'product-item' : 'product-item product-item--odd'}>
    <Link to={"/produkts/"+(produkts.node.id.match(/\d+/g).map(Number)-1)} className="grow flex">
      <span className="black absolute ttu bold product-title flex items-center">{produkts.node.virsraksts} <span className="product-plus mx2">+</span></span>
      <img alt={produkts.node.virsraksts} className="thumbnail" src={produkts.node.bilde.data.full_url} />
    </Link>
  </div>
))

kefirs = kefirs.map((produkts, id) => (
  <div className={ id%2===0 ? 'product-item' : 'product-item product-item--odd'}>
    <Link to={"/produkts/"+(produkts.node.id.match(/\d+/g).map(Number)-1)} className="grow flex">
      <span className="black absolute ttu bold product-title flex items-center">{produkts.node.virsraksts} <span className="product-plus mx2">+</span></span>
      <img alt={produkts.node.virsraksts} className="thumbnail" src={produkts.node.bilde.data.full_url} />
    </Link>
  </div>
))

piens = piens.map((produkts, id) => (
  <div className={ id%2===0 ? 'product-item' : 'product-item product-item--odd'}>
    <Link to={"/produkts/"+(produkts.node.id.match(/\d+/g).map(Number)-1)} className="grow flex">
      <span className="black absolute ttu bold product-title flex items-center">{produkts.node.virsraksts} <span className="product-plus mx2">+</span></span>
      <img alt={produkts.node.virsraksts} className="thumbnail" src={produkts.node.bilde.data.full_url} />
    </Link>
  </div>
))

biezpiens = biezpiens.map((produkts, id) => (
  <div className={ id%2===0 ? 'product-item' : 'product-item product-item--odd'}>
    <Link to={"/produkts/"+(produkts.node.id.match(/\d+/g).map(Number)-1)} className="grow flex">
      <span className="black absolute ttu bold product-title flex items-center">{produkts.node.virsraksts} <span className="product-plus mx2">+</span></span>
      <img alt={produkts.node.virsraksts} className="thumbnail" src={produkts.node.bilde.data.full_url} />
    </Link>
  </div>
))

krejums = krejums.map((produkts, id) => (
  <div className={ id%2===0 ? 'product-item' : 'product-item product-item--odd'}>
    <Link to={"/produkts/"+(produkts.node.id.match(/\d+/g).map(Number)-1)} className="grow flex">
      <span className="black absolute ttu bold product-title flex items-center">{produkts.node.virsraksts} <span className="product-plus mx2">+</span></span>
      <img alt={produkts.node.virsraksts} className="thumbnail" src={produkts.node.bilde.data.full_url} />
    </Link>
  </div>
))

jogurts = jogurts.map((produkts, id) => (
  <div className={ id%2===0 ? 'product-item' : 'product-item product-item--odd'}>
    <Link to={"/produkts/"+(produkts.node.id.match(/\d+/g).map(Number)-1)} className="grow flex">
      <span className="black absolute ttu bold product-title flex items-center">{produkts.node.virsraksts} <span className="product-plus mx2">+</span></span>
      <img alt={produkts.node.virsraksts} className="thumbnail" src={produkts.node.bilde.data.full_url} />
    </Link>
  </div>
))

sporters = sporters.map((produkts, id) => (
  <div className={ id%2===0 ? 'product-item' : 'product-item product-item--odd'}>
    <Link to={"/produkts/"+(produkts.node.id.match(/\d+/g).map(Number)-1)} className="grow flex">
      <span className="black absolute ttu bold product-title flex items-center">{produkts.node.virsraksts} <span className="product-plus mx2">+</span></span>
      <img alt={produkts.node.virsraksts} className="thumbnail" src={produkts.node.bilde.data.full_url} />
    </Link>
  </div>
))

return (
    <>
  <Layout>
    <SEO title="Produkti" />

    <div id="iaw" className="iaw iaw--exit"></div>

    <div id="mini-navbar" className="mini-navbar flex flex-column worksans">
      <a href="#siers"><span></span>  Kazdangas sieri</a>
      <a href="#kefirs"><span></span> Kefīrs</a>
      <a href="#piens"><span></span> Piens</a>
       <a href="#sporters"><span></span> Sporters</a>
      <a href="#jogurts"><span></span> Jogurts</a>
      <a href="#biezpiens"><span></span> Biezpiens</a>
      <a href="#krejums"><span></span> Krējums</a>
    </div>

    <div className="container container--tall">

        {/* Siers */}
        <div className="mb4" id="siers">
          <h2 className="ttu afterglow container-heading-1 mb4 green">Mūsu <br/> garšīgie <br/> Kazdangas sieri </h2>
          <p>
            ELPA mīkstie kazdangas sieri ir mūsu meistarstiķis. Atšķirīgi un īpaši – konkurentu tiem nav. Sev tīkamāko garšu atradīs ikviens. Piedāvājam sierus ar ķimenēm, ar ķiplokiem, dillēm, pētersīļiem un selerijām. Izvēlējies?
          </p>
          <p>
            {siers}
          </p>
        </div>

        {/* Kefīrs */}
        <div className="mb4 pt4" id="kefirs">
          <h2 className="ttu afterglow container-heading-1 mb4 green">ELPA KEFĪRS - <br/> LĪDZ ŪSAI <br/> GARDS!</h2>
          <p>
            Kefīrs, kefīrs. Viegli skābenais dzēriens, kurš vērtīgs ne tikai ar to, ka garšīgs, bet arī veselīgs. Ar kefīru uzņemsim labās baktērijas, kuras uzlabos gremošanu un palīdzēs stiprināt imūnsistēmu. Kefīro vesels!
          </p>
          <p>
            {kefirs}
          </p>
        </div>

        {/* Piens */}
        <div className="mb4 pt4" id="piens">
          <h2 className="ttu afterglow container-heading-1 mb4 green">PIENS – <br/> VISIEM TIK <br/> PAZĪSTAMS</h2>
          <p>
            sPiens – tā ir klasika. Uzturvielām un vitamīniem bagāts dzēriens. Nozīmīgs kalcija un D vitamīna avots. Veldzējies vasarā vai pievieno medu un sildies ziemā! Glāzi piena – katru dienu!
          </p>
          <p>
            {piens}
          </p>
        </div>

        {/* Sporteri */}
         <div className="mb4 pt4" id="sporters">
          <h2 className="ttu afterglow container-heading-1 mb4 green">ELPA Sporteri!</h2>
          <p>Piešķil atpakaļ uguntiņu savai sportiskajai enerģijai ar SPORTERU! </p>
          <p>
            {sporters}
          </p>
        </div>

        {/* Jogurts */}
         <div className="mb4 pt4" id="jogurts">
          <h2 className="ttu afterglow container-heading-1 mb4 green">ELPA JOGURTI – NAŠĶOJIES!</h2>
          <p>
            Jogurtu pazīstam gan kā veselīgu našķi, gan ēdienu aizdaru. Bezpiedevu jogurta daudzveidīgais pielietojums iepriecinās – ēd kā vienkāršu un veselīgu uzkodu, pievieno zupai, gatavo salātu mērces, sajauc ar augļiem vai ogām un iegūsti desertu vienā acumirklī. Dzīve ir skaista, našķojies droši!
          </p>
          <p>
            {jogurts}
          </p>
        </div>

        {/* Biezpiens */}
        <div className="mb4 pt4" id="biezpiens">
          <h2 className="ttu afterglow container-heading-1 mb4 green">BAUDI <br/> BIEZPIENA <br/> BAGĀTĪBU</h2>
          <p>
            Biezpiens, būdams skābpiena produkts, ir vieglāk sagremojams, tāpēc uzturā tiek lietots vairāk kā piens. Tas ir bagāts ar olbaltumvielām, mikroelementiem un aminoskābēm, tāpēc tiek izmantots neskaitāmu ēdienu un piedevu gatavošanā. Biezpienu var ēst kā sāļu, tā saldu. Sajauc ar krējumu un zaļumiem vai pagatavo biezpiena desertu ar rozīnēm, iejauc kēksa mīklā, gatavo sacepumu, cep plācenīšus. Ar biezpienu garlaicīgi nebūs!
          </p>
          <p>
            {biezpiens}
          </p>
        </div>

        {/* Krējums */}
        <div>
          <h2 className="ttu afterglow container-heading-1 mb4 green" id="krejums">KRĒJUMS – <br/> KLASIKA <br/> KATRĀ <br/> VIRTUVĒ</h2>
          <p>
            ELPAS krējumam jābūt katras saimnieces ledusskapī. Biezs, garšīgs, bagātīgs – mūsu krējums būs gardākā piedeva gan vienkāršai maltītei, gan pavārmākslas šedevriem. Elpas krējums – visur iederīgs, visur gaidīts. Piešķir smeķi!
          </p>
          <p>
            {krejums}
          </p>
        </div>

    </div>

  </Layout>
    <Footer />
    </>
)

}

export default ProductsPage
