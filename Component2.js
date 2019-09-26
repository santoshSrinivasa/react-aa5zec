import React from "react";
import Component3 from "./Component3";

export default class Component2 extends React.Component
{
  render()
  {
    return (
     <div>
     <p>Component 2</p>
      <Component3 />
      </div>
    )
  }
}