import React, { useState, useEffect } from "react"
import styled from "styled-components"
import ProductCard from "./ProductCard"
import axios from "axios"
import SearchBar from "./SearchBar"

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [filterProduct, setFilterProduct] = useState("")

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filterProduct.toLowerCase())
  )

  const handleChangeFilterProduct = (event) => {
    setFilterProduct(event.target.value)
  }

  useEffect(() => {
    axios.get("http://localhost:3005/product").then((response) => {
      const dataProducts = response.data

      setProducts(dataProducts)
    })
  }, [])

  return (
    <MainContent>
      <TitleList>Confira nossos produtos </TitleList>
      <SearchBar value={filterProduct} onChange={handleChangeFilterProduct} />
      <ProductsContainer>
        {filteredProducts.map(({ id, title, price, description, imageUrl }) => (
          <li key={id}>
            <ProductCard
              title={title}
              price={price}
              description={description}
              imageUrl={imageUrl}
            />
          </li>
        ))}
      </ProductsContainer>
    </MainContent>
  )
}

const MainContent = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProductsContainer = styled.ul`
  list-style: none;
  background-color: #fff8;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  padding: 20px;
  width: 80vw;

  @media (max-width: 1240px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 930px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 630px) {
    grid-template-columns: 1fr;
  }
`

const TitleList = styled.h2`
  width: 100%;
  height: 50px;
  margin-top: 30px;
  font-size: 2em;
  text-align: center;
`

export default ProductList
