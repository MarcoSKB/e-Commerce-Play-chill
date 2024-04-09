import { Tab } from "@headlessui/react";

interface Props {
  tabGameGenres: { id: number; slug: string; name: string }[];
}

const TabsGame: React.FC<Props> = ({ tabGameGenres }) => {
  return (
    <Tab.List
      className="text-base md:text-xl font-medium mb-5 md:mb-10"
      defaultValue={1}
    >
      {tabGameGenres.map((genre) => (
        <Tab
          key={genre.id}
          className="px-2 md:px-4 py-3 md:py-5 transition-opacity outline-none ui-selected:border-solid ui-selected:border-b-[2px] ui-selected:border-white ui-not-selected:opacity-40 hover:ui-not-selected:opacity-100"
        >
          {genre.name}
        </Tab>
      ))}
    </Tab.List>
  );
};

export default TabsGame;
