import RangeInput from '../../components/RangeInput'
import { finalValueType } from './Home.types';
import { useState } from 'react';
import { Paper, Stack, Typography, Box } from '@mui/material';
import { TopBar } from './Home.styles';


function Home() {
  const [finalValues, setFinalValues] = useState<finalValueType>();

  return (
    <Stack direction="row" alignItems="center" justifyContent="center" sx={{height: "100%", width: "100%"}}>
      <Stack direction="row" gap="5rem" >
        <RangeInput setFinalValues={setFinalValues}/>
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
          <Typography variant="h6">{finalValues?.note}</Typography>
          </Stack>
          </Box>

        </Paper>

        </Stack>
    </Stack>
  )
}

export default Home