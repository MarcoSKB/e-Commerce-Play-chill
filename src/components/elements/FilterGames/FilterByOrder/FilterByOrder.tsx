"use client";
import { useState } from "react";
import { Listbox } from "@headlessui/react";

const orderTypes: { id: number; label: string }[] = [
  { id: 1, label: "By Name" },
  { id: 2, label: "By released" },
  { id: 3, label: "By added" },
  { id: 4, label: "By created" },
  { id: 5, label: "By rating" },
];

const FilterByOrder = () => {
  const [selectedOrder, setSelectedOrder] = useState(orderTypes[4]);

  return (
    <Listbox
      as="div"
      className="relative flex items-start max-w-max"
      value={selectedOrder}
      onChange={setSelectedOrder}
    >
      <Listbox.Button className="relative z-[1] flex items-center px-[26px] py-[17px] rounded-[10px] bg-purple">
        <span className="text-[15px] leading-snug">{selectedOrder.label}</span>
        <img
          className="ml-4 rotate-0 ui-open:rotate-180 transition-transform"
          src="/icons/arrow-small-green.svg"
          alt="Green arrow icon"
        />
      </Listbox.Button>
      <Listbox.Options
        static
        className="absolute top-full flex flex-col w-full max-w-[100%] pb-[11px] pt-3 bg-darkPurple rounded-b-[10px] overflow-hidden transition-opacity opacity-0 pointer-events-none ui-open:opacity-100 ui-open:pointer-events-auto"
      >
        {orderTypes.map((order) => (
          <Listbox.Option
            className="text-[15px] leading-snug py-[9px] px-[26px] cursor-pointer transition-colors text-center hover:bg-green hover:bg-opacity-20"
            key={order.id}
            value={order}
          >
            {order.label}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default FilterByOrder;
