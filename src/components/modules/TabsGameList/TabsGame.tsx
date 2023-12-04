import { Tab } from "@headlessui/react";

interface Props {
  tabGameGenres: { id: number; slug: string; name: string }[];
}

const TabsGame: React.FC<Props> = ({ tabGameGenres }) => {
  return (
    <Tab.List className="text-xl font-medium mb-10" defaultValue={1}>
      {tabGameGenres.map((genre) => (
        <Tab
          key={genre.id}
          className="px-4 py-5 transition-opacity outline-none ui-selected:border-solid ui-selected:border-b-[2px] ui-selected:border-white ui-not-selected:opacity-40 hover:ui-not-selected:opacity-100"
        >
          {genre.name}
        </Tab>
      ))}
    </Tab.List>
  );
};

export default TabsGame;
