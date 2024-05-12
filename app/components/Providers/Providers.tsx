"use client";
import { SkeletonTheme } from "react-loading-skeleton";

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <>
      <SkeletonTheme baseColor="#131118" highlightColor="#221C39">
        {children}
      </SkeletonTheme>
    </>
  );
};

export default Providers;
