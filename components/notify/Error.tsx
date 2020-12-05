import { Alert, Row } from "antd";
import React from "react";
import { StyledCol } from "./styles";

import { IError } from "./types";

const Error = ({ errorText }: IError) => {
  return (
    <Row>
      <StyledCol span={12} offset={6}>
        <Alert
          message="An error has occured"
          description={errorText || "Error"}
          type="error"
        />
      </StyledCol>
    </Row>
  );
};

export default Error;
