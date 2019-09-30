import React from "react";
import FetchContainer from "./FetchContainer";

const Train = props => (
  <div>
    <h2>{props.query} Images</h2>
    <FetchContainer query={props.query} />
  </div>
);

export default Train;
