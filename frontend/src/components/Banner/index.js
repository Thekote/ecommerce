import React from "react"
import styled from "styled-components"
import { MdSearch } from "react-icons/md"

const HeroBanner = () => {
  return (
    <BannerContainer>
      <form>
        <input type="text" id="search" placeholder="Buscar Produtos"></input>
        <SearchButton>
          <MdSearch />
        </SearchButton>
      </form>
    </BannerContainer>
  )
}

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60vh; //clamp(800px, 60vh, 80vh);
  background: url(https://i.imgur.com/Zfu8MTy.jpeg);
  color: gray;

  form {
    display: flex;
    align-items: top;
    margin-top: 3em;
  }

  input {
    width: 400px;
    height: 50px;
    border-radius: 10px;
    border: 0;
    padding: 0 20px;
    margin: 0 10px;
    font-size: 1em;
  }
`

const SearchButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  font-size: 2.5em;
  color: brown;
`

export default HeroBanner
