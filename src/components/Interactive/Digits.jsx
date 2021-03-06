import { useReducer } from "react";

import DigitsSection from "components/Mode/Sandbox/Sections/DigitsSection";
import defaultState from "./State/StateDigitsSection";
import reducer from "components/Mode/Sandbox/State/reducer";

export default (props) => {

  const [ state, dispatch ] = useReducer(reducer, defaultState);

  return (
    <DigitsSection {...{
      state,
      ...props,
      dispatch
    }} />
  );
};
