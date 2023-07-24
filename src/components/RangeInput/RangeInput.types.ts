
export type finalValueType = {
    first: number | string
    last: number | string 
    note: string
}



export type RangeInputProps = {
    setFinalValues: (data:finalValueType )=>void
  }
  