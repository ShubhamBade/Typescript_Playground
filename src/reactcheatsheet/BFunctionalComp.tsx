import React from "react";
interface data {
  message: string;
}
export const BFunctionalComponent: React.FC<data> = ({
  message = "Default Messgae",
}) => {
  return <div></div>;
};

type AppProps = {
  message: string;
};
export const myApp = ({ message }: AppProps) => {
  return <div></div>;
};

export const myApp2 = ({ message }: AppProps): React.JSX.Element => {
  return <div></div>;
};

export const myApp3 = ({ message }: { message: string }) => {
  //looks like repetative
  return <div></div>;
};
