import React, { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //console.log(auth?.currentUser?.email);
  //console.log(auth?.currentUser?.photoURL);

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

  const SignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {/* email/username */}
      <input
        placeholder="Email..."
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* password */}
      <input
        placeholder="Password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={signIn}>Sign In</button>

      <button onClick={SignInWithGoogle}>Sign Up with Google</button>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Auth;

{
  /**
import React, { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const [successMessage, setSuccessMessage] = useState(""); // State for success messages

  const signUp = async () => {
    try {
      // Clear previous messages
      setErrorMessage("");
      setSuccessMessage("");

      // **Local Password Validation**
      if (password.length < 6) {
        setErrorMessage("Password must be at least 6 characters long.");
        return; // Stop execution if the password is invalid
      }

      // Create user in Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Success: Update success message
      setSuccessMessage(`User created successfully: ${userCredential.user.email}`);
    } catch (error) {
      // Error: Update error message
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>

      <input
        placeholder="Email..."
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password..."
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={signUp}>Sign Up</button>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
};

export default Auth;
*/
}
