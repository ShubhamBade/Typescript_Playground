import React, { useCallback, useReducer, useRef, useState } from "react";

type Props = {};

type User = {
  name: string;
};

//reducer code
let initialState = { count: 0 };
type ActionType={ type: "increment"; payload: number }

const reducer=(state :typeof initialState, action:ActionType)=>{
    switch (action.type) {
        case "increment":
          return { count: state.count + action.payload };
        default:
          throw new Error();
      }
}

export const CHooks = (props: Props) => {
  // initially user is null. we can update state as User as we need
  const [user, setUser] = useState<User | null>(null);

  //useCallback
  const myCallback = useCallback((param1: string) => {
    console.log(param1);
  }, []);

  //useReducer
  const [state, dispatch] = useReducer(reducer, initialState);


  //useRef hookd -
  const divRef = useRef<HTMLDivElement>(null);

  return <div ref={divRef}>CHooks</div>;
};
