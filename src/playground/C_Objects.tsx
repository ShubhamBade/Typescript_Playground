import React from "react";

type Props = {};

export const C_Objects = (props: Props) => {
  //typescript objects
  const obj1: { firstName: string; lastName: string } = {
    firstName: "ASUS",
    lastName: "PROBOOK",
  };
  console.log(obj1);

  //optional properties
  const obj2:{param1?:string,param2?:number}={} // both properties are optional
  console.log(obj2)
  // assigning single value
  obj2.param1="Parameter 1"
  console.log(obj2)

  // index signature : Index signatures can be used for objects without a defined list of properties.
  const bikes:{[index:string]:number}={
    "price":1000
  }
  console.log(bikes)

  const cores:{[index:string]:number}={
    "count":6
  }
  console.log(cores)

  return <div>Typescript Object</div>;
};
