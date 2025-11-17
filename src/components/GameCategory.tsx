import useGameQuery from "../hooks/useGameQuery.js";
import GameCard from "./GameCard.js";
import GameList from "./GameList.js";
import Loader from "./Loader.js";

interface GameCategory {
  id: string;
  title: string;
  query: string;
}

const GameCategory = (props: GameCategory) => {
  const { id, title, query } = props;
  const { data: games, isPending, error } = useGameQuery(query);
  if (isPending) return <Loader />;
  if (error) return <text>error: {error.message}</text>;
  console.log(games);
  return (
    <view className="category">
      <text className="heading">{title}</text>

      <GameList games={games} />
    </view>
  );
};

export default GameCategory;
