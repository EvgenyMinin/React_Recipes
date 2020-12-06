import { Col } from "antd";
import styled from "styled-components";

export const StyledCol = styled(Col)`
  ${({ theme }) => `
    margin-top: ${theme.margin_small};
  `}
  text-align: center;
`;
