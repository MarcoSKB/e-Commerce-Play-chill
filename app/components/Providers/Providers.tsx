"use client";
import { Provider } from "react-redux";
import { SkeletonTheme } from "react-loading-skeleton";

import { store } from "@/src/libs/redux/store";

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <Provider store={store}>
      <SkeletonTheme baseColor="#131118" highlightColor="#221C39">
        {children}
      </SkeletonTheme>
    </Provider>
  );
};

export default Providers;
