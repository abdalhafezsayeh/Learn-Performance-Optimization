export default function Counter({ counterFc, counter }) {
  console.log("counter");

  return (
    <>
      <div style={{ border: "1px solid #000", padding: "10px" }}>
        <button onClick={counterFc}>Add Counter</button>
        <h1>{counter}</h1>
      </div>
    </>
  );
}
