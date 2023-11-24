import React, { createContext } from "react";
import ABasicProps from "./reactcheatsheet/ABasicProps";
import { BFunctionalComponent } from "./reactcheatsheet/BFunctionalComp";
import { CHooks } from "./reactcheatsheet/CHooks";

//context creation - require for useContext
type ThemeContextType = "light" | "dark";
const ThemeContext = createContext<ThemeContextType>("light");

type Props = {};

export default function App({}: Props) {
  return (
    <div>
      {/* <ABasicProps 
      message="Welcome"
      // names={["Shubham","Bade"]}
      /> */}
      {/* <BFunctionalComponent message="hello"/> */}
      <CHooks />
    </div>
  );
}
