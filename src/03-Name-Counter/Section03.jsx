import { useRef, useState } from "react";
import { ClassComponent } from "./ClassComponent";
import { FunctionComponent } from "./FunctionComponent";

function Section03() {

  const [show, setShow] = useState(null);



  const toggleShow = () => {
    setTimeout(() => {
      setShow(prev => !prev);
    }, 2000);
  };

  return (
    <>
      {show ? <ClassComponent /> : <FunctionComponent />}


      <button onClick={toggleShow}>Click Me</button>
    </>

  );
}

export default Section03;
