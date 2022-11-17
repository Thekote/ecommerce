import React, { useState } from "react"
import styled from "styled-components"
import { MdShoppingCart } from "react-icons/md"
import { IconContext } from "react-icons"
import { Link } from "react-router-dom"
import AdmHeaderDropdownOptions from "../AdmHeaderDropdownOptions"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Nav>
      <Logo to="/">
        <img src="https://i.imgur.com/P6KEUmH.png" alt="Logo BarShop" />
      </Logo>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </MenuIcon>
      <Menu isOpen={isOpen}>
        <MenuLink to="/">Bebidas</MenuLink>
        <MenuLink to="/">Kits</MenuLink>
        <MenuLink to="/">Copos e taças</MenuLink>
        <MenuLink to="/">Utensílios</MenuLink>
        <MenuIcons>
          <IconContext.Provider value={{ size: "2em" }}>
            <AdmHeaderDropdownOptions />
            <MenuLink to="/">
              <MdShoppingCart />
              <CartProducts>2</CartProducts>
            </MenuLink>
          </IconContext.Provider>
        </MenuIcons>
      </Menu>
    </Nav>
  )
}

const Nav = styled.div`
  background-color: white;
  width: 80vw;
  height: 80px;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  font-family: "Rubik", sans-serif;
  margin-bottom: 5rem;
`

const MenuIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background-color: gray;
    margin-bottom: 4px;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

const MenuLink = styled(Link)`
  padding: 1rem 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease-in;
  font-size: 1rem;

  &:hover {
    color: gray;
  }
`

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: white;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`

const Logo = styled(Link)`
  padding: 1rem 0;
  color: gray;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.7rem;

  img {
    height: 50px;
  }

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`

const MenuIcons = styled.div`
  font-size: 2rem;
  position: relative;
`

const CartProducts = styled.div`
  position: absolute;
  top: -5px;
  right: 10px;
  z-index: 1;
  font-size: 0.8rem;
  background-color: orange;
  width: 15px;
  height: 15px;
  border-radius: 50%;
`

export default Navbar
