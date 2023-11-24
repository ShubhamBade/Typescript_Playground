import React from 'react'

type Props = {}

export default function D_ENUMS({}: Props) {

    // ENUMS - An enum is a special "class" that represents a group of constants (unchangeable variables)

    enum Sides{
        right, // value start from 0 and increment as we grow like 0,1,2+
        left,
        top,
        bottom
    }
    console.log(Sides)

    //You can assign unique number values for each enum value. Then the values will not incremented automatically:
    enum StatusCodes{
        Sucess=201,
        Error=404,
        NewError="Custom" // alows this but not recomamded
    }
    console.log(StatusCodes.Sucess)
    console.log(StatusCodes.NewError)
  return (
    <div>D_ENUMS</div>
  )
}