import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useReducer,
  useCallback,
  useMemo,
} from "react";

// Create a context for theme
const ThemeContext = React.createContext();

// Reducer function for managing state
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

const Activity_3 = () => {
  // useState
  const [count, setCount] = useState(0);

  // useEffect
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // useContext
  const theme = useContext(ThemeContext);

  // useRef
  const inputRef = useRef();

  // useReducer
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  // useCallback
  const incrementCount = useCallback(() => {
    dispatch({ type: "INCREMENT" });
  }, []);

  // useMemo
  const expensiveCalculation = useMemo(() => {
    // Simulate an expensive calculation
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result;
  }, []);

  return (
    <div>
      <p>Count (useState): {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <p>Theme (useContext): {theme}</p>

      <input ref={inputRef} placeholder="Focus me!" />

      <p>Count (useReducer): {state.count}</p>
      <button onClick={incrementCount}>Increment (useCallback)</button>

      <p>Expensive Calculation (useMemo): {expensiveCalculation}</p>
    </div>
  );
};

// Example usage of ThemeContext
export default Activity_3;
