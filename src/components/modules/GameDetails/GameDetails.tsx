"use client";
import { Tab } from "@headlessui/react";
import Skeleton from "react-loading-skeleton";
import parse from "html-react-parser";

import { activationData } from "@/src/data/activationData";

interface Props {
  description: string | undefined;
  requirements: {
    minimum: string;
    recommended: string;
  } | null;
  className?: string;
}

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
              {description ? (
                parse(description)
              ) : (
                <Skeleton count={6} height={17} />
              )}
            </div>
          </Tab.Panel>
          <Tab.Panel className="flex flex-col gap-y-10 focus:outline-offset-8">
            <div>
              <h2 className="text-2xl font-semibold mb-10">
                Minimum system requirements:
              </h2>
              <p className="opacity-50 leading-[1.5] text-[17px]">
                {requirements ? (
                  requirements.minimum
                ) : (
                  <Skeleton count={3} height={17} />
                )}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-10">
                Recommended system requirements:
              </h2>
              <p className="opacity-50 leading-[1.5] text-[17px]">
                {requirements ? (
                  requirements.recommended
                ) : (
                  <Skeleton count={3} height={17} />
                )}
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
