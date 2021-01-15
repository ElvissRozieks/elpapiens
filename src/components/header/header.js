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
        <header className={this.state.navbarOpen ? "main-header main-header--inverse" : "main-header"}>
          <Link to="/"><img src={logo} alt="" /></Link>

          <div className="fill-button fill-button-icon button-capital button-margin button-flex ">
            <div className="button-holder">
                <a target="_blank" href="https://pienselpa.lv/" className="fill-button-inner white">
                    <div className="fill-button-icon">
                        <img src={buttonArrow} alt="button" />
                    </div>
                    <div className="fill-button-text">
                        <span>iepirkties tagad</span>
                    </div>
                </a>
            </div>
          </div>

          <div role="button" className="burger" onClick={this.toggle.bind(this)} onKeyDown={this.toggle.bind(this)} tabIndex={0}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>

        <nav className={this.state.navbarOpen ? "main-navbar fixed container--center-all flex-column" : "main-navbar main-navbar--hidden fixed container--center-all flex-column"}>
          <div className="nav-wrapper">
            <Link to="/" duration={1} hex="#072415" className="text-decoration-none white worksans--black ttu"> <span className="dash mr2"></span>Sākums </Link>
            <Link to="/produkti" duration={1} hex="#072415" className="text-decoration-none white worksans--black ttu"> <span className="dash mr2"></span>Produkti </Link>
            <Link to="/par-mums" duration={1} hex="#072415" className="text-decoration-none white worksans--black ttu"> <span className="dash mr2"></span>Par Mums </Link>
            <a href="https://pienselpa.lv" className="text-decoration-none white worksans--black ttu"><span className="dash mr2"></span>E-veikals</a>
            <Link to="/kontakti" duration={1} hex="#072415" className="text-decoration-none white worksans--black ttu"> <span className="dash mr2"></span>Kontakti </Link>
            <a href="https://elpa.lv" className="text-decoration-none white worksans--black ttu a--hidden"><span className="dash mr2"></span>Elpa navigācija</a>
            <div className="text-decoration-none white worksans ttu language mt4 pl4">LV <span className="language--inactive ml1 cp"> <Link to="/ru">/ RU</Link></span></div>
          </div>

          <div className="bottom-wrapper">
            <Link to="/privatuma-politika" className="text-decoration-none white worksans">Privātuma politika</Link>
          </div>
        </nav>
        </>
      );

  }
}

export default Header
