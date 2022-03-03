import { useReducer, useState } from "react";

const initialState = { inputValue: "", isTouched: false };

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT")
    return { inputValue: action.inputValue, isTouched: state.isTouched };
  if (action.type === "BLUR")
    return { inputValue: state.inputValue, isTouched: true };
  if (action.type === "INPUT") return { inputValue: "", isTouched: false };
  return initialState;
};

const useInput = (validate) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

  //   const [inputValue, setInputValue] = useState("");
  //   const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validate(inputState.inputValue);
  const hasError = !inputIsValid && inputState.isTouched;

  const inputChangeHandler = (event) => {
    dispatch({ type: "INPUT", inputValue: event.target.value });
    // setInputValue(event.target.value);
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
    // setIsTouched(true);
  };

  const reset = () => {
    dispatch({ type: "RESET" });
    // setInputValue("");
    // setIsTouched(false);
  };

  return {
    value: inputState.inputValue,
    inputIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
