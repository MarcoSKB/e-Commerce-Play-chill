"use client";
import { useState } from "react";
import { Listbox } from "@headlessui/react";

import { FiltersType } from "@/src/types/FiltersType";
import { orderTypes } from "@/src/data/orderTypes";

interface Props {
  setFilters: (value: FiltersType) => void;
  filters: FiltersType;
}

const FilterByOrder: React.FC<Props> = (props) => {
  const { setFilters, filters } = props;
  const [selectedOrder, setSelectedOrder] = useState(orderTypes[4]);

  const onChangeHandler = (e: { id: number; label: string; slug: string }) => {
    setSelectedOrder(e);
    setFilters({ ...filters, ordering: e.slug });
  };

  return (
    <Listbox
      as="div"
      className="relative flex items-start max-w-max z-[25]"
      value={selectedOrder}
      onChange={onChangeHandler}
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
        className="absolute top-[89%] flex flex-col w-full max-w-[100%] pt-3 pb-[11px] bg-darkPurple rounded-b-[10px] overflow-hidden transition-opacity opacity-0 pointer-events-none ui-open:opacity-100 ui-open:pointer-events-auto"
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
