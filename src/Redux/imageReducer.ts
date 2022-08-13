import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IImageState } from "../Interfaces/Images";
import { fetchImages } from "../Service/imageService";

//Initial State
const initialState: IImageState = {
  imagesList: null,
  status: "idle",
  selected: null
};

//Actions
export const fetchImagesAsync = createAsyncThunk(
  "images/fetchImages",
  async () => {
    const response = await fetchImages();
    return response.data;
  }
);

//Reducer
export const Images = createSlice({
  name: "images",
  initialState,
  reducers: {
    clearSelected: (state) => {
      state.selected = null;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImagesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchImagesAsync.fulfilled, (state, action) => {
        state.imagesList = action.payload;
        state.status = "idle";
      })
      .addCase(fetchImagesAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setSelected, clearSelected } = Images.actions;

export default Images.reducer;
