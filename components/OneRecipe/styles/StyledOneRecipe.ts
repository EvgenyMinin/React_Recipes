import { Col } from "antd";
import styled from "styled-components";

export const StyledOneRecipe = styled(Col)`
  ${({ theme }) => `
    margin-top: ${theme.margin_small};
    box-shadow: 0 0 16px ${theme.border_color};

    h1,
    h2 {
      padding-top: ${theme.padding_small};
      text-align: left;
    }
  `}
  min-height: 320px;
  border-radius: 8px;

  .graphcms-image-wrapper {
    max-height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    img {
      text-align: center;
      border-radius: 6px 6px 0px 0px;
    }
  }

  h3 {
    text-align: left;
  }
`;
