
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Stack from '@mui/material/Stack';


const Logo = () => {
    return ( 
   
            <Stack direction="row" spacing={2}>
                <img alt="logo" src="src\assets\logo.png" height="40"/>               
            
             <AvatarGroup total={3} sx={{ bgcolor:"#fefefe", borderRadius:"10px 10px 10px 0px", height:"38px", padding:"2px"}} spacing="small">
                <Avatar sx={{ bgcolor: "#f011b8ff", width: 30, height: 30, marginTop : "3px" }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar sx={{ bgcolor: "#756c73ff", width: 30, height: 30, marginTop : "3px" }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />               
                <Avatar sx={{ bgcolor: "#dbd1d9ff", width: 30, height: 30, marginTop : "3px" }} alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup> 
            <AvatarGroup total={2} sx={{ bgcolor:"#fefefe", borderRadius:"10px 10px 10px 0px", height:"28px", padding:"2px"}} spacing="medium">
                <Avatar sx={{ bgcolor: "#f011b8ff", width: 20, height: 20, marginTop : "3px" }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar sx={{ bgcolor: "#756c73ff", width: 20, height: 20, marginTop : "3px" }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />               
            </AvatarGroup>

            </Stack>            
                      
    )
}

export default Logo;