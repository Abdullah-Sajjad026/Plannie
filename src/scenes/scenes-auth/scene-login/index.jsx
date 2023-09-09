import { useState } from "react";
import { Button, Input } from "reactstrap";
import { useAuthContext } from "../../../contexts/auth-context";

export default function LoginScene() {
  const { markLoggedIn } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const VerifiedUser = localStorage.getItem("auth-user");

  /**
   * Login handler
   */
  const handleLogin = (e) => {
    e.preventDefault();

    if (VerifiedUser) {
      const { email: VerifiedEmail, password: VerifiedPassword } =
        JSON.parse(VerifiedUser);

      if (email === VerifiedEmail && password === VerifiedPassword) {
        // Marking user as logged in
        markLoggedIn();
        window.location.href = "/app/tasks";
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <div style={{ width: "300px" }}>
        <h1 className="text-center">Login</h1>
        <form className="d-flex gap-3 flex-column" onSubmit={handleLogin}>
          <Input
            placeholder="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            placeholder="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" color="black">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
