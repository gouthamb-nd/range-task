import {  IconButton, Input, InputAdornment, Typography } from '@mui/material'
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { StyledForm, ModalBox, TopBar, StyledField, FormContainerBox } from './RangeInput.styles';
import { RangeInputProps, finalValueType } from './RangeInput.types';
import InputField from '../InputField/InputField';


const RangeInput=({setFinalValues}: RangeInputProps) =>{
   
    const [firstRow, setFirstRow] = useState<string|number>("");
    const [secondRow, setSecondRow] = useState<string|number>("");
    const [notes, setNotes] = useState<string|number>("");
    const [firstRowError, setFirstRowError] = useState<string>("");
    const [secondRowError, setSecondRowError] = useState<string>("");
    const [notesError, setNotesError] = useState<string>("");

    const handleFirstInc = ()=>{
      setFirstRow(prev=>Number(prev)+1)
    }
    const handleFirstDec = ()=>{
      setFirstRow(prev=>Number(prev)-1)
    }

    const handleSecondInc = ()=>{
      setSecondRow(prev=>Number(prev)+1)
    }
    const handleSecondDec = ()=>{
      setSecondRow(prev=>Number(prev)-1)
    }
  
    const validateField = (name:string,value:string, setFieldError:(err:string)=>void, min?:number, max?:number, ) => {
      
      if(name==="notes"){
        if (!value) {
          setFieldError("This field is required");
        } 
      else {
        setFieldError("");
        return true;
      }
      }
      else{
        const numValue = parseFloat(value)
        if (!value) {
          setFieldError("This field is required");
        } else if (isNaN(numValue)) {
          setFieldError("Please enter a valid number");
        } else if (typeof min === "number" &&  numValue <= min) {
          setFieldError(`Value should be above ${min==firstRow? "First Row": min}`);
        } else if (typeof max === "number" && numValue >= max) {
          setFieldError(`Value should be below ${max==secondRow? "Last Row": max}`);
        } else {
          setFieldError("");
          return true;
        }
      return false;
      }
    };

    const validateAll = () => {
      const isValidFirstRow = validateField("first",firstRow.toString(),  setFirstRowError, 0, Number(secondRow), );
      const isValidSecondRow = validateField("second",secondRow.toString(), setSecondRowError,  Number(firstRow), 600, );
      const isValidNotes = validateField("third", notes.toString(), setNotesError);
  
      if (isValidFirstRow && isValidSecondRow && isValidNotes) {
        setFinalValues({ first: firstRow, last: secondRow, notes: notes });
      }
    };
    
  return (
    <ModalBox>
        <TopBar>
            <Typography variant="h6" >Slice</Typography>
            <IconButton sx={{fontSize: "1rem"}}><CloseIcon/></IconButton>
        </TopBar>
        
        <FormContainerBox>
            <p style={{textAlign: "left"}}>Retrieve rows in range</p>
            <StyledForm action="" noValidate>

                <label htmlFor="first" style={{textAlign: "left"}}>First Row</label>
                <InputField handleInc={handleFirstInc} handleDec={handleFirstDec} name="first"
                validateAll={validateAll}  rowData={firstRow}  rowError={firstRowError}
                setChangeData={setFirstRow} min={0} max={secondRow} placeholder="Enter first row"/>

                <label htmlFor="last" style={{textAlign: "left"}}>Last Row</label>
                <InputField handleInc={handleSecondInc} handleDec={handleSecondDec} name="second"
                validateAll={validateAll}  rowData={secondRow}  rowError={secondRowError}
                setChangeData={setSecondRow} min={firstRow} max={600} placeholder="Enter second row"/>

                <InputField rowData={notes}  rowError={notesError} name="notes" 
                  placeholder="Enter second row" setChangeData={setNotes} validateAll={validateAll}/>
            </StyledForm>
            
            
        </FormContainerBox>
    </ModalBox>
  )
}


export default RangeInput