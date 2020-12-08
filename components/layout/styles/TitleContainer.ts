import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  height: 64px;
  line-height: 50px;

  img {
    height: 100%;
  }

  ${({ theme }) => `
    div {
      width: 100%;
      padding-left: ${theme.padding_small}
    }
  `}

  h2 {
    display: inline;
    color: inherit;
  }

  p {
    line-height: 0;
  }
`;
