import React from "react"
import styled, { css } from "styled-components"

function Dots({ activeIndex, onclick, sliderImage }) {
  return (
    <Container>
      {sliderImage.map((slide, index) => (
        <Dot
          key={index}
          active={activeIndex === index}
          onClick={() => onclick(index)}
        />
      ))}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  top: 85%;
  justify-content: center;
  z-index: 200;
`
const Dot = styled.button`
  ${(props) => css`
    border: none;
    cursor: pointer;
    height: 1.5rem;
    width: 1.5rem;
    margin: 0px 3px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    display: inline-block;
    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }

    ${props.active &&
    css`
      background-color: rgba(255, 255, 255, 0.5);
    `}
  `}
`

export default Dots
