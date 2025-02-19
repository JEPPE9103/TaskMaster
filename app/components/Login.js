"use client";
import { useState } from "react";
import { login } from "../../lib/auth";
import { useRouter } from "next/navigation";
import Link from "next/link"; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await login(email, password);
    if (response === "Login successful") {
      router.push("/todo");
    } else {
      setMessage(response);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button className="primary-button" type="submit">Login</button>
      </form>
      <p>{message}</p>

      {/* Back to Home-knapp */}
      <div className="back-to-home">
        <Link href="/" className="home-link">⬅ Back to Home</Link>
      </div>
    </div>
  );
}
