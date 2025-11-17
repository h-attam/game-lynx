import { useParams } from "react-router";
import BackButton from "../components/BackButton.js";
import useGame from "../hooks/useGame.js";
import { getGameImage } from "../utils.js";
import star from "../assets/star.png";
import DateItem from "../components/DateItem.js";
import { useState } from "@lynx-js/react";
import GameList from "../components/GameList.js";
import Loader from "../components/Loader.js";

const GameDetailsScreen = () => {
  let { id } = useParams();

  const { data: game, isPending, error } = useGame(id);

  const [maxLine, setMaxLine] = useState("5");

  if (isPending) return <Loader />;
  if (error) return <text>Error: {error.message}</text>;

  const {
    cover,
    name,
    rating,
    involved_companies,
    release_dates,
    summary,
    genres,
    screenshots,
    platforms,
    similar_games,
  } = game;

  return (
    <scroll-view className="scroll-container" scroll-orientation="vertical">
      <view scroll-content style={{ padding: "20px" }}>
        <BackButton />
        <image
          src={getGameImage(cover?.image_id)}
          className="image"
          style={{
            width: "60%",
            aspectRatio: 3 / 4,
            alignSelf: "center",
          }}
        />
        <view className="game-info">
          <text className="game-name">{name}</text>
          <view className="star-container">
            <image src={star} className="star" />
          </view>
        </view>
        <text className="developer">
          By {involved_companies[0]?.company.name}
        </text>
        <DateItem date={release_dates[0]?.human} />
        <text className="summary" text-maxline={maxLine}>
          {summary}
          <inline-truncation>
            <text bindtap={() => setMaxLine("-1")}>... See more</text>
          </inline-truncation>
        </text>
        <view className="tag-container">
          {genres?.map((genre) => (
            <text key={genre.id} className="tag">
              {genre.name}
            </text>
          ))}
        </view>
        <text className="heading">Screenshots</text>
        <list
          scroll-orientation="horizontal"
          list-type="single"
          span-count={1}
          className="horizontal-list"
        >
          {screenshots?.map((screenshot) => {
            return (
              <list-item
                item-key={`list-item-${screenshot.id}`}
                key={`list-item-${screenshot.id}`}
              >
                <image
                  src={getGameImage(screenshot?.image_id)}
                  className="image"
                  style={{
                    width: "230px",
                    aspectRatio: 16 / 9,
                  }}
                />
              </list-item>
            );
          })}
        </list>
        <text className="heading">You can play on</text>
        <view className="tag-container">
          {platforms?.map((platform) => (
            <text key={platform.id} className="tag">
              {platform.name}
            </text>
          ))}
        </view>
        <text className="heading">You may also like</text>
        <GameList games={similar_games} />
      </view>
    </scroll-view>
  );
};

export default GameDetailsScreen;
