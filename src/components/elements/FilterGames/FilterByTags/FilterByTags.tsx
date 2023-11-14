"use client";

import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

import useAxios from "@/src/hooks/useAxios";
import { rawgApiAxios } from "@/src/api/rawgApiAxios";

const FilterByTags = () => {
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [gameTags, error, loading] = useAxios<unknown>({
    url: "/tags",
    method: "GET",
    axiosInstance: rawgApiAxios,
  });

  if (loading) {
    return <div>Loading</div>;
  }

  return <div>fewfwef</div>;

  // return (
  //   <Listbox
  //     value={selectedGenre}
  //     disabled={loading}
  //     onChange={setSelectedGenre}
  //     multiple
  //     as="div"
  //   >
  //     <Listbox.Button className="flex justify-between items-center w-full mb-4 py-1">
  //       <span className="text-xl font-semibold">Genres</span>
  //       <img
  //         className="ml-4 rotate-0 ui-open:rotate-180 transition-transform"
  //         src="/icons/arrow-small-green.svg"
  //         alt="Green arrow icon"
  //       />
  //     </Listbox.Button>
  //     <Transition
  //       enter="transition duration-100 ease-out"
  //       enterFrom="transform scale-95 opacity-0"
  //       enterTo="transform scale-100 opacity-100"
  //       leave="transition duration-75 ease-out"
  //       leaveFrom="transform scale-100 opacity-100"
  //       leaveTo="transform scale-95 opacity-0"
  //     >
  //       <Listbox.Options className="flex flex-col gap-4 max-h-[210px] overflow-y-scroll snap-mandatory snap-y custom-scroll">
  //         {gameGenres?.results.map((genre) => (
  //           <Listbox.Option
  //             key={genre.id}
  //             value={genre.name}
  //             className="flex items-center gap-4 snap-center cursor-pointer text-lg opacity-20 transition-opacity hover:opacity-80 ui-selected:opacity-100"
  //           >
  //             <div className="w-6 h-6 rounded-[6px] border-solid border-2 border-white transition-colors ui-selected:bg-green ui-selected:border-green"></div>
  //             {genre.name}
  //           </Listbox.Option>
  //         ))}
  //       </Listbox.Options>
  //     </Transition>
  //   </Listbox>
  // );
};

export default FilterByTags;
