import React, { forwardRef } from "react";
import CountUp from "react-countup";

const CountUpComponent = forwardRef((props, ref) => {
  return <CountUp {...props} ref={ref} />;
});

// Add displayName
CountUpComponent.displayName = "CountUpComponent";

export default CountUpComponent;
