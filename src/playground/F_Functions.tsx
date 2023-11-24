import React from 'react'

type Props = {}

export default function F_Functions({}: Props) {

    //function return type
    function display():void{
        console.log("Display method")
    }
    display();

    function makeAddition(param1:number,param2:number):number{
        return param1+param2;
    }
    console.log(makeAddition(10,20)) // need exact number of paramters

    // defualt and optional params

    const multiplication=(p1?:number,p2:number=10,p3?:number):number=>{
        return p2*(p1 || 0)*(p3 || 0)
    }
    multiplication(40)

    // rest parameter - it always be an array
    function names(param1 :string,...rest:number[]){
        console.log(param1,rest)
    }
    console.log("SB",10,20,40)

  return (
    <div>F_Functions</div>
  )
}