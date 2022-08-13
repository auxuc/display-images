export interface IImageState {
  status: "idle" | "loading" | "failed";
  imagesList: IImagesResponse[] | null;
  selected: IImagesResponse | null;
}

export interface IImagesResponse {
  author: string;
  download_url: string;
  height: number;
  id: number;
  url: string;
  width: number;
}

export interface IImage{
  image: IImagesResponse
}