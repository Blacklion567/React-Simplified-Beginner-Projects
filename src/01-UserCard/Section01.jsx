import { useState } from "react";
import "./user.css";
import user from "./user.json";
import { UserCard } from "./UserCard";
import { UserCardClass } from "./UserClassCard";

export default function Section01() {

  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow(prev => !prev);
  };

  return (
    <div>
      {show ? <UserCard
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        address={user.address} /> : <UserCardClass
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        address={user.address} />}


      <button onClick={toggleShow}>Click Me</button>

      {/* <UserCard
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        address={user.address}
      />
      <br />
      <UserCardClass
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        address={user.address}
      /> */}
    </div>
  );
}
