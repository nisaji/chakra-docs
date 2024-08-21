export interface IManualContent {
  type: "paragraph" | "image" | "list";
  content: string | string[];
  listType?: "ordered" | "unordered";
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: string;
  imageHeight?: string;
}

export interface IManualSection {
  title: string;
  content: IManualContent[];
  subsections?: IManualSection[];
}

export interface IManual {
  title: string;
  sections: IManualSection[];
}
