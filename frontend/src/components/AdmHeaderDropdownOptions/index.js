import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { MdAccountCircle } from "react-icons/md"
import { Link } from "react-router-dom"
import styled from "styled-components"

const AdmHeaderDropdownOptions = () => (
  <DropdownMenu.Root>
    <DropdownMenuTrigger>
      <MdAccountCircle />
    </DropdownMenuTrigger>
    <DropdownMenuContent sideOffset={5}>
      <DropdownMenuItem>
        <MenuLink to="/product/new">Cadastrar Produtos</MenuLink>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <MenuLink to="/category/new">Cadastrar Categorias</MenuLink>
      </DropdownMenuItem>
      <DropdownMenu.Arrow />
    </DropdownMenuContent>
  </DropdownMenu.Root>
)

const MenuLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease-in;
  font-size: 1rem;
  display: block;

  &:hover {
    color: gray;
  }
`

const DropdownMenuTrigger = styled(DropdownMenu.Trigger)`
  border: none;
  padding: 1rem;
  background-color: transparent;
  cursor: pointer;
  color: black;
  transition: all 0.3s ease-in;

  &:hover {
    color: gray;
  }
`
const DropdownMenuContent = styled(DropdownMenu.Content)`
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 0 20px 0 rgba(0 0 0 / 0.1);
`
const DropdownMenuItem = styled(DropdownMenu.Item)`
  margin-top: 5px;
  margin-bottom: 5px;

  &:focus {
    background-color: gainsboro;
  }
`

export default AdmHeaderDropdownOptions
