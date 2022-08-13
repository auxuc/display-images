import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../app/store";
import { defaultColors } from "../Styles/defaultStyles";
import { Button } from "./Button";
import {Image} from './Image'

const Wrapper = styled.div`
  background: ${defaultColors.yellow};
  display: grid;
  position: fixed
  column-gap: 50%;
  grid-area: main;
  align-items: center;
`;

const WrapperDisplay= styled.div`
align-items: center;
justify-content: space-between
`;

export const DisplayOne = () => {
  const selectedImage = useSelector((state: RootState)=> state.Images.selected)

  return (
      <Wrapper>
        {selectedImage && (
          <WrapperDisplay>
            <h3>{selectedImage.author}</h3>
            <Image image={selectedImage}/>
           <Button/>
          </WrapperDisplay>
        )}
        {!selectedImage && (
          <p>No image selected</p>
        )}
       
      </Wrapper>
  );
};
