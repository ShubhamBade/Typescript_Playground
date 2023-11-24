import React from 'react'

type Props = {}

export const B_Arrays = (props: Props) => {

    // typescript array allows us to store specific value
    const names:string[]=["welcome","tyepscript"]
    console.log(names)
    names.push("Playground")
    console.log(names)

    // readonly - The readonly keyword can prevent arrays from being changed.
    const carNames:readonly string[]=["HONDA","TATA"]
    console.log(carNames)
    // carNames.push("ERROR") - error


    // Typescript tuples - A tuple is a typed array with a pre-defined length and types for each index.

    let tuple1:[number,string,number];
    tuple1=[101,"WElcome",101] // you cant missmatch type here
    console.log(tuple1)

    tuple1.push("Welcome") // allows because - index 3 type not defined
    console.log(tuple1)

    // destructring tuple
    const [x,y]=tuple1;
    console.log(x,y)

    //readonly tuple
    const lappy:readonly[string,string]=["ASUS","PROBOOK"]
    console.log(lappy)



  return (
    <div>B_Arrays</div>
  )
}