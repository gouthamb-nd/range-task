import RangeInput from '../../components/RangeInput'
import { finalValueType } from './Home.types';
import { useState } from 'react';
import { Stack} from '@mui/material';
import OutputBox from '../../components/OutputBox/OutputBox';


function Home() {
  const [finalValues, setFinalValues] = useState<finalValueType>({first: "", last: "",notes: ""});

  return (
    <Stack direction="row" alignItems="center" justifyContent="center" sx={{height: "100%", width: "100%"}}>
      <Stack direction="row" gap="5rem" >
        <RangeInput setFinalValues={setFinalValues}/>
        <OutputBox finalValues={finalValues}/>
        </Stack>
    </Stack>
  )
}

export default Home