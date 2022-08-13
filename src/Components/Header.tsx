import styled from "styled-components";
import { defaultColors } from "../Styles/defaultStyles";

const HeaderComponent = styled.header`
  background: ${defaultColors.grey};
  display: grid;
  column-gap: 15vh;
  grid-area: header;
  color: ${defaultColors.white};
`;

export const Header = () => {
  return (
      <HeaderComponent>
        <h1>Technical Exercise</h1>
      </HeaderComponent>
  );
};
