// import { useState } from "react";

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit =   () => {
//     const payload = {
//       username,
//       email,
//       password,
//     };
//     fetch("https://bored-miniskirt-crab.cyclic.app/users/register",{
//       method:"POST",
//       headers:{
//         "Content-Type":"application/json"
//       },
//       body:JSON.stringify(payload)
//     })
//     .then(res=>res.json())
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err))

//     console.log(payload);
//   };
//   return (
//     <>
//       <h3>Signup</h3>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="user name"
//       />
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="email"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="password"
//       />
//       <button onClick={handleSubmit}>Register</button>
//     </>
//   );
// };

// export default Signup;



import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const payload = {
      username,
      email,
      password,
    };

    try {
      const response = await fetch(
        "https://worrisome-plum-dolphin.cyclic.app/users/register",
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
    } catch (error) {
      console.error("Error:", error.message);
    }

    console.log(payload);
  };

  return (
    <>
      <h3>Signup</h3>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
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
      <button onClick={handleSubmit}>Register</button>
    </>
  );
};

export default Signup;
