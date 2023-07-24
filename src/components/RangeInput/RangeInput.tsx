import {  IconButton, InputAdornment, Typography } from '@mui/material'
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import { StyledForm, ModalBox, TopBar, StyledField, FormContainerBox } from './RangeInput.styles';
import { RangeInputProps } from './RangeInput.types';


function RangeInput({setFinalValues}: RangeInputProps) {
   

    const [firstRow, setFirstRow] = useState<string|number>("");
    const [secondRow, setSecondRow] = useState<string|number>("");
    const [notes, setNotes] = useState("");
  
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
  
    const validateFirstRow = () => {
      const value = Number(firstRow)
      if (!value) {
        setFirstRowError("This field is required");
      } 
      else if (isNaN(value)){
        setFirstRowError("Enter a ")
      }
      else if (value <= 0) {
        setFirstRowError("should be above 1");
      } else if (value >= Number(secondRow)) {
        setFirstRowError("Value should be below the value of Last Row");
      } else {
        setFirstRowError("");
        return true
      }
    };
  
    const validateSecondRow = () => {
        const value = Number(secondRow)
      if (!value) {
        setSecondRowError("This field is required");
      } 
      else if (isNaN(value)) {
        setSecondRowError("Please enter a valid number");
      } 
      else if (value <= Number(firstRow)) {
        setSecondRowError("Value should be above the value of First Row");
      }
       else if (value >= 600) {
        setSecondRowError("Value should be below 600");
      } 
      else {
        setSecondRowError("");
        return true
      }
    };
  
    const validateNotes = () => {
        const value = notes
      if (!value) {
        setNotesError("This field is required");
      } else {
        setNotesError("");
        return true
      }
    };

    const validateAll = ()=>{
        
        validateSecondRow()
        validateNotes()
        if(validateFirstRow() && validateSecondRow() && validateNotes()){
           setFinalValues({first: firstRow, last: secondRow, note: notes})
        }else{
            
        }
    }
    
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
                <StyledField
                type="number"
                id="first"
                placeholder="Enter first row"
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleFirstInc}>
                            <AddIcon/>
                        </IconButton>
                        <IconButton onClick={handleFirstDec}>
                            <RemoveIcon/>
                        </IconButton>
                    </InputAdornment>),
                    inputProps: {min: 0, max: secondRow}  
                }} 
                
                value={firstRow.toString()}
                onChange={(e) => setFirstRow(e.target.value)}
                onBlur={validateAll}
                error={!!firstRowError}
                helperText={firstRowError}
                />
                
                
                

                <label htmlFor="last" style={{textAlign: "left"}}>Last Row</label>
                <StyledField
                type="number"
                placeholder="Enter last row"
                id="last"
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleSecondInc}>
                            <AddIcon />
                        </IconButton>
                        <IconButton onClick={handleSecondDec}>
                            <RemoveIcon/>
                        </IconButton>
                    </InputAdornment>),
                    inputProps: {min: firstRow, max: 600}  
                }}
                value={secondRow.toString()}
                onChange={(e) => setSecondRow(e.target.value)}
        onBlur={validateAll}
        error={!!secondRowError}
        helperText={secondRowError}
                />
                
            

                <StyledField
                type="text"
                placeholder="Enter notes here"
                
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                onBlur={validateAll}
                error={!!notesError}
                helperText={notesError}
                
                />
                
            </StyledForm>
            
            
        </FormContainerBox>
    </ModalBox>
  )
}


export default RangeInput