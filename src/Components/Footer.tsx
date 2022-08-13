import styled from "styled-components";
import { defaultColors } from "../Styles/defaultStyles";

const FooterComponent = styled.footer`
  background: ${defaultColors.grey};
  display: grid;
  column-gap: 15vh;
  grid-area: footer;
  color: ${defaultColors.white};
`;

export const Footer = () => {
  return (
      <FooterComponent>
        <h4>Built by: María Auxiliadora Umaña Castro</h4>
      </FooterComponent>
  );
};
