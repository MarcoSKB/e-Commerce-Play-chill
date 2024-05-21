"use client";

interface Props {
  inputValue: string;
  setInputValue: (e: string) => void;
  isOpen: boolean;
  toggleSearch: () => void;
}

const SearchForm: React.FC<Props> = (props) => {
  const { inputValue, setInputValue, isOpen, toggleSearch } = props;

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSearch();
  };

  const onTypeInput = () => {
    if (!isOpen) {
      toggleSearch();
    }
  };

  return (
    <form onSubmit={(e) => handlerSubmit(e)} onInput={() => onTypeInput()}>
      <input
        className={`absolute w-full md:min-h-16 text-base pl-6 md:py-5 md:pl-8 md:pr-[60px] focus-visible:outline-none transition-colors duration-300 ${
          isOpen
            ? "bg-white text-black font-bold h-full rounded-none md:rounded-t-2xl"
            : "bg-darkGray rounded-2xl hidden md:block"
        }`}
        maxLength={128}
        placeholder="Search"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        type="text"
      />
      <button
        type="submit"
        className={`absolute z-20 lx:opacity-20 hover:opacity-50 transition-opacity focus-visible:outline-none rounded-md focus-visible:outline-blue focus-visible:outline-offset-8 ${
          isOpen
            ? "bg-darkBlue p-2 rounded-lg w-8 h-8 right-5 top-[17px]"
            : "w-6 h-6 md:right-6 top-5"
        }`}
      >
        <div className="sr-only">Search button</div>
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
