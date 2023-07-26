import RangeInput from "./RangeInput";
import { render, screen, waitFor, act} from '@testing-library/react';
import userEvent from "@testing-library/user-event";

let mockFn = jest.fn();

describe('TaskTable',() => {

    test("Render range input ", ()=>{
       const {} = render(<RangeInput setFinalValues={mockFn}/>)
        const firstRow = screen.getByLabelText("First Row")
        expect(firstRow).toBeInTheDocument()
    })



    test("Check min max value for first row input", async()=>{
        const {debug} = render(<RangeInput setFinalValues={mockFn}/>)
        

        const firstRow = await screen.getByLabelText("First Row") as HTMLInputElement
        const lastRow = await screen.getByLabelText("Last Row") as HTMLInputElement
        const head = screen.getByText("Retrieve rows in range")
        await act(async()=>{userEvent.type(lastRow,"40")})
        await act(async()=>{userEvent.click(head)})
        expect(lastRow.value).toBe(firstRow.getAttribute('max')?.toString())
    

        await act(async()=>{userEvent.type(firstRow,"-1")})
        await act(async()=>{userEvent.click(head)})
        const minError = screen.getByText("should be above 1")
        expect(minError).toBeInTheDocument()
        
    })

        

    test("Check min max value for second row input on blur", async ()=>{
        const {debug} = render(<RangeInput setFinalValues={mockFn}/>)
        const lastRow =  screen.getByLabelText("Last Row") as HTMLInputElement
        const firstRow = screen.getByLabelText("First Row") as HTMLInputElement
        const head = screen.getByText("Retrieve rows in range")
        await act(async()=>{userEvent.type(firstRow,"40")})
        await act(async()=>{userEvent.click(head)})
        expect(firstRow.value).toBe(lastRow.getAttribute('min')?.toString())


        const lastRowMin =  screen.getByLabelText("Last Row") as HTMLInputElement
        await act(async()=>{userEvent.type(lastRowMin,"601")})
        await act(async()=>{userEvent.click(head)})
        const maxErr = screen.queryByText("Value should be below 600")
        await waitFor(()=>{
            expect(maxErr).toBeInTheDocument()
        })
        
})

})