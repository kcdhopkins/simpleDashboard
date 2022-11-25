import { render, screen } from "@testing-library/react"
import Header from "./Header"


describe("Header test", ()=>{
    test("is logo in document", ()=>{
        render(<Header/>)
        const logo = screen.getByTestId("logo")
        expect(logo).toBeInTheDocument()
    })
})