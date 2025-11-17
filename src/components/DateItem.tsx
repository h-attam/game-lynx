import dateIcon from "../assets/date-icon.jpg";

const DateItem = ({ date }: { date: string }) => {
  return (
    <view className="date-container">
      <image src={dateIcon} className="date-icon" />
      <text className="date">{date}</text>
    </view>
  );
};

export default DateItem;
