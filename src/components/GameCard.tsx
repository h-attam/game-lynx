import { useState } from "react";
import { useNavigate } from "react-router";
import { GamePreview } from "../types";
import { getGameImage } from "../utils.js";

const GameCard = (props: GamePreview) => {
  const { id, name, cover } = props;
  const nav = useNavigate();
  const [isPressed, setIsPressed] = useState(false);

  return (
    <view
      className={`card fade-in-scale ${isPressed ? "pressed" : ""}`}
      style={{
        width: "150px",
        transition: "all 0.2s ease-in-out",
      }}
      bindtap={() => nav(`/game-details/${id}`)}
      bindtouchstart={() => setIsPressed(true)}
      bindtouchend={() => setIsPressed(false)}
    >
      <image src={getGameImage(cover?.image_id)} className="image flip-in" />
      <text className="card-title" text-maxline="2">
        {name}
      </text>
    </view>
  );
};

export default GameCard;
