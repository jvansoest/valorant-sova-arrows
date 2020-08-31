import React, { useState } from "react";

function App() {
  const maps = [
    {
      map: "ascent",
      role: "attack",
      explanation: "full charge one bounce",
      picture:
        "https://images.unsplash.com/photo-1543201245-c9031909fe6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      map: "split",
      role: "attack",
      explanation: "full charge one bounce",
      picture:
        "https://images.unsplash.com/photo-1543201245-c9031909fe6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      map: "bind",
      role: "defense",
      explanation: "full charge one bounce",
      picture:
        "https://images.unsplash.com/photo-1543201245-c9031909fe6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      map: "haven",
      role: "defense",
      explanation: "full charge one bounce",
      picture:
        "https://images.unsplash.com/photo-1543201245-c9031909fe6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
  ];

  const [map, setMap] = useState("split");
  const [role, setRole] = useState("attack");

  return (
    <div className="App">
      Map
      <select value={map} onChange={(e) => setMap(e.target.value)}>
        <option value="split">Split</option>
        <option value="haven">Haven</option>
        <option value="bind">Bind</option>
        <option value="ascent">Ascent</option>
      </select>
      Role
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="attack">ATTACK</option>
        <option value="defense">DEFENSE</option>
      </select>
      {role + " " + map}
      {maps
        .filter((e) => e.map === map && e.role === role)
        .map((map) => {
          return (
            <div>
              <h1>{map.name}</h1>
              <p>
                {map.role}
                {": "}
                {map.explanation}
              </p>
              <img width="500" src={map.picture} alt={map.name}></img>
            </div>
          );
        })}
    </div>
  );
}

export default App;
