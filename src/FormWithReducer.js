import React, { useReducer } from "react";

function formReducer(state, action) {
  switch (action.type) {
    case "update":
        return {...state, [action.field]: action.value}
      break;
    case "reset":
        return { name: "", email: "" };
      break;
    default:
      break;
  }
}

function FormWithReducer() {
  const initialState = { name: "", email: "" };
  const [state, dispatch] = useReducer(formReducer, initialState);

  function onHandleChange(e){
    
    dispatch({
        type: "update",
        field: e.target.name,
        value: e.target.value
    })
  }

  return (
    <div>
      <label>
        Name:
        <input
          name="name"
          value={state.name}
          onChange={onHandleChange}
          placeholder="name"
        />
      </label>
      <br />
      <label>
        Email:
        <input
          name="email"
          value={state.email}
          onChange={onHandleChange}
          placeholder="email"
        />
      </label>
      <br />
      <button onClick={() => dispatch({type: "reset"})}>Reset</button>
    </div>
  );
}

export default FormWithReducer;