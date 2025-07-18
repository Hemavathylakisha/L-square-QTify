import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import AlbumCard from "./AlbumCard";
import Carousel from "../Carousel/Carousel";

const Section = ({ title = "", data = [], isSongSection = false }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleView = () => setIsCollapsed((prev) => !prev);

  const showButton = !isSongSection;
  const showGrid = !isCollapsed && !isSongSection;

  return (
    <Box sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>
        {showButton && (
          <Button onClick={toggleView} variant="text">
            {isCollapsed ? "Show All" : "Collapse"}
          </Button>
        )}
      </Box>

      {showGrid ? (
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={3} lg={2}>
              <AlbumCard
                title={item.title}
                follows={item.follows}
                likes={item.likes}
                image={item.image}
                isSong={isSongSection}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Carousel>
          {data.map((item) => (
            <AlbumCard
              key={item.id}
              title={item.title}
              follows={item.follows}
              likes={item.likes}
              image={item.image}
              isSong={isSongSection}
            />
          ))}
        </Carousel>
      )}
    </Box>
  );
};

export default Section;
