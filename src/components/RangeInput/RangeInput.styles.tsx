import { Box, TextField } from "@mui/material";
import { styled } from '@mui/system';


export const ModalBox = styled(Box)`
    width: 20rem;
    border: 1px solid black;
    border-radius: 0.25rem;
`

export const TopBar = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: ${({theme})=> theme.spacing(1.5)};
    border-bottom: 2px solid #e6e6e6;
`

export const FormContainerBox = styled(Box)`
    padding: ${({theme})=> theme.spacing(2, 1.5, 2, 1.5 )};
`

export const StyledForm = styled('form')`
    display: flex;
    flex-direction: column;
    margin-top: ${({theme})=> theme.spacing(1)};
    
`

export const StyledField = styled(TextField)`

background-color: #e6e6e6;

box-sizing: border-box;
margin: ${({theme})=> theme.spacing(1, 0, 1.5,0)}
`

export const ErrorBox = styled(Box)`
    color: red;
    font-size: 0.7rem;
    text-align: left;
`