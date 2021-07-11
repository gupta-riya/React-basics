import React, { useEffect, useState } from "react";

function Question4() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // change only dependency array
  useEffect(() => {
    console.log("Count is updated");
  },[count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>State: {count}</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default Question4;
