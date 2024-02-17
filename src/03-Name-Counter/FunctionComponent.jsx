import { useState } from "react";

export function FunctionComponent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  console.log('FunctionComponent');
  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge(currentAge => currentAge - 1)}>-</button>
      {age}
      <button onClick={() => setAge(currentAge => currentAge + 1)}>+</button>
      <br />
      <h1>Function Component</h1>
      <br />
      My name is {name} and I am {age} years old.
    </div>
  );
}
