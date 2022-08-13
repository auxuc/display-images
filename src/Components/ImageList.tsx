import styled from "styled-components";
import { defaultColors } from "../Styles/defaultStyles";
import { List } from "./List";

const Wrapper = styled.div`
  background: ${defaultColors.orange};
  display: grid;
  position: fixed
  column-gap: 50%;
  grid-area: sidebar;
`;

export const ImageList = () => {
  return (
      <Wrapper>
        <h2>Image List</h2>
        <List/>
      </Wrapper>
  );
};
