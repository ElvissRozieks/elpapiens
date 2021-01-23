import React from "react"
import logo from "../../images/logo-short.svg"
import facebook from "../../images/fb.svg"
import instagram from "../../images/ig.svg"
import shop from "../../images/shop.svg"
import "./style.scss"

class Footer extends React.Component {

  render() {

      return(
        <footer>
          <div className="container--center-all flex-column">
              <img className="mt2 mb1" src={logo} alt="Elpas logo"/>
              <p>Kazdanga, Bērzu gatve 4, <br/>
              Kazdangas p., Aizputes n.</p>
              <div className="flex">
                <a className="mx1 flex justify-center" href="https://www.facebook.com/siaelpa/" target="_blank" rel="noopener noreferrer"><img alt="Facebook logo" className="block o9 social-network-link transition" src={facebook} /></a>
                <a className="mx1 flex justify-center" href="https://www.instagram.com/elpasia/" target="_blank" rel="noopener noreferrer"><img alt="Instagram logo" className="block o9 social-network-link transition" src={instagram} /></a>
              </div>
              <div className="flex shops py3">
                <div className="flex items-center">
                    <img src={shop} alt="Veikals"/>
                    <p>Kuršu iela 5, Liepāja<br/> <b>(Pētertirgus)</b></p>
                </div>
                <div className="flex items-center">
                    <img src={shop} alt="Veikals"/>
                    <p>M.Ķempes iela 10-16, <br/>Liepāja</p>
                </div>
                <div className="flex items-center">
                    <img src={shop} alt="Veikals"/>
                    <p>Dzērves iela 15, <br/>Liepāja</p>
                </div>
                <div className="flex items-center">
                    <img src={shop} alt="Veikals"/>
                    <p>Kuldīgas iela 1, Saldus <br/><b>(Saldus tirgus)</b></p>
                </div>
                <div className="flex items-center">
                    <img src={shop} alt="Veikals"/>
                    <p>Kurzemes prospekts 3, Rīga <br/><b>(Imantas tirgus)</b></p>
                </div>
              </div>
          </div>
        </footer>
      );

  }
}

export default Footer
