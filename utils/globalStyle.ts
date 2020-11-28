import { createGlobalStyle } from "styled-components";

import { heading } from "./heading";

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => `
    h1 {
      ${heading(theme["font_size_xl"])}
    }
    h2 {
      ${heading(theme["font_size_lg"])}
    }
    h3 {
      ${heading(theme["font_size_md"])}
    }
    h4 {
      ${heading(theme["font_size_sm"])}
    }
  `}
`;
