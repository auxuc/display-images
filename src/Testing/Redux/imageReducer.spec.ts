import { IImageState } from "../../Interfaces/Images";
import ImageReducer, {
  clearSelected,
  setSelected,
} from "../../Redux/imageReducer";

describe("Image reducer", () => {
  const initialState: IImageState = {
    imagesList: null,
    status: "idle",
    selected: null,
  };
  const dataDummy = {
    id: "0",
    author: "Alejandro Escamilla",
    width: 5616,
    height: 3744,
    url: "https://unsplash.com/...",
    download_url: "https://picsum.photos/...",
  };
  it("should handle initial state", () => {
    expect(ImageReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle setSelected", () => {
    const actual = ImageReducer(initialState, setSelected(dataDummy));
    expect(actual.selected).toEqual(dataDummy);
  });

  it("should handle clearSelected", () => {
    const actual = ImageReducer(initialState, clearSelected());
    expect(actual.selected).toBeNull();
  });
});
