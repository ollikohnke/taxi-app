import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "./AuthContext";
import axios from 'axios'

function LoginForm(){

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [pincode, setPincode] = useState("")
    const [errorMessage, setErrorMessage] = useState(null); // New state for handling error messages

    const { setToken, setIsAuthenticated } = useContext(AuthContext);

    async function handleLogin(e){
        e.preventDefault()
        try {
            const requestBody = {username, pincode}
            const response = await axios.post(API_SERVER_URI_LOGIN, requestBody)
            setToken(response.data.data.accessToken);
            setIsAuthenticated(true)
            navigate('/')
        } catch (error) {
            console.error("Authentication failed:", error);
            setToken(null);
            if (error.response && error.response.data) {
              setErrorMessage(error.response.data); // Set the error message if present in the error response
            } else {
              setErrorMessage("An unexpected error occurred. Please try again.");
            }
          }
        };

        return (
            <div>
              {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}{" "}
              <form onSubmit={handleLogin}>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  type="text"
                  autoFocus
                />
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="PIN"
                  inputMode="numeric"
                  pattern="[0-9]*"
                />
                <button type="submit">Login</button>
              </form>
            </div>
          );
        };

export default LoginForm