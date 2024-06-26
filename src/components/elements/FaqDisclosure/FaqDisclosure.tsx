"use client";
import { Disclosure, Transition } from "@headlessui/react";

interface Props {
  title: string;
  description: string;
}

const FaqDisclosure: React.FC<Props> = ({ title, description }) => {
  return (
    <Disclosure
      as="div"
      className="rounded-[10px] border-solid border border-darkPurple"
    >
      <Disclosure.Button className="flex gap-2 md:gap-4 items-center justify-between py-5 md:py-6 px-5 md:px-10 ui-open:bg-darkPurple ui-open:bg-opacity-80 transition-opacity w-full">
        <h3 className="text-base md:text-xl lg:text-[24px] text-start font-extrabold">
          {title}
        </h3>
        <div className="relative top-[50%] translate-y-1/2 w-[15px] h-[15px]">
          <div className="absolute w-[15px] h-[1px] bg-white" />
          <div className="absolute w-[15px] h-[1px] bg-white rotate-90 ui-open:rotate-180 ui-open:transform transition-transform" />
        </div>
      </Disclosure.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Disclosure.Panel
          className="pt-5 pb-5 md:pb-8 px-5 md:px-10 font-medium text-[14px] md:text-base lg:text-[19px]"
          static
        >
          {description}
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
};

export default FaqDisclosure;
