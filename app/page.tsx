"use client";

import React, { useState } from "react";
import { Box, TextField, Button, Typography, Container, Paper } from "@mui/material";
import CakeIcon from '@mui/icons-material/Cake';

export default function BirthdayPage() {
  const [name, setName] = useState("");
  const [showWish, setShowWish] = useState(false);

  const handleClick = () => {
    if (name.trim() !== "") {
      setShowWish(true);
    } else {
      setShowWish(false);
      alert("Please enter a name!");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 3, textAlign: "center", background: "linear-gradient(135deg, #FFC1CC, #FFB347)" }}>
        <CakeIcon sx={{ fontSize: 60, color: "#fff", mb: 2 }} />
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#fff", textShadow: "2px 2px 5px #FF6F61" }}>
          Happy Birthday!
        </Typography>

        <TextField
          label="Enter her name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          sx={{ mb: 3, backgroundColor: "white", borderRadius: 1 }}
        />

        <Button 
          variant="contained" 
          color="secondary" 
          onClick={handleClick} 
          sx={{ mb: 3, backgroundColor: "#FF69B4" }}
        >
          Show Wish
        </Button>

        {showWish && (
          <Box sx={{ mt: 3, p: 3, borderRadius: 2, backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
            <Typography variant="h5" sx={{ color: "#FF1493", fontWeight: "bold" }}>
              🎉 Happy Birthday, {name}! 🎉
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "#C71585" }}>
              May your day be filled with love, laughter, and all the happiness in the world! 💖
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic", color: "#FF69B4" }}>
              You are the sunshine of my life, and I’m so grateful for you every single day. 🌸
            </Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
}
