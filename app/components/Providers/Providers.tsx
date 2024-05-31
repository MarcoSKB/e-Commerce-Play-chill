"use client";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { SkeletonTheme } from "react-loading-skeleton";

import { store } from "@/src/libs/redux/store";

interface Props {
  children: React.ReactNode;
}

let persistor = persistStore(store);

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SkeletonTheme baseColor="#131118" highlightColor="#221C39">
          {children}
        </SkeletonTheme>
      </PersistGate>
    </Provider>
  );
};

export default Providers;
