import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Header from "./Header"


describe("Drop down Change Group button test", ()=>{
    test("Are group options visible after click", async ()=>{
        render(<Header/>)
        const changeGroupButton = screen.getByTestId("change-button")
        fireEvent.click(changeGroupButton)
        const group1 = screen.getByTestId("drop-down")

        await waitFor(()=>{
            expect(group1).toBeInTheDocument()
        })
    })
})