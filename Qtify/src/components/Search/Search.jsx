
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

const Search = () => {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
        background: '#fff',
        borderRadius: '4px',
        width: '300px',
        padding: '0 8px',
      }}
    >
      <TextField
        placeholder="search"
        fullWidth      
      />
      
      <IconButton type="button" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default Search;
