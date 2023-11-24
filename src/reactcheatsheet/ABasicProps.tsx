import React from 'react'

type Props = {}

type BasicProps={
    message:string,
    names?:string[] // this is optional 
    obj?:{id:string,value:string}
    objArray?:{id:number,names:string}[] // array of object
    onClick?:()=>void // function do not take anything and return nothing
    onChange?:(id:number)=>void // take number as argument

    children?:React.ReactNode; //accepts everything React can render
    childrenElement?:React.JSX.Element; //  A single React element
    style?:React.CSSProperties; // to pass through style props
}

export default function ABasicProps({message,names}: BasicProps) {
    console.log(message)
  return (
    <div>ABasicProps</div>
  )
}