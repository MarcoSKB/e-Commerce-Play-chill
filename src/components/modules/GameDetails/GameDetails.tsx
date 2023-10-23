"use client";
import { Tab } from "@headlessui/react";
import parse from "html-react-parser";

interface Props {
  description: string;
  requirements: {
    minimum: string;
    recommended: string;
  } | null;
  className?: string;
}

const activationData = [
  {
    id: 0,
    number: 1,
    title: `Copy the key of the purchased game from the "Orders" section in your personal account.`,
  },
  {
    id: 1,
    number: 2,
    title: `If you don't have the Steam client installed, download and install it.`,
  },
  {
    id: 2,
    number: 3,
    title: `Log in to your Steam account or register a new one if you don't have one.`,
  },
  {
    id: 3,
    number: 4,
    title: `Go to the "Games" section and select "Activate via Steam...".`,
  },
  {
    id: 4,
    number: 5,
    title: `Enter the activation key.`,
  },
  {
    id: 5,
    number: 6,
    title: `After that, the game will be in your Steam library, and you can download it.`,
  },
];

const GameDetails: React.FC<Props> = (props) => {
  const { description, requirements, className = "" } = props;

  return (
    <div className={className}>
      <Tab.Group>
        <Tab.List className="flex gap-x-[10px] text-[22px] mb-10 border-solid border-white border-b-[1px] border-opacity-10">
          <Tab className="opacity-50 py-5 px-[10px] focus:outline-offset-[-10px] ui-selected:opacity-100 ui-selected:border-b-[1px] ui-selected:border-b-white ui-selected:mb-[-1px] transition-opacity">
            Description of the game
          </Tab>
          <Tab className="opacity-50 py-5 px-[10px] focus:outline-offset-[-10px] ui-selected:opacity-100 ui-selected:border-b-[1px] ui-selected:border-b-white ui-selected:mb-[-1px] transition-opacity">
            System requirements
          </Tab>
          <Tab className="opacity-50 py-5 px-[10px] focus:outline-offset-[-10px] ui-selected:opacity-100 ui-selected:border-b-[1px] ui-selected:border-b-white ui-selected:mb-[-1px] transition-opacity">
            Activation
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="focus:outline-offset-8">
            <h2 className="text-2xl font-semibold mb-4">About:</h2>
            <div className="flex flex-col gap-y-2 opacity-50 leading-[1.5] text-[17px]">
              {parse(description)}
            </div>
          </Tab.Panel>
          <Tab.Panel className="flex flex-col gap-y-10 focus:outline-offset-8">
            <div>
              <h2 className="text-2xl font-semibold mb-10">
                Minimum system requirements:
              </h2>
              <p className="opacity-50 leading-[1.5] text-[17px]">
                {requirements?.minimum}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-10">
                Recommended system requirements:
              </h2>
              <p className="opacity-50 leading-[1.5] text-[17px]">
                {requirements?.recommended}
              </p>
            </div>
          </Tab.Panel>
          <Tab.Panel className="focus:outline-offset-8">
            <ul className="flex flex-col gap-y-5">
              {activationData.map((el) => (
                <li key={el.id} className="relative pl-[56px] py-[5px]">
                  <span className="absolute top-0 left-0 flex items-center justify-center rounded-full w-[36px] h-[36px] text-xl font-extrabold border-solid border-white border-[2px] border-opacity-10">
                    {el.number}
                  </span>
                  {el.title}
                </li>
              ))}
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default GameDetails;
