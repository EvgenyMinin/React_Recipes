import styled from "styled-components";

export const Card = styled.div`
  cursor: pointer;
  height: 340px;
  border-radius: 8px;
  ${({ theme }) => `
    margin-bottom: ${theme.margin_small};
    box-shadow: 0 0 16px ${theme.border_color};
    border: ${theme.border_width} solid ${theme.border_color};
  `}

  .graphcms-image-outer-wrapper {
    border: 0px;

    .graphcms-image-wrapper {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border: 0px;
      height: 200px;

      img {
        border-radius: 6px 6px 0px 0px;
      }
    }
  }
`;
