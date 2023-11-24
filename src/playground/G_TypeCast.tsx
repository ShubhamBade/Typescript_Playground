import React from 'react'

type Props = {}

export default function G_TypeCast({}: Props) {
    // Casting is the process of overriding a type.

    let x:unknown="String"
    console.log((x as string).length)

    let y:unknown=10
    console.log((y as string).length) // undefined - number do not have length

    // console.log((<string>x).length); <> : This type of casting will not work with TSX, such as when working on React files.

  return (
    <div>G_TypeCast</div>
  )
}