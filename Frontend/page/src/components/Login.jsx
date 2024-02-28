import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../contexts/userContext';


const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [customerName, setCustomerName] = useState('');
  const [password, setPassword] = useState('');

  const handleCustomerNameChange = (event) => {
    setCustomerName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:3500/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cust_id: customerName,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          setUser(data.user); 
          navigate('/LoggedInPage');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="login">
      <main>
        <h1>Log in Page</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Customer name</label>
            <input
              type="text"
              required
              placeholder="Abc"
              value={customerName}
              onChange={handleCustomerNameChange}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              placeholder="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <button type="submit">Log in</button>
        </form>
      </main>
    </div>
  );
};

export default Login;
