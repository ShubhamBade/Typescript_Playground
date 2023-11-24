import React from "react";

type Props = {};

export const E_TypeAndInterface = (props: Props) => {
  // typescript allows types to defined separately from the variable that use them
  // Type Aliases allow defining types with a custom name (an Alias).
  // Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

  type UserName = string;
  type UserPhone = number;

  type User = {
    userName: UserName;
    userPhone: UserPhone;
  };
  const userObject: User = {
    userName: "Shubhambade",
    userPhone: 985623225,
  };
  console.log(userObject);

  //Interfaces are similar to type aliases, except they only apply to object types.
  interface Area{
    length:number,
    width:number
  }
  const calCulateArea:Area={
    length:1001,
    width:100
  }
  console.log(calCulateArea)

  // extending interface
  // Extending an interface means you are creating a new interface with the same properties as the original, plus something new.

  interface one{
    name:string
  }
  interface two extends one{
    phone:string
  }

  const Mix:two={
    name:"MIX",
    phone:"856565"
  }
  console.log(Mix)

  //union type - used when value can be more than a single type
  const Versions:{version:string|number}={
    version:101
  }
  console.log(Versions)


  return <div>E_TypeAndInterface</div>;
};
