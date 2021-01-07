import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"


const Background = ({ children }) => {
    const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "bg.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 1080) {
                ...GatsbyImageSharpFluid
            }
        }
      }
    }
  `)

  return (
    <>
    <Img
        className="bg"
        fluid={data.file.childImageSharp.fluid}
        alt="A corgi smiling happily"
      />
    </>
  )
}


export default Background
