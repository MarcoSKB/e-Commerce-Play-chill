interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  iconURL: string;
  iconAlt: string;
  className?: string;
}

const IconButton: React.FC<Props> = (props) => {
  const { onClick, iconURL, iconAlt, className = "bg-white" } = props;

  return (
    <button
      className={`flex items-center justify-center w-10 h-10 p-[3px] rounded-lg md:rounded-full transition-all md:hover:scale-90 md:active:scale-75 ${className}`}
      onClick={(e) => onClick(e)}
      type="button"
    >
      <img src={iconURL} alt={iconAlt} className="w-5 h-5" />
      <span className="sr-only">Favorite button</span>
    </button>
  );
};

export default IconButton;
