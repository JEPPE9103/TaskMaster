import Link from "next/link";
import "../styles/globals.css"; // Se till att CSS är inkluderad

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">TaskMaster ✅</h1>
      <p className="subtitle">The ultimate way to organize your tasks efficiently!</p>

      <div className="button-group">
        <Link href="/login">
          <button className="primary-button">Login</button>
        </Link>
        <Link href="/register">
          <button className="secondary-button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
