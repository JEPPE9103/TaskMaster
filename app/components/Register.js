"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "../../lib/auth";
import Link from "next/link"; // Importera Next.js Link för navigering

export default function RegisterPage() {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("");

    const handleRegister = async (event) => {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const dateOfBirth = event.target.dateOfBirth.value;
        const gender = event.target.gender.value;
        const termsAccepted = event.target.terms.checked;

        if (!firstName || !lastName || !email || !password || !dateOfBirth || !gender || !termsAccepted) {
            setErrorMessage("All fields are required, and you must accept the terms.");
            return;
        }

        const response = await register(email, password);

        if (response === "User registered successfully") {
            router.push("/todo"); // Redirect till todo-sidan
        } else {
            setErrorMessage(response);
        }
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="firstName" placeholder="First Name" required />
                <input type="text" name="lastName" placeholder="Last Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required minLength={6} />

                {/* Födelsedatum */}
                <label htmlFor="dateOfBirth">Date of Birth:</label>
                <input type="date" name="dateOfBirth" required />

                {/* Kön dropdown - Snyggare styling */}
                <div className="input-group">
                    <label htmlFor="gender">Gender:</label>
                    <select name="gender" required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Checkbox för Terms & Conditions - Fixad layout */}
                <div className="terms-container">
                    <input type="checkbox" name="terms" id="terms" required />
                    <label htmlFor="terms">I accept the terms and conditions</label>
                </div>

                <button className="primary-button" type="submit">Register</button>

                {/* Länk tillbaka till startsidan */}
                <p className="back-to-home">
                    <Link href="/" className="home-link">← Back to Home</Link>
                </p>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
}
