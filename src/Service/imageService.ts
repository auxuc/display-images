import axios from "axios";
import { IImagesResponse } from "../Interfaces/Images";

export const fetchImages = () =>  {
  return axios.get<IImagesResponse[]>('https://picsum.photos/v2/list?page=1&limit=30');
}
