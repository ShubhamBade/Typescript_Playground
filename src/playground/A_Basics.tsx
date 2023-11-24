import React from 'react'

type Props = {}

export const A_Basics = (props: Props) => {
    //basic type in typescript - explicit type assignment
  let str: string = "Typescipt string";
  console.log(str);

  let boolVar: boolean = false;
  console.log(boolVar);

  let num: number = 1000;
  console.log(num);

  //typescript special types

  //any disable type checking
  let name: any = "welcome";
  name = 1000; // allows assign different bec of any
  console.log(name);

  // unknown- safetr alternative to any.
  // unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.
  // Casting is when we use the "as" keyword to say property or variable is of the casted type.
  let var1: unknown = "Welcome";
  var1 = 1000;
  console.log(var1);

  // undefined and null
  let var2:undefined=undefined;
  let var3:null=null;
  console.log(var2,var3)
  return (
    <div>Typescript Types</div>
  )
}