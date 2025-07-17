import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Feedbutton = () => {

    return(
         <Stack direction="row" sx={{background:"#121212", borderRadius:"12px", height:"47px"}}>
             <Button>Give feedback</Button>
        </Stack>
    )
}

export default Feedbutton;