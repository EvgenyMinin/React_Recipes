import styled from "styled-components";

export const StyledSpinner = styled.div`
  ${({ theme }) => `
    margin-top: ${theme.margin_small};
  `}
  text-align: center;
`;
