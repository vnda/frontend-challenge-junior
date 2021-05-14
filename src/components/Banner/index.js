import * as React from 'react'

import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from 'gatsby'

import './banner.scss'

const BannerHome = () => {
    //query all images on banner folder
    const { data } = useStaticQuery(graphql`
        query{
        data: allFile(filter: { absolutePath: { regex: "/banner/" }} 
        sort: {fields: modifiedTime, order: DESC} limit: 1) {
        edges {
            node {
            name
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
        `)
    const sliderContent = data.edges
    return (
        <>
            {/* show newest image banner */}
            {sliderContent.map(({ node, uniKey }) => {
                uniKey++
                return (
                    <div className="">
                        <GatsbyImage
                            key={uniKey}
                            image={node.childImageSharp.gatsbyImageData}
                            alt={node.name}
                        />
                    </div>
                )
            })}
        </>
    )
}

export default BannerHome