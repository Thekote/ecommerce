import React from "react"
import styled from "styled-components"
import Slider from "../../components/BannerSlider/Slider"
import ProductList from "../../components/ProductList"

const HomePage = () => (
  <Container>
    <Slider />
    <ContentContainer>
      <ProductList />
    </ContentContainer>
  </Container>
)

const Container = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

export default HomePage
