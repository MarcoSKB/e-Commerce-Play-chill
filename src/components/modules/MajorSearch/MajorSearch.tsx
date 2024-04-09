"use client";
import { useEffect, useRef, useState } from "react";
import { AnimationProps, motion, useAnimationControls } from "framer-motion";

import useAxios from "@/src/hooks/useAxios";
import { useDebounce } from "@/src/hooks/useDebounce";
import useMediaQuery from "@/src/hooks/useMediaQuery";

import { getGameAxios } from "@/src/api/getGameAxios";
import { GamePreviewData } from "@/src/types/GamePreviewDataInfo";
import { SearchForm, SearchResultList } from "@/src/components/elements";

const desktopStyles: AnimationProps["variants"] = {
  active: {
    position: "absolute",
    left: "50%",
    width: "100%",
    translateX: "-50%",
  },
  inactive: {
    position: "relative",
    left: "0%",
    width: "50%",
    translateX: "0%",
  },
};

const mobileStyles: AnimationProps["variants"] = {
  active: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    translateX: "0",
  },
  inactive: {
    position: "relative",
    top: "0%",
    left: "0%",
    width: "25px",
    translateX: "0%",
  },
};

const transition = {
  ease: "circInOut",
  duration: 0.5,
  left: {
    duration: 0,
  },
  translateX: {
    duration: 0,
  },
};

const MajorSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const matches = useMediaQuery("(max-width: 600px)");
  const searchRef = useRef<HTMLDivElement>(null);

  const searchControl = useAnimationControls();

  const debouncedValue = useDebounce(inputValue, 1000);
  const [games, error, loading] = useAxios<GamePreviewData>({
    url: "",
    method: "GET",
    axiosInstance: getGameAxios,
    dependency: [debouncedValue],
    requestConfig: {
      params: {
        page_size: 3,
        search: debouncedValue,
      },
    },
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        searchControl.start("inactive");
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const variants = matches ? mobileStyles : desktopStyles;

  const openSearch = () => {
    if (isOpen) {
      searchControl.start("active");
      setIsOpen(true);
    }
  };

  const toggleSearch = () => {
    searchControl.start(isOpen ? "inactive" : "active");
    setIsOpen(!isOpen);
    console.log("worked");
  };

  return (
    <motion.div
      variants={variants}
      initial="inactive"
      animate={searchControl}
      transition={transition}
      ref={searchRef}
      onClick={openSearch}
      className={`h-16 z-20 min-w-[25px] top-0 ${
        isOpen ? "max-w-none" : "max-w-[25px] md:max-w-[648px]"
      }`}
    >
      <SearchForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        isOpen={isOpen}
        toggleSearch={toggleSearch}
      />
      <SearchResultList
        isOpen={isOpen}
        toggleSearch={toggleSearch}
        data={games?.results}
        gamesCount={games?.count}
        loading={loading}
        error={error}
      />
    </motion.div>
  );
};

export default MajorSearch;
