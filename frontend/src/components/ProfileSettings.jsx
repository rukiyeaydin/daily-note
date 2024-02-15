import React, { useState } from "react";

const ProfileSettings = () => {
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState("rukiyeaydin");
  const [email, setEmail] = useState("rukiyeaydinlive@gmail.com");
  const [password, setPassword] = useState("");

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="bg-zinc-100 p-3 text-black my-5 rounded-md">
      <h1 className="text-xl text-center font-bold mb-5">General</h1>
      <div className="mb-4 flex items-center justify-between border-b border-b-gray-400 pb-2 truncate">
        <label className="block mr-1">Username:</label>
        {editing ? (
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
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
            onChange={handleChange}
            className="border rounded px-2 py-1 w-9/12"
          />
        ) : (
          <p className="text-cyan-700">{email}</p>
        )}
      </div>
      <div className="mb-4 flex items-center justify-between border-b border-b-gray-400 pb-2 truncate">
        <label className="block mr-1">Şifre:</label>
        {editing ? (
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="border rounded px-2 py-1 w-9/12"
          />
        ) : (
          <p className="text-cyan-700">********</p>
        )}
      </div>
      <button className="bg-cyan-600 hover:bg-cyan-500 transition-all p-1 rounded-md w-20 text-sm text-white" onClick={editing ? handleSave : handleEdit}>
        {editing ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default ProfileSettings;
