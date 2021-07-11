import React from "react";
function Test2() {

    let name = useContext(NameContext);
    let age = useContext(AgeContext);

  return(
      <div>
          {name} {age}
      </div>
  )
}
