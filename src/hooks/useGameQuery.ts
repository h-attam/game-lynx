import { useQuery } from "@tanstack/react-query";
import { GamePreview } from "../types";

const useGameQuery = (query: string) => {
  const getQueriedGames = async (): Promise<GamePreview[]> => {
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
    return data;
  };

  return useQuery({
    queryKey: ["gameQuery", query],
    queryFn: getQueriedGames,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
  });
};

export default useGameQuery;
