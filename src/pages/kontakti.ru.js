import React from "react"

import Layout from "../components/layout_ru"
import SEO from "../components/seo"
import Footer from "../components/footer/footer"

import "./contacts.scss"

const ContactsPage = () => (
    <>
  <Layout>
    <SEO title="Свяжитесь с нами" />
    <div className="container container--tall">
        <h1 className="ttu container-heading-1 worksans mb4 green">Свяжитесь с нами</h1>

        <div className="flex mb4">
            <div className="sm-col-6">
                <h2 className="ttu h3">Физический адрес</h2>
                <p>
                    Bērzu gatve 4, Kazdangas pag. <br/>
                    Aizputes novads, LV-3457 <br/>
                    Tālr: 63448367, Mob tālr: 29135940 <br/>
                    epasts: rivars@siaelpa.lv
                </p>
            </div>
        </div>

        <form action="" id="contacts-form">
            <h2 className="ttu h3">Есть вопросы?</h2>

            <input type="text" placeholder="имя" className="mb2 worksans"/>
            <input type="text" placeholder="Номер телефона" className="mb2 worksans"/>
            <input type="text" placeholder="Эл. почта" className="mb2 worksans"/>
            <textarea name="" id="" rows="5" placeholder="письмо" className="worksans"></textarea>
            <button type="submit" className="p2 br2 pl3 pr3 white border-none right mt2 worksans">послать</button>
        </form>
    </div>

  </Layout>
    <Footer/>
    </>
)

export default ContactsPage
