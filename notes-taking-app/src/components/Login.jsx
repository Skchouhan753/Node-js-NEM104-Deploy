

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [allowed,setAllowed] = useState(false)

  const handleLogin = async () => {
    const payload = {
      email,
      password,
    };

    try {
      const response = await fetch(
        "https://worrisome-plum-dolphin.cyclic.app/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to register user");
      }

      const data = await response.json();
      console.log(data);
      localStorage.setItem("token",data.token)
    } catch (error) {
      console.error("Error:", error.message);
    }

    console.log(payload);
  };

  return (
    <>
      <h3>Login</h3>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
