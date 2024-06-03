import { memo, useCallback, useState } from "react";
export default function Parent() {
  const [count, changeCount] = useState(0);
  const handleCount = useCallback(() => {
    changeCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <>
      <p>{` Parent Counter 
      using
      useCallback & memo`}</p>
      <div> {count}</div>
      <hr />
      <Child handleCount={handleCount} />
    </>
  );
}

const Child = memo(({ handleCount }) => {
  console.log("Rendering");
  return (
    <>
      <button onClick={handleCount}>Increment</button>
    </>
  );
});
