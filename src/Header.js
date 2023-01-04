import React from "react";
export default function(props) {
  const { src } = props;
  return (
    <div className="App-header">
      <img className="App-logo" src={src}></img>
    </div>
  );
}
