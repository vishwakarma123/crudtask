import React from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

const App = () => {
  return (
    <div className="app">
      <h1>User Management App</h1>
      <UserForm />
      <UserList />
    </div>
  );
};

export default App;
