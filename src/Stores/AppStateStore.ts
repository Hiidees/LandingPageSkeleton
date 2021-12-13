import SupportedLangugesEnum from "../Commons/Enums";
import { default as ItDataTranslation } from "./Data/Translations/it.json";
import { default as EnDataTranslation } from "./Data/Translations/en.json";

export default class AppStateStore {
  private static _instance: AppStateStore;
  private _translation: any;
  private _translationKey: string;

  public get translationKey(): string {
    return this._translationKey;
  }

  public set translationKey(value: string) {
    this._translationKey = value;
  }

  public get translation(): any {
    return this._translation;
  }

  public set translation(languageCode: SupportedLangugesEnum) {
    switch (languageCode) {
      case SupportedLangugesEnum.En:
        this._translation = EnDataTranslation;
        this._translationKey = SupportedLangugesEnum.En;
        break;

      default:
        this._translation = ItDataTranslation;
        this._translationKey = SupportedLangugesEnum.It;
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
    this._translationKey = "Italiano";
  }
}
