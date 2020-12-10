import { Layout } from "antd";
import styled from "styled-components";

export const StyledHeader = styled(Layout.Header)`
  ${({ theme }) => `
    display: flex;
    justify-content: space-between;
    padding: ${theme.padding_zero};
    background-color: ${theme.header_color};
    ul {
      text-align: right;
      width: 80%;
    }
  `}
  img {
    cursor: pointer;
  }
`;
