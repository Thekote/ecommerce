import React, { useEffect, useState } from "react"
import SliderContent from "./SliderContent"
import Dots from "./Dots"
import Arrows from "./Arrows"
import sliderImage from "./sliderImage"
import styled from "styled-components"

const len = sliderImage.length - 1

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <Container>
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </Container>
  )
}

const Container = styled.div`
  height: var(--heights);
  width: var(--widths);
  position: relative;
  margin: auto;
  overflow: hidden;
`

export default Slider
