import { Col, List, Row } from "antd";
import React from "react";
import GraphImage from "graphcms-image";

import { generateUnit } from "../../utils/generateUtils";
import GenerateContent from "../GenerateContent";

import { IRecipe } from "./types";

import { StyledOneRecipe } from "./styles";

const OneRecipe = ({ recipe }: IRecipe) => {
  const { image, title, description, ingredients, content } = recipe;
  return (
    <Row>
      <StyledOneRecipe
        sm={{ span: 20, offset: 2 }}
        md={{ span: 16, offset: 4 }}
        lg={{ span: 12, offset: 6 }}
      >
        <Row>
          <Col span={24}>
            <GraphImage image={image} />
          </Col>
        </Row>
        <Row>
          <Col span={20} offset={2}>
            <h1>{title}</h1>
            <p>{description}</p>
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
            <List
              header={<h3>Ingredients</h3>}
              bordered
              dataSource={
                ingredients || [{ type: "None added", amount: 0, unit: "" }]
              }
              renderItem={({ amount, unit, type }) => (
                <List.Item>
                  {ingredients
                    ? `${amount} ${generateUnit(unit, amount)} ${type}`
                    : `${type}`}
                </List.Item>
              )}
            ></List>
          </Col>
        </Row>
        <Row>
          <Col span={20} offset={2}>
            <h2>Directions:</h2>
            <GenerateContent textString={content} />
          </Col>
        </Row>
      </StyledOneRecipe>
    </Row>
  );
};

export default OneRecipe;
