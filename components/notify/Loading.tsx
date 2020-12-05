import { Spin } from "antd";
import React from "react";

import { StyledSpinner } from "./styles";

const Loading = () => {
  return (
    <StyledSpinner>
      <Spin size="large" />
    </StyledSpinner>
  );
};

export default Loading;
