import React from "react"
import PropTypes from "prop-types"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


import Header from "../Header";

const Image = ({ imgFileName, imgAlt }) => {
  const data = useStaticQuery(
    graphql`
          query Images{
            allImageSharp {
              edges {
                node {
                  fluid(maxWidth:400) {
                    ...GatsbyImageSharpFluid_withWebp
                    originalName
                  }
                }
              }
            }
          }`,
  );

  const TheImageYouWant = data.allImageSharp.edges
    .filter(edge => edge.node.fluid.originalName === imgFileName)
    .map(myImage => <Img fluid={myImage.node.fluid} alt={imgAlt} key={imgAlt} />);

  return (
    <>
        <div className="the-image-you-want">
            {TheImageYouWant}
        </div>
    </>
  )
}

Header.propTypes = {
  imgAlt: PropTypes.string
}

export default Image