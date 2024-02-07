import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
    id: number;
    name: string;
    slug: string,
}

export interface Game { // generate interface for the results 
    id: number;
    name: string;
    background_image: string;
    platforms: {platform: Platform}[]
    metacritic: number; 
  }

  interface FetchGamesResponse {
    count: number;
    results: Game[]; // Ensure result is typed as an array of Game
  }



const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<string | null>(null); // Error state should be a string or null

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal})
      .then((res) => {
        // Ensure response data is valid and result is an array before setting state
        if (Array.isArray(res.data.results)) {
          setGames(res.data.results);
        } else {
          setError("Invalid data format received from the server.");
        }
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        // Handle any errors that occur during the fetch
        setError(err.message || "An error occurred while fetching games.");
      });
      return () => controller.abort()
  }, []); // Dependency array added to prevent infinite fetching

  return { games, error}
}


export default useGames