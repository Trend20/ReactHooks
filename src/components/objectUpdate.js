import React, { useState } from "react";

const ObjectUpdate = () => {
  const [names, setNames] = useState({ firstname: "", lastname: "" });
  return (
    <div>
      <span>
        <input
          type="text"
          value={names.firstname}
          onChange={(e) => setNames({ ...names, firstnam: e.target.value })}
        />
        <input
          type="text"
          value={names.lastname}
          onChange={(e) => setNames({ ...names, lastname: e.target.value })}
        />
      </span>
      <p>Firstaname: {names.firstname}</p>
      <p>Firstaname: {names.lastname}</p>
    </div>
  );
};

export default ObjectUpdate;
