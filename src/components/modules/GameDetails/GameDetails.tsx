"use client";
import { Tab } from "@headlessui/react";
import parse from "html-react-parser";

interface Props {
  description: string;
  requirements: {
    minimum: string;
    recommended: string;
  } | null;
}

const GameDetails: React.FC<Props> = (props) => {
  const { description, requirements } = props;

  return (
    <Tab.Group>
      <Tab.List className="flex gap-x-[10px] text-[22px] mb-10 border-solid border-white border-b-[1px] border-opacity-10">
        <Tab className="opacity-50 py-5 px-[10px] ui-selected:opacity-100 ui-selected:border-b-[1px] ui-selected:border-b-white ui-selected:mb-[-1px] transition-opacity">
          Description of the game
        </Tab>
        <Tab className="opacity-50 py-5 px-[10px] ui-selected:opacity-100 ui-selected:border-b-[1px] ui-selected:border-b-white ui-selected:mb-[-1px] transition-opacity">
          System requirements
        </Tab>
        <Tab className="opacity-50 py-5 px-[10px] ui-selected:opacity-100 ui-selected:border-b-[1px] ui-selected:border-b-white ui-selected:mb-[-1px] transition-opacity">
          Activation
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <h2 className="text-2xl font-semibold mb-4">About:</h2>
          <div className="flex flex-col gap-y-2 opacity-50 leading-[1.5] text-[17px]">
            {parse(description)}
          </div>
        </Tab.Panel>
        <Tab.Panel className="flex flex-col gap-y-10">
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
        <Tab.Panel>
          <ul className="flex flex-col gap-y-5">
            <li className="relative pl-[56px] py-[5px] before:content-['1'] before:absolute before:top-0 before:left-0 before:flex before:items-center before:justify-center before:rounded-full before:w-[36px] before:h-[36px] before:text-xl before:font-extrabold before:border-solid before:border-white before:border-[2px] before:border-opacity-10">
              Copy the key of the purchased game from the "Orders" section in
              your personal account.
            </li>
            <li className="relative pl-[56px] py-[5px] before:content-['2'] before:absolute before:top-0 before:left-0 before:flex before:items-center before:justify-center before:rounded-full before:w-[36px] before:h-[36px] before:text-xl before:font-extrabold before:border-solid before:border-white before:border-[2px] before:border-opacity-10">
              If you don't have the Steam client installed, download and install
              it.
            </li>
            <li className="relative pl-[56px] py-[5px] before:content-['3'] before:absolute before:top-0 before:left-0 before:flex before:items-center before:justify-center before:rounded-full before:w-[36px] before:h-[36px] before:text-xl before:font-extrabold before:border-solid before:border-white before:border-[2px] before:border-opacity-10">
              Log in to your Steam account or register a new one if you don't
              have one.
            </li>
            <li className="relative pl-[56px] py-[5px] before:content-['4'] before:absolute before:top-0 before:left-0 before:flex before:items-center before:justify-center before:rounded-full before:w-[36px] before:h-[36px] before:text-xl before:font-extrabold before:border-solid before:border-white before:border-[2px] before:border-opacity-10">
              Go to the "Games" section and select "Activate via Steam...".
            </li>
            <li className="relative pl-[56px] py-[5px] before:content-['5'] before:absolute before:top-0 before:left-0 before:flex before:items-center before:justify-center before:rounded-full before:w-[36px] before:h-[36px] before:text-xl before:font-extrabold before:border-solid before:border-white before:border-[2px] before:border-opacity-10">
              Enter the activation key.
            </li>
            <li className="relative pl-[56px] py-[5px] before:content-['6'] before:absolute before:top-0 before:left-0 before:flex before:items-center before:justify-center before:rounded-full before:w-[36px] before:h-[36px] before:text-xl before:font-extrabold before:border-solid before:border-white before:border-[2px] before:border-opacity-10">
              After that, the game will be in your Steam library, and you can
              download it.
            </li>
          </ul>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default GameDetails;
