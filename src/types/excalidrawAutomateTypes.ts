import { DataURL } from "@zsviczian/excalidraw/types/excalidraw/types";
import { TFile } from "obsidian";
import { FileId } from "src/core";
import { ColorMap, MimeType } from "src/shared/EmbeddedFileLoader";

export type SVGColorInfo = Map<string, {
  mappedTo: string;
  fill: boolean;
  stroke: boolean;
}>;

export type ImageInfo = {
  mimeType: MimeType,
  id: FileId,
  dataURL: DataURL,
  created: number,
  isHyperLink?: boolean,
  hyperlink?: string,
  file?:string | TFile,
  hasSVGwithBitmap: boolean,
  latex?: string,
  size?: {height: number, width: number},
  colorMap?: ColorMap,
}

export interface AddImageOptions {
  topX: number;
  topY: number;
  imageFile: TFile | string;
  scale?: boolean; 
  anchor?: boolean;
  colorMap?: ColorMap;
}