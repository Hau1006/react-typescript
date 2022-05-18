import { type } from "os";
import React from "react";
type GreenName = {
  title: string;
};
const Title: React.FC<GreenName> = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};
export default Title;
