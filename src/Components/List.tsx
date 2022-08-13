import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AppDispatch, RootState } from "../app/store";
import { IImagesResponse } from "../Interfaces/Images";
import { setSelected } from "../Redux/imageReducer";
import { Image } from "./Image";

const Wrapper = styled.div`
overflow-y: scroll;
max-height: 75vh;
display:grid;
gap: 10px;
`;
const WrapperImage = styled.div`
align-items: center;`;

export const List = () => {
  const imageList = useSelector((state: RootState)=> state.Images.imagesList);
  const dispatch = useDispatch<AppDispatch>();
  
  const setSelectedImage = (image: IImagesResponse) => {
    return dispatch(setSelected(image))
  }
  return (
      <Wrapper>
        {imageList?.map((image: IImagesResponse)=>{
          return( 
          <WrapperImage onClick={()=>setSelectedImage(image)}>
            <Image key={`image-${image.id}`} image={image}/>
            </WrapperImage>)
        })}
      </Wrapper>
  );
};
