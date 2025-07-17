import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Herosection = () => {
    return (
        <Stack spacing={2} direction="row" sx={{background:"#121212", height:"270px",display:"flex", alignItems:"center",  justifyContent:"center"}}>
            <Box sx={{ width:"515px", marginLeft:"100px !important"}}>
                <Typography variant="h4" gutterBottom sx={{color:"#ffffff", textAlign:"center"}}>
                    100 thousand songs, ad-free over thousands podcast episodes
                </Typography>
                
            </Box>
            <Box>
                 <img alt="headphones" src="src\assets\hero_headphones.png" height="200" />  
            </Box>
        </Stack>
    )
}

export default Herosection;