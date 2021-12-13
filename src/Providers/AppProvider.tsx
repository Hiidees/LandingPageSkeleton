import { createContext, useState } from "react";
import SupportedLangugesEnum from "../Commons/Enums";
import AppStateStore from "../Stores/AppStateStore";
import RouteProvider from "./RouteProvider";

export interface IAppProviderProps {}

interface ITranslationContext {
  translation: any;
  updateTranslation: (LanguageCode: SupportedLangugesEnum) => void;
  getTranslationKey: () => string;
}
export const TranslationContext = createContext({} as ITranslationContext);

export function AppProvider(props: IAppProviderProps) {
  const appStateStore = AppStateStore.getInstance();

  function updateTranslation(LanguageCode: SupportedLangugesEnum) {
    appStateStore.translation = LanguageCode;
    setTranslation(appStateStore.translation);
  }

  function getTranslationKey() {
    return appStateStore.translationKey;
  }
  const [translation, setTranslation] = useState(appStateStore.translation);

  return (
    <TranslationContext.Provider
      value={{
        translation,
        updateTranslation,
        getTranslationKey,
      }}
    >
      <RouteProvider />
    </TranslationContext.Provider>
  );
}
