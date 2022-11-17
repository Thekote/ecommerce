import React from "react"
import styled, { css } from "styled-components"

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div>
      <Arrow direction="prev" onClick={prevSlide}>
        &#10094;
      </Arrow>
      <Arrow direction="next" onClick={nextSlide}>
        &#10095;
      </Arrow>
    </div>
  )
}

const Arrow = styled.button`
  ${({ direction }) => css`
    border: none;
    background-color: transparent;
    cursor: pointer;
    z-index: 100;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 1rem;
    margin-top: -3rem;
    font-size: 40px;
    font-weight: bold;
    border-radius: 0px 5px 5px 0px;
    &:hover {
      color: white;
      background-color: rgba(0, 0, 0, 0.6);
      transition: all 0.5s ease-in;
    }

    ${direction === "next" &&
    css`
      right: 0;
      border-radius: 5px 0px 0px 5px;
    `}
  `}
`

export default Arrows
