import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

const Search = () => {
    return (
        <>
            <Box component="form" sx={{width:"45%", background:"#fefefe"}}>
               <TextField label="Search a album of your choice" className='searchbar' placeholder='search' />
               <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Box >
     </>
    )
}

export default Search;