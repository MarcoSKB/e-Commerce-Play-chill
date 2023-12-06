interface Props {
  width: number;
  height: number;
  isSpinning?: boolean;
}

const LoadingSpin: React.FC<Props> = (props) => {
  const { width, height, isSpinning = true } = props;

  return (
    <svg
      className={`mr-3 ${isSpinning ? "animate-spin" : ""}`}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#366edc"
        stroke-width="12"
        r="35"
        stroke-dasharray="164.93361431346415 56.97787143782138"
      />
    </svg>
  );
};

export default LoadingSpin;
