import styled from "styled-components"

const SearchBar = (props) => (
  <Input type="text" placeholder="Pesquisar" {...props} />
)

export default SearchBar

const Input = styled.input`
  height: 40px;
  width: 30rem;
  padding: 0 20px;
  border-radius: 5px;
  border: 1px solid black;
`
