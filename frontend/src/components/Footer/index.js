import React from "react"
import styled from "styled-components"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { IconContext } from "react-icons"

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "5rem",
        justifyContent: "center",
        backgroundColor: "lightgray",
        width: "100%",
      }}
    >
      <FooterContainer>
        <Col>
          <Logo href="">
            <img src="https://i.imgur.com/P6KEUmH.png" alt="Logo BarShop" />
          </Logo>
          <div class="social" style={{ marginTop: "40px" }}>
            <IconContext.Provider value={{ size: "2em" }}>
              <FaFacebook style={{ marginRight: "25px" }} />{" "}
              <FaInstagram style={{ marginRight: "25px" }} /> <FaYoutube />
            </IconContext.Provider>
          </div>
        </Col>
        <Col>
          <h3>INSTITUCIONAL</h3>
          <p>Quem somos</p>
          <p>Formas de Pagamento</p>
          <p>Entregas</p>
          <p>Privacidade</p>
        </Col>
        <Col>
          <h3>PRECISA DE AJUDA?</h3>
          <p>Como comprar</p>
          <p>Dúvidas Frequentes</p>
          <p>Trocas e Devoluções</p>
          <p>Fale conosco</p>
        </Col>
      </FooterContainer>
    </div>
  )
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 50px;
  width: 80vw;
  height: 300px;
  margin: 0;
  color: #161b22;
`

const Logo = styled.div`
  color: gray;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.7rem;

  img {
    height: 50px;
  }
`

const Col = styled.div`
  h3 {
    height: 50px;
  }

  p {
    height: 40px;
  }
`

export default Footer
