import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer/footer"

import "./contacts.scss"

const ContactsPage = () => (
    <>
  <Layout>
    <SEO title="Kontakti" />
    <div className="container container--tall">
        <h1 className="ttu container-heading-1 mb4 green afterglow">Sazinies ar mums</h1>

        <div className="flex mb4">
            <div className="sm-col-6">
                <h2 className="ttu h3">Fiziskā adrese</h2>
                <p>
                    Bērzu gatve 4, Kazdangas pag. <br/>
                    Aizputes novads, LV-3457 <br/>
                    Tālr: 63448367, Mob tālr: 29135940 <br/>
                    epasts: rivars@siaelpa.lv
                </p>
            </div>
        </div>

        <form target="_blank" action="https://welloutsource.com/emailer/index.php" method="POST" id="contacts-form">
            <h2 className="ttu h3">Ir jautājumi?</h2>

            <input type="text" name="name" placeholder="Vārds" className="mb2 worksans"/>
            <input type="text" name="phone" placeholder="Telefona numurs" className="mb2 worksans"/>
            <input type="text" name="email" placeholder="E-pasts" className="mb2 worksans"/>

            <input type="text" name="token" className="hide" value="882hdhd"/>
            <input type="text" name="recipient" className="hide" value="reinardssaulitis@gmail.com"/>
            <input type="text" name="host" className="hide" value="elpa"/>

            <textarea name="message" id="" rows="5" placeholder="Ziņa" className="worksans"></textarea>
            <button type="submit" className="p2 br2 pl3 pr3 white border-none right mt2 worksans">Sūtīt</button>
        </form>
    </div>

  </Layout>
    <Footer/>
    </>
)

export default ContactsPage
