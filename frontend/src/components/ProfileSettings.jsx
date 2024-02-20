import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../App";

const ProfileSettings = () => {
  const { state, dispatch } = useContext(UserContext)

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (state) {
      setName(state.name)
      setUsername(state.username)
      setEmail(state.email)
    }
  }, [state]);

  const handleSave = () => {
    fetch("http://localhost:5100/updateSettings", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
      })
    }).then(res => res.json())
    .then(result => {
      localStorage.setItem("user", JSON.stringify({ ...state, name: name, username: username, email: email }));
      dispatch({ type: "UPDATEFIELDS", payload: { name: result.name, username: result.username, email: result.email }});
      console.log("New State:", { ...state, name: name, username: username, email: email });
      console.log("Response from server:", result);
      alert("changes saved")
    }).catch(err => {
      console.log(err)
    })

    setEditing(false);
  };

  return (
    <div className="bg-zinc-100 p-3 text-black my-5 rounded-md">
      <h1 className="text-xl text-center font-bold mb-5">General</h1>
      <div className="mb-4 flex items-center justify-between border-b border-b-gray-400 pb-2 truncate">
        <label className="block mr-1">Name:</label>
        {editing ? (
          <input
            type="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded px-2 py-1 w-9/12"
          />
        ) : (
          <p className="text-cyan-700">{name}</p>
        )}
      </div>
      <div className="mb-4 flex items-center justify-between border-b border-b-gray-400 pb-2 truncate">
        <label className="block mr-1">Username:</label>
        {editing ? (
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded px-2 py-1 w-9/12"
          />
        ) : (
          <p className="text-cyan-700">{username}</p>
        )}
      </div>
      <div className="mb-4 flex items-center justify-between border-b border-b-gray-400 pb-2 truncate">
        <label className="block mr-1">E-mail:</label>
        {editing ? (
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded px-2 py-1 w-9/12"
          />
        ) : (
          <p className="text-cyan-700">{email}</p>
        )}
      </div>

      {editing ? 
        <button className="bg-cyan-600 hover:bg-cyan-500 transition-all p-1 rounded-md w-20 text-sm text-white" onClick={handleSave}>Save </button>
        :
        <button className="bg-cyan-600 hover:bg-cyan-500 transition-all p-1 rounded-md w-20 text-sm text-white" onClick={() => setEditing(true)}>Edit</button>
      }
    </div>
  );
};

export default ProfileSettings;
