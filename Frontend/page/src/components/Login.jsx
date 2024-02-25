import React from 'react'

const Login = () => {
  return (
    <div className="login">
      <main>
        <h1>Log in Page</h1>

        <form>
          <div>
            <label htmlFor="name">Customer name</label>
            <input type="text" required placeholder="Abc" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="text" required placeholder="password" />
          </div>

          <button type="submit">Log in</button>
        </form>
      </main>
    </div>
  )
}

export default Login;