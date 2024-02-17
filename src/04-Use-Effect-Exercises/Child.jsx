import { useEffect, useState } from "react";

export default function Child() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('');


  useEffect(() => {
    console.log('Re-Render');
  });

  useEffect(() => {
    console.log('Hi');

    return () => {
      console.log('Bye');
    };
  });

  useEffect(() => {
    console.log(`My name is ${name} and I am ${age} years old`);
  }, [name, age]);

  useEffect(() => {
    document.title = name;

    const timeout = setTimeout(() => {
      console.log(`My name is ${name}`);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  });


  return (
    <>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <br />
      <button onClick={() => setAge(a => a - 1)}>Minus -1</button>
      <button onClick={() => setAge(a => a + 1)}>Plus +1</button>
      <br />

      <p>My name is {name} and I am {age} years old</p>
    </>

  );
}
