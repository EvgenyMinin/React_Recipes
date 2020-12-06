import React from "react";
import { ITextString } from "./types";

const GenerateContent = ({ textString }: ITextString) => {
  return (
    <p>
      {textString.split("\n").map((item, key) => (
        <React.Fragment key={key}>
          {item}
          <br />
        </React.Fragment>
      ))}
    </p>
  );
};

export default GenerateContent;
