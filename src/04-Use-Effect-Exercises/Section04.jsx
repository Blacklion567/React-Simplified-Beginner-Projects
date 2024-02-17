import { useState } from "react";
import Child from "./Child";


const Section04 = () => {

  const [show, setShow] = useState(null);


  const childComponent = show ? <Child /> : null;

  return (
    <>
      <button onClick={() => setShow(prev => !prev)}>Show/Hide</button>
      <br />
      <hr />
      {childComponent}
    </>
  );
};

export default Section04;
