import { useLocalStorage } from "./useLocalStorage";

function Section10() {

  const [firstName, setFirstName] = useLocalStorage('FIRST_NAME', "");

  const [lastName, setLastName] = useLocalStorage('LAST_NAME', 'Default');

  const [hobbies, setHobbies] = useLocalStorage('HOBBIES', ['Programming', 'Reading', 'Sleeping']);

  const removeHobbies = () => {
    setHobbies(a => {
      return [...a.slice(0, 1), ...a.slice(1 + 1)];
    }, []);
  };



  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBotton: "1rem",
        }}
      >
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </div>

      <div>{hobbies.join(', ')}</div>
      <button
        onClick={() => {
          setHobbies(currentHobbies => [...currentHobbies, 'Coding']);
        }}
      >Add Hobby</button >
      <button onClick={removeHobbies}>Remove second element</button>
    </>

  );
}

export default Section10;
