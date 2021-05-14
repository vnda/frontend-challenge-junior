import * as React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import _get from "lodash/get";

import "./instagram.scss"

const InstagramPostItem = () => {
    const data = useStaticQuery(graphql`
    query InstagramQuery {
      allInstagramContent(limit: 3, sort: {fields: timestamp, order: DESC}) {
        edges {
          node {
            caption
            username
            localImage {
              childImageSharp {
                gatsbyImageData(
                    width: 1920
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
          }
        }
      }
    }
  }
  `)

    let arrayOfInstaImages = _get(data, 'allInstagramContent.edges')
    return (
        <div className="instagram-post-item-wrapper">
            <div className="instagram-post-item-array">
                <h1 className="instagram-username"><a href="instagram.com/igorgarciaco">@igorgarciaco</a></h1>
                {arrayOfInstaImages.map((item, i) => {
                    return (
                        <div key={i} className="instagram-post-item-image">
                            <GatsbyImage 
                            className="gatsby-instagram-post-item-image"
                            image={item.node.localImage.childImageSharp.gatsbyImageData} 
                            alt={item.node.caption} />
                            <p className="instagram-post-item-caption">{item.node.caption}</p>
                        </div>)
                })}
            </div>
        </div>
    )
}

export default InstagramPostItem