import React, { createContext, useContext } from "react";

const MyContext = createContext(1);
const MyComponent = () => (
  <>
    <p>{useContext(MyContext)}</p>
    <MyContext.Provider value={2}>
      <p>{useContext(MyContext)}</p>
    </MyContext.Provider>
  </>
);

export default MyComponent;


// the current context value is determined by the value prop of the nearest
//<MyContext.Provider> above the calling component in the tree

// in the question there is no context provider above the calling component 

// so the output is : 
// 1
// 1