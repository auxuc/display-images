import styled from "styled-components";
import { IImage } from "../Interfaces/Images";

const Wrapper = styled.div`
  overflow-y: scroll;
  overflow:hidden;
  
`;

const ImageStyled = styled.img`
  width: 150px;
  height: 150px
`;

export const Image = ({image}: IImage) => {
  return (
    <Wrapper>
      <ImageStyled
        src={
          image.download_url
        }
      ></ImageStyled>
    </Wrapper>
  );
};
