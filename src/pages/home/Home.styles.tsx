import { Box } from "@mui/material"
import { styled } from '@mui/system';

export const TopBar = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: ${({theme})=> theme.spacing(1.5)};
    border-bottom: 2px solid #e6e6e6;
`