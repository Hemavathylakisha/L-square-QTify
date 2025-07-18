import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, CircularProgress, Box, Tabs, Tab, Typography } from "@mui/material";
import Section from "./Section";

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSongsAndGenres = async () => {
      try {
        const [songsRes, genresRes] = await Promise.all([
          axios.get("https://qtify-backend-labs.crio.do/songs"),
          axios.get("https://qtify-backend-labs.crio.do/genres"),
        ]);
        setSongs(songsRes.data);
        setGenres([{ key: "all", label: "All" }, ...genresRes.data.data]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching songs or genres:", error);
        setLoading(false);
      }
    };
    fetchSongsAndGenres();
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  return (
    <Container>
      <Box sx={{ py: 4 }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Songs
        </Typography>

        <Tabs
          value={selectedGenre}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="Genre Tabs"
          sx={{
            mb: 2,
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: "bold",
              minHeight: "36px",
              minWidth: "80px",
              mx: 0.5,
              px: 2,
              py: 1,
              color: "#34c94b",
            },
            "& .Mui-selected": {
              color: "#fff",
            },
            "& .Mui-hover": {
              border: "0",
            },
            "& .Mui-visited": {
              border: "0",
            },
          }}
        >
          {genres.map((genre) => (
            <Tab key={genre.key} label={genre.label} value={genre.key} />
          ))}
        </Tabs>

        {loading ? (
          <Box display="flex" justifyContent="center" py={5}>
            <CircularProgress />
          </Box>
        ) : (
          <Section data={filteredSongs} isSongSection={true} />
        )}
      </Box>
    </Container>
  );
};

export default Songs;
