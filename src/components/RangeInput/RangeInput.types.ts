
export type finalValueType = {
    first: number | string
    last: number | string 
    notes: string | number
}



export type RangeInputProps = {
    setFinalValues: (data:finalValueType )=>void
  }

export type InputFieldTypes = {
    name: string,
    rowData : string|number,
    rowError: string|number,
    min?: string|number,
    max?: string|number,
    placeholder: string,
    handleInc?: ()=>void,
    handleDec?: ()=> void,
    setChangeData: (data:string|number)=>void,
    validateAll: ()=> void
}