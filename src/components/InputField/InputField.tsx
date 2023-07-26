import { StyledField } from '../RangeInput/RangeInput.styles'
import { InputAdornment, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {InputFieldTypes} from '../RangeInput/RangeInput.types'

const InputField = ({handleInc, handleDec, name, validateAll, rowData,  rowError, setChangeData, min, max, placeholder}:InputFieldTypes) =>{
    const tempProps ={endAdornment: (
        <InputAdornment position="end">
            <IconButton onClick={handleInc}>
                <AddIcon/>
            </IconButton>
            <IconButton onClick={handleDec}>
                <RemoveIcon/>
            </IconButton>
        </InputAdornment>),
        inputProps: {min: min, max: max}   }

  return (
    <StyledField
                type={min||max?"number":"text"}
                placeholder={placeholder}     
                InputProps={handleInc||handleDec? tempProps: {}} 
                name={name}
                value={rowData.toString()}
                onChange={(e)=>setChangeData(e.target.value)}
                onBlur={validateAll}
                error={!!rowError}
                helperText={rowError}
                />
  )
}

export default InputField