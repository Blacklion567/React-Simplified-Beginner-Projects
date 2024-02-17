import { useState } from "react";
import { Child } from "./Child";

export default function Section05() {

  const [show, setShow] = useState(null);

  const childComponent = show ? <Child /> : null;


  return (
    <>
      <button onClick={() => setShow(prevValue => !prevValue)}>Show/Hide</button>

      <p>{childComponent}</p>
    </>
  );
}
