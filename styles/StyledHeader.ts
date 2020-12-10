import styled from "styled-components";

export const StyledHeader = styled.h1`
  ${({ theme }) => `
    padding: ${theme.padding_small};
  `}
`;
