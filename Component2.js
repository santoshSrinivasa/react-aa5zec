import React from "react";
import Component3 from "./Component3";
import {UserConsumer} from "./context";

export default class Component2 extends React.Component
{
  render()
  {
    return (
     <UserConsumer>
    {
      (name) => {
        return <h3>{name}</h3>
      }
    }
     </UserConsumer>
    )
  }
}