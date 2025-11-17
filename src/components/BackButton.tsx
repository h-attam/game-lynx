import { useNavigate } from "react-router";
import back from "../assets/back.png";
const BackButton = () => {
  const nav = useNavigate();
  return (
    <view className="back-button" bindtap={() => nav(-1)}>
      <image src={back} className="back-icon" />
    </view>
  );
};

export default BackButton;
