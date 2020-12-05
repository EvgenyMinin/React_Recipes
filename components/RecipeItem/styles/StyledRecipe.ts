import { Col } from "antd";
import styled from "styled-components";

export const StyledRecipe = styled(Col)`
  ${({ theme }) => `
    padding: 0 ${theme.padding_small}
  `}
`;
