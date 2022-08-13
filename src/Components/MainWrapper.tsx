import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AppDispatch } from "../app/store";
import { fetchImagesAsync } from "../Redux/imageReducer";
import { DisplayOne } from "./DisplayOne";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ImageList } from "./ImageList";

const Wrapper = styled.div`
  display: grid;
  height: 100%;
  overflow:hidden;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-areas:
    "header header header header"
    "sidebar sidebar main main"
    "footer footer footer footer";
`;

export const MainWrapper = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchImagesAsync());
  }, []);
  
  return (
    <Wrapper>
      <Header />
      <ImageList />
      <DisplayOne/>
      <Footer />
    </Wrapper>
  );
};
