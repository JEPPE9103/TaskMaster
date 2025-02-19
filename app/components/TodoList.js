"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "../../lib/firebaseConfig";
import { signOut } from "firebase/auth";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import Link from "next/link";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const router = useRouter();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      fetchTasks();
    }
  }, [user]);

  // Hämta uppgifter från Firestore
  const fetchTasks = async () => {
    if (!user) return;
    const querySnapshot = await getDocs(collection(db, "users", user.uid, "tasks"));
    const fetchedTasks = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setTasks(fetchedTasks);
  };

  // Lägg till en uppgift i Firestore
  const addTask = async () => {
    if (input.trim() === "" || !user) return;
    const newTask = { text: input, completed: false };

    const docRef = await addDoc(collection(db, "users", user.uid, "tasks"), newTask);
    setTasks([...tasks, { id: docRef.id, ...newTask }]);
    setInput("");
  };

  // Ta bort uppgift från Firestore
  const removeTask = async (id) => {
    if (!user) return;
    await deleteDoc(doc(db, "users", user.uid, "tasks", id));
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Bocka av och uppdatera Firestore
  const toggleComplete = async (id, completed) => {
    if (!user) return;
    const taskRef = doc(db, "users", user.uid, "tasks", id);
    await updateDoc(taskRef, { completed: !completed });
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !completed } : task));
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  return (
    <div className="container">
      <h2>To-Do List</h2>

      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button className="primary-button" onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <span onClick={() => toggleComplete(task.id, task.completed)} style={{ cursor: "pointer" }}>
              {task.completed ? "✅ " : "⬜ "} {task.text}
            </span>
            <button className="secondary-button" onClick={() => removeTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>

      {/* Log Out-knappen under */}
      <button className="logout-button" onClick={handleLogout}>Log Out</button>

      {/* Back to Home-knapp */}
      <div className="back-to-home">
        <Link href="/" className="home-link">⬅ Back to Home</Link>
      </div>
    </div>
  );
}
