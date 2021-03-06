import { useReducer } from "react";

import NumberSection from "components/Mode/Sandbox/Sections/NumberSection";
import defaultState from "./State/StateDigitsSection";
import reducer from "components/Mode/Sandbox/State/reducer";

export default (props) => {

  const [ state, dispatch ] = useReducer(reducer, defaultState);

  return (
    <NumberSection {...{
      state,
      ...props,
      dispatch
    }} />
  );
};
