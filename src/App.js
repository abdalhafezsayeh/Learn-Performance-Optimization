import { useState, useMemo, useCallback } from "react";
import Counter from "./Counter";
import "./styles.css";
import TextTest from "./TextTest";

export default function App() {
  const [counter, setCounter] = useState(0);

  // Use Array & Object & Function Return Think
  const title = useMemo(() => {
    return { name: "ahmed" };
  }, []);

  // Use Function Callback
  const handleTextTest = useCallback(() => {
    console.log("Ahmed" + " " + "Sayeh");
  }, []);

  return (
    <div className="App">
      <Counter
        counterFc={() => setCounter((prev) => prev + 1)}
        counter={counter}
      />
      <TextTest textProps={title} HandleFn={handleTextTest} />
    </div>
  );
}
