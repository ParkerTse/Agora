'use clients';

import React from 'react';

export default function LoginPage() {
  return (
    <div>
      <h1>Login Page WORK IN PROGRESS</h1>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}