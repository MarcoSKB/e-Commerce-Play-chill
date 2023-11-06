interface Props {
  inputValue: string;
  setInputValue: (e: string) => void;
  isActive: boolean;
}

const SearchForm: React.FC<Props> = (props) => {
  const { inputValue, setInputValue, isActive } = props;

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={(e) => handlerSubmit(e)}>
      <input
        className={`absolute w-[100%] min-h-16 text-base py-5 pl-8 pr-[60px] focus:outline-none transition-colors duration-300 ${
          isActive
            ? "bg-white text-black font-bold rounded-t-2xl"
            : "bg-darkGray rounded-2xl"
        }`}
        maxLength={128}
        placeholder="Search"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        type="text"
      />
      <button
        type="submit"
        className={`absolute z-20 opacity-20 hover:opacity-50 transition-opacity ${
          isActive
            ? "bg-darkBlue p-2 rounded-lg w-8 h-8 right-5 top-[17px]"
            : "w-6 h-6 right-6 top-5"
        }`}
      >
        <img
          src="/icons/union.svg"
          alt="Input icon"
          className="pointer-events-none"
        />
      </button>
    </form>
  );
};

export default SearchForm;
