import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, CircularProgress, Box } from "@mui/material";
import Section from "./Section";

const TopAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://qtify-backend-labs.crio.do/albums/top")
      .then((res) => {
        setAlbums(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch albums", err);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      {loading ? (
        <Box display="flex" justifyContent="center" py={5}>
          <CircularProgress />
        </Box>
      ) : (
        <Section title="Top Albums" data={albums} />
      )}
    </Container>
  );
};

export default TopAlbums;
