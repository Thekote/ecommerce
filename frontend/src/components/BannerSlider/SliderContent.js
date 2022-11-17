import React from "react"
import styled from "styled-components"

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <Container>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <h2 className="slide-title">{slide.title}</h2>
          <h3 className="slide-text">{slide.description}</h3>
        </div>
      ))}
    </Container>
  )
}

const Container = styled.section`
  .active {
    display: inline-block;
  }

  .inactive {
    display: none;
  }

  .slides {
    height: var(--heights);
    width: var(--widths);
    position: relative;
  }

  .slide-image {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }

  .slide-title,
  .slide-text {
    width: 100%;
    height: 100%;
    color: white;
    font-size: 50px;
    position: absolute;
    text-align: center;
    top: 40%;
    z-index: 10;
  }

  .slide-text {
    top: 65%;
    font-size: 2rem;
  }
`

export default SliderContent
