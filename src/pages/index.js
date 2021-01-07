import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Link, navigate, graphql} from "gatsby"
import mouse from "../images/mouse.svg"
import background from "../images/bg.jpg"
import "./index.scss"

let count = 0

class IndexPage extends React.Component {
  componentDidMount() {
    document.addEventListener('wheel', this.handleScroll, true);
    count = 0;
  }
  componentWillUnmount() {
    document.removeEventListener('wheel', this.handleScroll);
  }
  handleScroll = () => {
    if(window.location.pathname === "/" || window.location.href === "https://welloutsource.com/elpa_test/") {
      count+=1
      if(count === 5) {
        document.getElementById("iaw").classList.remove("iaw--enter");
        setTimeout(()=>{
          navigate("produkti")
        },1000);
      }
    }
  };
  render() {
    return(
      <Layout>
        <SEO title="Sākums" />

        <div id="iaw" className="iaw iaw--enter"></div>

        <div className="landing-section container--center-all flex-column">
          <img src={background} className="bg" alt="Fons"/>
    <h1 className="landing-heading afterglow ttu green center">Dabīgi un veselīgi<br/> piena produkti</h1>

          <Link to="produkti" className="hint container--center-all flex-column text-decoration-none">
            <img className="landing-hint-img" src={mouse} alt="" />
            <span className="green ttu worksans">Iepazīsties ar mūsu produktiem</span>
          </Link>

        </div>

      </Layout>
    )
  }
}


export default IndexPage

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
