interface Props {
  onClick: () => void;
}

const FiltersButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="md:hidden w-[53px] h-[53px] p-4 rounded-[10px] bg-green active:bg-gray-800 active:scale-90 transition-all outline-none focus-visible:outline-blue"
    >
      <img src="/icons/filter.svg" alt="Filter icon" />
      <span className="sr-only">Filter toggle button</span>
    </button>
  );
};

export default FiltersButton;
