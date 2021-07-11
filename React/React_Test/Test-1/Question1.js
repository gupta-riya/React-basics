import React, { useState } from "react";

function Question1() {
  const [profile, setProfile] = useState({
    name: "Backbencher",
    age: 23,
  });

  const onNameChange = (e) => {
      setProfile({...profile,name:e.target.value})
  };

  const onAgeChange = (e) =>{
      setProfile({...profile,age:e.target.value});
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value= {profile.name}
          onChange={onNameChange}
        />
        <input type="text" value={profile.age} onChange={onAgeChange} />
        <h2>
          Name: {profile.name}, Age: {profile.age}
        </h2>
      </form>
    </div>
  );
}

export default Question1;
