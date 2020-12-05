import { Alert, Row } from "antd";
import React from "react";
import { StyledCol } from "./styles";

import { IWarning } from "./types";

const Warning = ({ warningHeader, warningText }: IWarning) => {
  return (
    <Row>
      <StyledCol span={12} offset={6}>
        <Alert
          message={warningHeader || "Warning"}
          description={warningText || "An unknown warning has occured."}
          type="warning"
        />
      </StyledCol>
    </Row>
  );
};

export default Warning;
