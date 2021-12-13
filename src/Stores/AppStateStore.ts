import SupportedLangugesEnum from "../Commons/Enums";
import { default as ItDataTranslation } from "./Data/Translations/it.json";
import { default as EnDataTranslation } from "./Data/Translations/en.json";

export default class AppStateStore {
  private static _instance: AppStateStore;
  private _translation: any;

  public get translation(): any {
    return this._translation;
  }

  public set translation(languageCode: SupportedLangugesEnum) {
    switch (languageCode) {
      case SupportedLangugesEnum.En:
        this._translation = EnDataTranslation;
        break;

      default:
        this._translation = ItDataTranslation;
    }
  }

  public static getInstance(): AppStateStore {
    if (!AppStateStore._instance) {
      AppStateStore._instance = new AppStateStore();
    }

    return AppStateStore._instance;
  }

  private constructor() {
    this.translation = SupportedLangugesEnum.It;
  }
}
