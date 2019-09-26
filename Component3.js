import React from "react";
import {UserConsumer} from "./context";

export default class Component3 extends React.Component
{
  render()
  {
    return (
     <UserConsumer>
     {
       (username) => {
          return <div>hello {username}</div>
       }

     }
     </UserConsumer>
    )
  }
}