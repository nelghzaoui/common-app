export interface Language {
  code: LanguageCode;
  label: string;
}

export enum LanguageCode {
  EN = 'en',
  FR = 'fr'
}

export enum LanguageLabel {
  ENGLISH = 'english',
  FRENCH = 'français'
}
