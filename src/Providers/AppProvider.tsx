import { createContext, useState } from "react";
import AppStateStore from "../Stores/AppStateStore";
import RouteProvider from "./RouteProvider";

export interface IAppProviderProps {}
export const AppStateContext = createContext({} as AppStateStore);

export function AppProvider(props: IAppProviderProps) {
  const [translation, setTranslation] = useState(AppStateStore.getInstance());

  return (
    <AppStateContext.Provider value={translation}>
      <RouteProvider />
    </AppStateContext.Provider>
  );
}
