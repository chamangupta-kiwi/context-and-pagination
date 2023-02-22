import React from "react";
import ComponentC from "./ComponentC";
import { FirstName } from "../App";
const ComponentB = () => {
  return (
    <div>
      <FirstName.Consumer>
        {(fname) => {
          return <h3>Hii I am {fname}</h3>;
        }}
      </FirstName.Consumer>

      <ComponentC />
    </div>
  );
};

export default ComponentB;
