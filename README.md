# React Context API Example 🚀👨‍💻

## Introduction
This project demonstrates the use of the React Context API to manage state globally across a React application. The Context API helps in solving the problem of prop drilling, where props are passed down multiple levels of components.
Directed by `Hitesh` sir from Youtube Channel `Chai aur code` in react playlist `Chai aur React`.

## Project Structure
The project consists of the following main components:
- **UserContext.js**: Creates a context to hold user information.
- **UserContextProvidor.jsx**: A provider component that wraps the application and provides user data to all components within it.
- **App.jsx**: The main application component that uses the UserContextProvidor to wrap the `Login` and `Status` components.
- **Login.jsx**: A component for user login that updates the user context.
- **Status.jsx**: A component that displays the current user's status.

## Files Overview

### UserContext.js
This file creates a context using React's `createContext` method.

```javascript
import React, { createContext } from "react";

const UserContext = createContext();

export default UserContext;
```
---
### UserContextProvidor.jsx
This component acts as a context provider, making the user state available to all nested components.

```javascript
import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvidor = ({ children }) => {  // corrected 'Children' to 'children'
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvidor;
```

### App.jsx
The main application component that sets up the context provider and includes the `Login` and `Status` components.

```javascript
import React from 'react';
import UserContextProvidor from './context/UserContextProvidor';
import Login from './components/Login';
import Status from './components/Status';
import './index.css';

const App = () => {
  return (
    <UserContextProvidor>
      <h2>we are debuging...</h2>
      <Login />
      <Status />
    </UserContextProvidor>
  );
};

export default App;
```

### Login.jsx
A component that allows users to input their username and password, and updates the user context on form submission.

```javascript
import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const submitHandler = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default Login;
```

### Status.jsx
A component that displays the current user's status based on the user context.

```javascript
import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Status = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>No user available</div>;
  return <div>Welcome {user.username}!</div>;
};

export default Status;
```

## Common Errors and Fixes
### Issue: `Application` is not working properly
- **Error:** The App file return statement is not  properly writened.
- **Fix:** Ensure the components are enclosed within UserContextProvider:
  ```js
   return (
    <UserContextProvidor>
    <h2>we are debuging...</h2>
     <Login/>
     <Status/>
    </UserContextProvidor>
  )
  ```
### Issue: `UserContextProvidor` not rendering children
- **Error:** The `children` prop was incorrectly named as `Children`.
- **Fix:** Ensure the prop name is `children` (lowercase) in the `UserContextProvidor` component:
  ```javascript
  const UserContextProvidor = ({ children }) => { ... };
  ```

## Learning Outcomes
- **Context API:** Using `createContext` and `useContext` to manage global state.
- **Provider Component:** Creating a provider component to supply context values.
- **Prop Drilling:** Avoiding the need to pass props through multiple layers of components.
- **State Management:** Managing user authentication state globally.
- **Error Handling:** Identifying and fixing common issues such as incorrect prop names and others.

## Conclusion
This project is a simple yet effective demonstration of using the React Context API to handle global state and avoid prop drilling. By understanding and implementing this pattern, you can manage state more efficiently in larger React applications.

## Getting Started
1. **Clone the repository:**
   ```bash
   git clone https://github.com/MrKuldeep01/context_api_practice.git
   ```
2. **Install dependencies:**
   ```bash
   npm i
   ```
3. **Run the application:**
   ```bash
   npm run dev
   ```
4. **Open in browser:**
   Navigate to `http://localhost:5173` to see the application in action.

   # `Thank you`
   ### for visiting...
