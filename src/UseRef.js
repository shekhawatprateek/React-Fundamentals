import React, { useRef } from "react";

function UseRef() {
  const inputRef = useRef();

  function handleFocus() {
    debugger
    inputRef.current.focus();
  }
  return (
    <div>
      <input ref={inputRef} type="text"></input>
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default UseRef;
