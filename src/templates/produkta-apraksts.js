import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Footer from "../components/footer/footer"
import { useStaticQuery, graphql, Link } from "gatsby"

import "../pages/products.scss"

const ProductPage = ({data}) => {

let produkti = data.allDirectusProdukti.edges;
let featuredProducts = produkti.map((edge, id) => (
  <a href={"/produkts/"+id} className="featured-product col-12 lg-col-3 tdn mb3">
  <div className="thumbnail mb2 ml1 mr1 p3 flex items-center justify-center transition">
    <img src={edge.node.bilde.data.full_url} />
  </div>
  <span className="worksans mra mla tac block bold green">{edge.node.virsraksts}</span>
  </a>
));

let produkts = data.directusProdukti;

return (
    <>
  <Layout>
    <SEO title="Kontakti" />
    <div id="iaw" className="iaw iaw--exit"></div>

    <div className="container container--tall">

        <div className="flex flex-column pt2 product-details-top">
            <div className="col-12 md-col-7">
                <h2 className="ttu afterglow container-heading-1 mb4 green">{produkts.virsraksts}</h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: produkts.apraksts }}
                    />
                <a className="green tdn worksans bold" href="/produkti">☷ Skatīt visus Elpa produktus</a>
            </div>
            <div className="product-details-photo col-12 lg-col-5">
                <img src={produkts.bilde.data.full_url}/>
            </div>
        </div>




        <div className="flex flex-column mt4 product-details-middle">
            <div className="col-12 lg-col-7">
                <h2 className="ttu worksans mb2 h3 green">Sastāvdaļas</h2>
                <p>
                  {produkts.sastavdalas}
                </p>
            </div>
            <div className="col-12 lg-col-5 mt4">
                <h2 className="ttu worksans mb2 h3 green">Uzturvielu tabula</h2>
                <div className="flex flex-column worksans">
                  <div className="flex">
                    <div className="col-9 lg-col-9 mb1 bold">Produkta uzturvērtība</div>
                    <div className="col-3 lg-col-3 mb1 bold">Uz 100g</div>
                  </div>
                  <div className="flex">
                    <div className="col-9 sm-col-9 mb1 neutrition-item ">Enerģētiskā vērtība</div>
                    <div className="col-3 sm-col-3 mb1 neutrition-item ">{produkts.uzturvielas.energetiska}</div>
                  </div>
                  <div className="flex">
                    <div className="col-9 sm-col-9 mb1 neutrition-item ">Tauki</div>
                    <div className="col-3 sm-col-3 mb1 neutrition-item ">{produkts.uzturvielas.tauki}</div>
                  </div>
                  <div className="flex">
                    <div className="col-9 sm-col-9 mb1 neutrition-item ">Piesātinātas taukskābes</div>
                    <div className="col-3 sm-col-3 mb1 neutrition-item ">{produkts.uzturvielas.taukskabes}</div>
                  </div>
                  <div className="flex">
                    <div className="col-9 sm-col-9 mb1 neutrition-item ">Ogļhidrāti</div>
                    <div className="col-3 sm-col-3 mb1 neutrition-item ">{produkts.uzturvielas.oglhidrati}</div>
                  </div>
                  <div className="flex">
                    <div className="col-9 sm-col-9 mb1 neutrition-item ">Tostarp cukuri</div>
                    <div className="col-3 sm-col-3 mb1 neutrition-item ">{produkts.uzturvielas.cukuri}</div>
                  </div>
                  <div className="flex">
                    <div className="col-9 sm-col-9 mb1 neutrition-item ">Šķiedrvielas</div>
                    <div className="col-3 sm-col-3 mb1 neutrition-item ">{produkts.uzturvielas.skiedrvielas}</div>
                  </div>
                  <div className="flex">
                    <div className="col-9 sm-col-9 mb1 neutrition-item ">Olbaltumvielas</div>
                    <div className="col-3 sm-col-3 mb1 neutrition-item ">{produkts.uzturvielas.olbaltumvielas}</div>
                  </div>
                  <div className="flex">
                    <div className="col-9 sm-col-9 mb1 neutrition-item ">Sāls</div>
                    <div className="col-3 sm-col-3 mb1 neutrition-item ">{produkts.uzturvielas.sals}</div>
                  </div>
                </div>
            </div>
        </div>

        <div className="flex flex-column mt4 product-details-bottom">
          <h2 className="ttu worksans mb2 h3 green">Mūsu labākie produkti</h2>
              <div className="products-wrapper flex flex-column justify-center mb4">
                {featuredProducts[0]}
                {featuredProducts[1]}
                {featuredProducts[2]}
                {featuredProducts[3]}
              </div>
              <a className="green tdn worksans bold block tac pt4" href="/produkti">☷ Skatīt visus Elpa produktus</a>
        </div>

        

    </div>

  </Layout>
    <Footer />
    </>
)

}

export default ProductPage

export const pageQuery = graphql`
  query($pageid: String!) {
    directusProdukti(id: {eq: $pageid}) {
      virsraksts
      kategorija
      apraksts,
      sastavdalas,
      uzturvielas {
        energetiska
        tauki
        taukskabes
        oglhidrati
        cukuri
        skiedrvielas
        olbaltumvielas
        sals
      }
      bilde {
        data {
          full_url
        }
      }
    }
    allDirectusProdukti {
      edges {
        node {
          id,
          virsraksts,
          bilde {
            data {
              full_url
            }
          }
        }
      }
    }
  }
`