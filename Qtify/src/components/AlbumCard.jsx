import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";

const AlbumCard = ({ image, title, follows, likes, isSong = false }) => {
  return (
    <Card sx={{ width: '159px', height:'232px', borderRadius: 2, boxShadow: 3 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography variant="subtitle1" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {isSong ? `${likes} Likes` : `${follows} Follows`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AlbumCard;
