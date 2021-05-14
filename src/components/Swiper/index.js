import * as React from "react"

import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from 'gatsby'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import './swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './slider.scss'

SwiperCore.use([Navigation, Pagination]);

const SliderSwiper = () => {
  //query all images on slider folder
  const { data } = useStaticQuery(graphql`
  query{
    data: allFile(filter: { absolutePath: { regex: "/slider/" }} 
    sort: {fields: modifiedTime, order: ASC} limit: 4) {
    edges {
      node {
      name
        childImageSharp {
          gatsbyImageData(
              width: 400
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
      <Swiper
        className="swiper-wrapper"
        navigation
        pagination
        // autoHeight={true}
        spaceBetween={25}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {/* show first 4 images on folder images/slider  */}
        {sliderContent.map(({ node, uniKey }) => {
          uniKey++
          return (
            <SwiperSlide>
              <GatsbyImage
                key={uniKey}
                image={node.childImageSharp.gatsbyImageData}
                alt={node.name} />
            </SwiperSlide>

          )
        })}
      </Swiper>
  );
}

export default SliderSwiper