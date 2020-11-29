import { Col, Layout, Row } from "antd";
import React from "react";

const MainFooter = () => {
  return (
    <Layout.Footer>
      <Row>
        <Col sm={{ span: 22, offset: 1 }}>
          <h3>Find your next bite!</h3>
        </Col>
      </Row>
    </Layout.Footer>
  );
};

export default MainFooter;
