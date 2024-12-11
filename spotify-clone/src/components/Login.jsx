import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Spotify-Logo.wine.png";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("http://localhost:3001/login", { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") {
                    console.log("Login Success");
                    alert("Login successful!");
                    navigate("/home");
                } else {
                    alert("Incorrect password! Please try again.");
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white font-sans">
            {/* Spotify Logo */}
            <img
                src={logo}
                alt="Spotify Logo"
                className="w-48 mb-8"
            />

            <div className="p-6 bg-green-500 rounded-lg w-96 text-center shadow-lg">
                <h2 className="mb-6 font-bold text-xl">Log In to Spotify</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-700"
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-700"
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-black text-white font-bold rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-700"
                    >
                        Log In
                    </button>
                </form>
                <p className="mt-4">
                    Don&apos;t have an account? {" "}
                    <Link
                        to="/register"
                        className="text-white underline font-bold hover:text-gray-200"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
