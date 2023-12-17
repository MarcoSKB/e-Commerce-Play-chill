import { UserType } from "@/src/types/UserType";

interface Props {
  rating: number;
  user: UserType;
  createdAt: string;
}

const UserHeaderInfo: React.FC<Props> = (props) => {
  const { rating, user, createdAt } = props;

  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-col gap-1">
        <span className="text-lg font-semibold">{user.name}</span>
        <span className="text-sm font-semibold opacity-50">{createdAt}</span>
      </div>
      <div className="flex max-w-[120px] w-full">
        {[...Array(rating)].map((_, index) => (
          <img
            key={index}
            className="w-6 h-6"
            src="/icons/star/star.svg"
            alt="Star"
          />
        ))}
        {[...Array(5 - rating)].map((_, index) => (
          <img
            key={index}
            className="w-6 h-6"
            src="/icons/star/star-empty.svg"
            alt="Star"
          />
        ))}
      </div>
    </div>
  );
};

export default UserHeaderInfo;
