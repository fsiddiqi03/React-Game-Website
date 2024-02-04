// src/components/GameGrid.tsx
import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  if (error) {
    return <div>Error: {error}</div>; // Render error message if error state is set
  }

  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};

export default GameGrid;
