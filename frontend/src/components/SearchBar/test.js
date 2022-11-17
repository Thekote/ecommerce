import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import SearchBar from "."

describe("<SearchBar />", () => {
  it("should match snapshot", () => {
    const { container } = render(<SearchBar />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("should have a value of filterProduct", () => {
    render(<SearchBar value={"procurando"} onChange={() => {}} />)

    const input = screen.getByPlaceholderText(/pesquisar/i)

    expect(input.value).toBe("procurando")
  })

  it("should call handleChangeFilterProduct function on each key pressed", () => {
    const onChange = jest.fn()
    render(<SearchBar onChange={onChange} />)

    const input = screen.getByPlaceholderText(/pesquisar/i)
    const value = "o valor"

    userEvent.type(input, value)
    expect(input.value).toBe(value)
    expect(onChange).toHaveBeenCalledTimes(value.length)
  })
})
