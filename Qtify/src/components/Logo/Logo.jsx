
import React from 'react';
import { Avatar, AvatarGroup, Stack } from '@mui/material';
import logo from '../../assets/logo.png'; // Adjust path as needed

const Logo = () => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <a href="/">
        <img alt="Qtify Logo" src={logo} height="40" />
      </a>

      <AvatarGroup
        total={3}
        sx={{
          bgcolor: "#fefefe",
          borderRadius: "10px 10px 10px 0px",
          height: "38px",
          padding: "2px",
        }}
      >
        <Avatar
          sx={{ bgcolor: "#f011b8ff", width: 30, height: 30 }}
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
        <Avatar
          sx={{ bgcolor: "#756c73ff", width: 30, height: 30 }}
          alt="Travis Howard"
          src="/static/images/avatar/2.jpg"
        />
        <Avatar
          sx={{ bgcolor: "#dbd1d9ff", width: 30, height: 30 }}
          alt="Trevor Henderson"
          src="/static/images/avatar/5.jpg"
        />
      </AvatarGroup>
    </Stack>
  );
};

export default Logo;
