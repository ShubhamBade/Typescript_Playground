import React from "react";

type Props = {};

export default function K_Utility({}: Props) {
  //Partial--Partial changes all the properties in an object to be optional.
  interface point {
    x: number;
    y: number;
  }
  const point: Partial<point> = {
    x: 200,
  };
  console.log(point);

//   Required changes all the properties in an object to be required
interface Car{
    name:string,
    price?:number
}
const CarDetails:Required<Car>={
    name:"Honda",
    price:20000 // even if price is optional we need to provide this
}
console.log(CarDetails)

// Record is a shortcut to defining an object type with a specific key type and value type.
const person:Record<string,number>={
    "name":1000, // we cant mismatch here key should be string and values should be number
    "number":1011111
}
console.log(person)

// above same as below
const data:{[key:number]:string}={
    101:"A"
}
console.log(data)

// Omit removes keys from an object type
interface myInterface{
    name:string,
    number:number,
    status:boolean
}
const myObj:Omit<myInterface,'name'>={
    number:989898,
    status:false
}
console.log(myObj)

// Pick removes all but the specified keys from an object type.
const myObj2:Pick<myInterface,"number">={
    number:10001
}
console.log(myObj2)

// Readonly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.

const obj3: Readonly<myInterface>={ name:"hjj",number:101,status:true}
console.log(obj3)

  return <div>K_Utility</div>;
}
