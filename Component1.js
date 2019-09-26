import React from "react";
import Component2 from "./Component2";

export default class Component1 extends React.Component
{
  render()
  {
    return (
      <div>
      <p>Component 1</p>
      <Component2 />
      </div>
    )
  }
}