import type { GamePreview } from "../types.js";
import GameCard from "./GameCard.js";

const GameList = ({ games }: { games: GamePreview[] }) => {
  return (
    <list
      scroll-orientation="horizontal"
      list-type="single"
      span-count={1}
      className="horizontal-list"
    >
      {games?.map((game) => {
        return (
          <list-item
            item-key={`list-item-${game.id}`}
            key={`list-item-${game.id}`}
          >
            <GameCard {...game} />
          </list-item>
        );
      })}
    </list>
  );
};

export default GameList;
