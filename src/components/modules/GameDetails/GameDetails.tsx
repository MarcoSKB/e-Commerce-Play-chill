"use client";
import { Tab } from "@headlessui/react";
import parse from "html-react-parser";

interface Props {
  description: string;
  requirements:
    | undefined
    | null
    | {
        minimum: string;
        recommended: string;
      };
}

const GameDetails: React.FC<Props> = (props) => {
  const { description, requirements } = props;
  return (
    <Tab.Group>
      <Tab.List className="flex gap-x-11 text-[22px] pb-5">
        <Tab className="opacity-50 ui-selected:opacity-100 transition-opacity">
          Description of the game
        </Tab>
        <Tab className="opacity-50 ui-selected:opacity-100 transition-opacity">
          System requirements
        </Tab>
        <Tab className="opacity-50 ui-selected:opacity-100 transition-opacity">
          Activation
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <h2 className="text-2xl font-semibold mb-4">About:</h2>
          <p className="flex flex-col gap-y-2 opacity-50 leading-[1.5] text-[17px]">
            {parse(description)}
          </p>
        </Tab.Panel>
        <Tab.Panel>
          <div>
            Minimum system requirements:
            <p>{requirements?.minimum}</p>
          </div>
          <div>
            Recommended system requirements:
            <p>{requirements?.minimum}</p>
          </div>
        </Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default GameDetails;
