import { useEffect, useState } from "react";
import axios from "axios";
export default function Login() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setError(null);
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (formState.email == "") {
      setError("Please enter valid email");
      setLoading(false);
      return;
    } else if (formState.password.length < 8) {
      setError("Please enter 8 charachter long password");
      setLoading(false);
      return;
    }

    const response = await axios.post(
      "http://localhost:8080/api/v1/user/login",
      { data: formState }
    );

    setTimeout(() => setLoading(false), 5000);
  };

  return (
    <>
      <h2>Login Now </h2>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          onChange={handleChange}
          disabled={loading}
          type="email"
          name="email"
          placeholder="Email"
        />
        {error && <span> {error}</span>}
        <input
          onChange={handleChange}
          disabled={loading}
          type="password"
          name="password"
          placeholder="Password"
        />
        <button disabled={loading} onClick={handleSubmit}>
          Login{" "}
        </button>
      </form>
    </>
  );
}
