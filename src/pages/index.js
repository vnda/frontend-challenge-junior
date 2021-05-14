import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"

import '../styles/pages/home.scss'

import arrowDown from "../images/icons/down-arrow.svg"

import Swiper from "../components/Swiper"
import Banner from "../components/Banner"
import AvatarRow from "../components/AvatarRow"
import TextArea from "../components/TextArea"
import Image from "../components/Image"
import CallToActionBtn from "../components/CallToActionBtn"
import Card from "../components/Card"
import InstagramPostItem from "../components/InstagramPostItem"

const IndexPage = () => (
  <Layout >
    <Seo title="Home" />

    <Banner />
    <AvatarRow />

    <section className="container first-section gray-bg-100">
      <TextArea
        subtitle="Lorem ipsum lorem dolor"
        title="Lorem ipsum dolor sit amet"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec luctus vestibulum erat. Praesent accumsan lectus sit amet ex tempor, non blandit enim hendrerit. Mauris tincidunt nisi vitae quam blandit eleifend.
        Donec quis erat id ligula placerat eleifend. Ut vehicula neque turpis, at scelerisque diam finibus eget. Vestibulum vehicula porta libero,
      </TextArea>
      <img className="arrow-indicator" width="100px" src={arrowDown} alt="" />

      <span className="first-card-in-section">
        <Card
          imgFileName="350x400.png"
          bannerTitle="Título do banner 1"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit </Card>
      </span>
      <span className="second-card-in-section">
        <Card
          imgFileName="250x150.png"
          bannerTitle="Título do banner 2"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit </Card>
      </span>
      <span className="third-card-in-section">
        <Card
          imgFileName="350x400.png"
          bannerTitle="Título do banner 3"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit </Card>
      </span>
    </section>

    <section className="container gray-bg-85">
      <div className="second-section">
        <div className="single-image-section">
          <Image
            imgFileName="350x400.png"
            imgAlt="Lorem Ipsum"
          />
        </div>
        <div>
          <TextArea
            subtitle="Lorem ipsum lorem dolor"
            title="Lorem ipsum dolor sit amet"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec luctus vestibulum erat. Praesent accumsan lectus sit amet ex tempor, non blandit enim hendrerit. Mauris tincidunt nisi vitae quam blandit eleifend.
          Donec quis erat id ligula placerat eleifend. Ut vehicula neque turpis, at scelerisque diam finibus eget. Vestibulum vehicula porta libero,</TextArea>
          <CallToActionBtn buttonLink="">Call to Action</CallToActionBtn>
        </div>
        <Swiper />
      </div>
    </section>
    <section className="container">
      <InstagramPostItem />
    </section>
  </Layout>
)

export default IndexPage
