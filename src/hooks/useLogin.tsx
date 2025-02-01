//custom hook

import { useState } from "react";

export function useLogin() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (user === "" || password === "") {
            setError("Username and Password are Required!")
        }
        else {
            setError("")
        }
    }

    const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    }

    const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return {
        user,
        setUser,
        password,
        setPassword,
        error,
        setError,
        handleSubmit,
        handleUserChange,
        handlePassChange,
    };
}
