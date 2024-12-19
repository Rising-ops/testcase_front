import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [userData, setUserData] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/auth/register", {
        username,
        password,
      });

      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div dangerouslySetInnerHTML={{ __html: `<iframe src="teacher_login.html"></iframe>` }}/>
  );
};

export default Login;
