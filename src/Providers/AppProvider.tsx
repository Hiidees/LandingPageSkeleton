import { createContext, useState } from "react";
import AppStateStore from "../Stores/AppStateStore";
import RouteProvider from "./RouteProvider";

export interface IAppProviderProps {}

interface ITranslationContext {
  translation: any;
  setTranslation: React.Dispatch<any>;
}
export const TranslationContext = createContext({} as ITranslationContext);

export function AppProvider(props: IAppProviderProps) {

  const appStateStore = AppStateStore.getInstance();
  const [translation, setTranslation] = useState(appStateStore.translation);

  return (
    <TranslationContext.Provider value={{ translation, setTranslation }}>
      <RouteProvider />
    </TranslationContext.Provider>
  );
}
