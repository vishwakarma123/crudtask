import React, { useState } from "react";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

const App = () => {
  const [editingUser, setEditingUser] = useState(null);

  const handleEdit = (user) => setEditingUser(user);

  const handleUserUpdated = () => {
    setEditingUser(null);
  };

  return (
    <div>
      <h1>React CRUD with CodeIgniter</h1>
      {editingUser ? (
        <EditUser user={editingUser} onUserUpdated={handleUserUpdated} />
      ) : (
        <AddUser onUserAdded={handleUserUpdated} />
      )}
      <UserList onEdit={handleEdit} />
    </div>
  );
};

export default App;
