import { useQuery } from "@tanstack/react-query";
import type { Game } from "../types.js";

const useGame = (id: string) => {
  const getGame = async (): Promise<Game> => {
    const query = `
      fields id, name, cover.image_id, genres.name, involved_companies.company.name,
      platforms.name, rating, release_dates.human, screenshots.image_id,
      similar_games.id, similar_games.name, similar_games.cover.image_id, summary;
      where id = ${id};
    `;

    const response = await fetch("https://api.igdb.com/v4/games", {
      method: "POST",
      headers: {
        "client-id": "kib618vxz5i3irdaguqfgk9z9eqytr",
        Authorization: "Bearer qwpjdvucvhq3pad7p46qq89p770oes",
        "Content-Type": "text/plain",
        Accept: "application/json",
      },
      body: query,
    });

    const data = await response.json();
    console.log(data);

    if (!data || data.length === 0) {
      throw new Error("Game not found");
    }

    return data[0];
  };

  return useQuery({
    queryKey: ["game", id],
    queryFn: getGame,
    enabled: !!id,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
  });
};

export default useGame;
