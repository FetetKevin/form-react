import { useState } from "react";
import "./App.css";

export default function App() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        comfirmPassword: "",
        isSub: false,
    });

    console.log(form);

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        setForm((state) => ({
            ...state,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // form.password === form.comfirmPassword
        //     ? console.log("logged in! Kappa")
        //     : console.log("Passwords deosn't match !");

        if (form.password === form.comfirmPassword) {
            console.log("logged in! Kappa");
        } else {
            console.log("Passwords deosn't match !");
            return;
        }
        form.isSub ? console.log("thanks for sub !") : "";
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input
                    className="text"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                />
                <input
                    className="text"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={handleChange}
                />
                <input
                    className="text"
                    name="comfirmPassword"
                    type="password"
                    placeholder="Comfirm your password"
                    value={form.comfirmPassword}
                    onChange={handleChange}
                />
                <div className="inline">
                    <input
                        className="checkbox-input"
                        name="isSub"
                        type="checkbox"
                        id="here"
                        checked={form.isSub}
                        onChange={handleChange}
                    />
                    <label htmlFor="here">Receive newsletter?</label>
                </div>
                <button>Sign up</button>
            </form>
        </div>
    );
}
