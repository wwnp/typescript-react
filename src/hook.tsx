import React, { createContext, useCallback, useContext, useEffect, useMemo } from 'react';
import { useState, useRef } from 'react';
import { useReducer } from 'react';


// --------- useContext 1---------
interface ITheme {
  backgroundColor: string;
  color: string;
}
const ThemeContext = createContext<ITheme>({
  backgroundColor: 'red',
  color: 'white',
})

// --------- useReducer 1---------
interface State {
  count: number
}
type Action = {
  type: 'increment' | 'decrement'
}
const countReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    default: return state
  }
}

export const App = () => {
  // --------- useState --------- 
  const [value, setValue] = useState<number>(0);
  const handleButton = () => {
    setValue((prevState) => prevState + 1)
  }

  //  --------- useRef ---------
  const ref1 = useRef<HTMLHeadingElement | null>(null);
  const ref2 = useRef<HTMLParagraphElement>(null!);
  useEffect(() => {
    if (ref2.current) {
      ref2.current.style.backgroundColor = '#ccc'
    }
  }, []);

  // --------- useContext 2 ---------
  const themeContext = useContext<ITheme>(ThemeContext);

  // --------- useReducer 2 ---------
  const [state, dispatch] = useReducer(countReducer, { count: 0 })

  // --------- useCallback ---------
  const sum = (a: number, b: number) => {
    return a + b
  }
  // const memoizedCallback = useCallback(() => { sum(a, b); }, [a, b]);
  // --------- useMemo ---------
  // const memoizedValue = useMemo((a: number, b: number) => sum(a, b), [a, b]);


  // --------- useEffect don't require typization---------
  return (
    <>
      {/* STATE */}
      <button onClick={handleButton}>{value}</button>
      <hr />

      {/* REF */}
      <h1 ref={ref1}>Sex</h1>
      <p ref={ref2}>asasd</p>
      <hr />

      {/* CONTEXT */}
      <h1 style={{ backgroundColor: themeContext.backgroundColor }}>themeContext</h1>
      <hr />

      {/* REDUCER */}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <span>{state.count}</span>
    </>
  )
}

