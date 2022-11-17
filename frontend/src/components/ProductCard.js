import React from "react"
import styled from "styled-components"

const ProductCard = ({ title, description, oldPrice, price, imageUrl }) => {
  return (
    <ProductContainer>
      <ProdImg>
        <img src={imageUrl} alt={title} />
      </ProdImg>
      <ProdInfo>
        <ProdName>{title}</ProdName>
        <ProdDescription>{description}</ProdDescription>
        <ProdPrice>R${price}</ProdPrice>
        <BtnAddCart>Adicionar ao Carrinho</BtnAddCart>
      </ProdInfo>
    </ProductContainer>
  )
}

const ProductContainer = styled.div`
  height: 25rem;
  font-family: "Rubik", sans-serif;
  border-radius: 10px;
  padding: 10px;
  margin: 20px 0;
  background-color: white;
  box-shadow: 0px 5px 5px gray;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProdImg = styled.div`
  background-color: white;
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
  }
`

const ProdInfo = styled.div``

const ProdName = styled.h1`
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 10px;
`

const ProdDescription = styled.p`
  font-size: 0.8em;
  margin-bottom: 10px;
`

const ProdPrice = styled.div`
  font-size: 1.2em;
  margin-bottom: 20px;
`

const BtnAddCart = styled.div`
  cursor: pointer;
  color: white;
  width: 100%;
  height: 40px;
  background-color: #f2b705;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default ProductCard
