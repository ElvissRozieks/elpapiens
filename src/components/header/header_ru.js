import { Link } from "gatsby"
import React from "react"
import logo from "../../images/logo.svg"
import buttonArrow from "../../images/arrow.svg"
import "./style.scss"


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {navbarOpen: false}
  }
  toggle() {
    this.setState({navbarOpen: !this.state.navbarOpen});
  }
  render() {

      return(
        <>
        <header class={this.state.navbarOpen ? "main-header main-header--inverse" : "main-header"}>
          <Link to="/ru"><img alt="Elpa Logo" src={logo}/></Link>

          <div className="fill-button fill-button-icon button-capital button-margin button-flex">
            <div className="button-holder">
                <a target="_blank" href="https://pienselpa.lv/" className="fill-button-inner white">
                    <div className="fill-button-icon">
                        <img src={buttonArrow} alt="button" />
                    </div>
                    <div className="fill-button-text">
                        <span>Интернет-магазин</span>
                    </div>
                </a>
            </div>
          </div>

          <div role="button" tabIndex={0} className="burger" onClick={this.toggle.bind(this)} onKeyDown={this.toggle.bind(this)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>

        <nav className={this.state.navbarOpen ? "main-navbar fixed container--center-all flex-column" : "main-navbar main-navbar--hidden fixed container--center-all flex-column"}>
          <div className="nav-wrapper">
            <Link to="/ru" className="text-decoration-none white worksans--black ttu"><span className="dash mr2"></span>начало</Link>
            <Link to="/produkti" className="text-decoration-none white worksans--black ttu"><span className="dash mr2"></span>продукты</Link>
            <Link to="/ru/par-mums" className="text-decoration-none white worksans--black ttu"><span className="dash mr2"></span>О нас</Link>
            <a href="https://www.pienselpa.lv" className="text-decoration-none white worksans--black ttu"><span className="dash mr2"></span>Интернет-магазин</a>
            <Link to="/ru/kontakti" className="text-decoration-none white worksans--black ttu"><span className="dash mr2"></span>контакты</Link>
            <a href="https://elpa.lv" className="text-decoration-none white worksans--black ttu a--hidden"><span className="dash mr2"></span>Elpa navigācija</a>
            <div className="text-decoration-none white worksans ttu language mt4 pl4">RU <span className="language--inactive ml1 cp"> <Link to="/">/ LV</Link></span></div>
          </div>

          <div className="bottom-wrapper">
            <Link to="/ru/privatuma-politika" className="text-decoration-none white worksans">Политика конфиденциальности</Link>
          </div>
        </nav>
        </>
      );

  }
}

export default Header
