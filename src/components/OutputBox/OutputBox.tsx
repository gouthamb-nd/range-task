import { Paper, Stack, Typography, Box } from '@mui/material';
import { TopBar } from '../../pages/home/Home.styles';
import { OutputProps } from './OutputBox.types';
   

const OutputBox = ({finalValues}: OutputProps)=> {
  return (
    <Paper sx={{width: "20rem"}} elevation={6}>
        <TopBar>
        <Typography variant="h6" >Values</Typography>
        </TopBar>
        <Box sx={{padding: "1rem"}}>
        <Stack direction="row">
        <Typography variant="h6">First Row:</Typography>
        <Typography variant="h6">{finalValues?.first}</Typography>
        </Stack>
        <Stack direction="row">
        <Typography variant="h6">Last Row:</Typography>
        <Typography variant="h6">{finalValues?.last}</Typography>
        </Stack>
        <Stack direction="row">
        <Typography variant="h6">Note:</Typography>
        <Typography variant="h6">{finalValues?.notes}</Typography>
        </Stack>
        </Box>

        </Paper>
  )
}

export default OutputBox
    