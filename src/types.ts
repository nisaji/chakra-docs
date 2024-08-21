export interface IManualSection {
  title: string;
  content: string;
  subsections?: IManualSection[];
}

export interface IManual {
  title: string;
  sections: IManualSection[];
}
