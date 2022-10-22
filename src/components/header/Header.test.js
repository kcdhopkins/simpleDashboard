import { render, screen } from "@testing-library/react"
import Header from "./Header"


describe("Header test", ()=>{
    test("is logo in document", ()=>{
        render(<Header/>)
        const logo = screen.getByTestId("logo")
        expect(logo).toBeInTheDocument()
    })

    test("is change group button in document", ()=>{
        render(<Header/>)
        const changeGroupButton = screen.getByText("Change Group")
        expect(changeGroupButton).toBeInTheDocument()
    })
})