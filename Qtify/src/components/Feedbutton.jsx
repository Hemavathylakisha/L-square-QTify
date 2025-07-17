import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Feedbutton = () => {

    return(
         <Stack spacing={2} direction="row" sx={{background:"#121212", borderRadius:"12px", padding:"5px 5px"}}>
             <Button>Give feedback</Button>
        </Stack>
    )
}

export default Feedbutton;