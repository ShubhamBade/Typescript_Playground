import React from 'react'

type Props = {}

export default function J_Generics({}: Props) {

  // Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.

  function genericFunction<S,T>(param1:S,param2:T):[S,T]{
    return [param1,param2];
  }
  console.log(genericFunction<number,string>(10,"String value"))
  console.log(genericFunction<boolean,number>(true,100))

  function displayData<S,T>(p1:S,p2:T):S{
    return p1;
  }
  console.log(displayData<string,string>("Hello","World"))
  console.log(displayData<number,string>(100,"String data"))

  
  return (
    <div>J_Generics</div>
  )
}