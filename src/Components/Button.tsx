import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AppDispatch } from "../app/store";
import { clearSelected } from "../Redux/imageReducer";

const ButtonStyled = styled.button`
  padding: 2px;
  border-radius: 3px;
`;

export const Button = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  const clearSelectedImage = () => {
    return dispatch(clearSelected())
  }
  return (<ButtonStyled onClick={()=> clearSelectedImage()}>Clear</ButtonStyled>);
};