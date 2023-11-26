import PaginationButton from "./PaginationButton";

interface Props {
  paginationData: (number | string)[];
  onClickHandler: (value: number | string) => void;
  currentValue: number;
}

const PaginationControl: React.FC<Props> = (props) => {
  const { paginationData, onClickHandler, currentValue } = props;
  return (
    <div className="flex justify-center gap-4 py-10">
      {paginationData.map((value, idx) => (
        <PaginationButton
          key={idx}
          onClickHandler={onClickHandler}
          currentValue={currentValue}
          value={value}
        />
      ))}
    </div>
  );
};

export default PaginationControl;
