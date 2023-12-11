import Image from "next/image";

interface Props {
  iconURL: string;
  title: string;
  description: string;
}

const AdvantageCard: React.FC<Props> = (props) => {
  const { iconURL, title, description } = props;
  return (
    <div className="flex flex-col w-full px-6 py-14 bg-darkBlue rounded-[17px]">
      <div className="flex gap-x-[25px] items-center mb-[50px] mx-auto">
        <div className="relative flex max-w-[90px] w-full max-h-[90px] h-full">
          <Image
            src={iconURL}
            alt="Icon advantage"
            className="aspect-square"
            sizes="w-[70px] h-[70px]"
            fill
          />
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <span className="text-center text-[15px] opacity-60">{description}</span>
    </div>
  );
};

export default AdvantageCard;
