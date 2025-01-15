import React, { useState } from "react";
import "./ForgetPasswordComponent.css";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import TitleComponent from "../TitleComponent/TitleComponent";

export default function ForgetPasswordComponent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleResetPassword = () => {
    const passwordRegex = /(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;

    // Check if passwords match
    if (state.newPassword !== state.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Passwords do not match",
        text: "Please make sure both passwords match.",
      });
      return;
    }
    // Check if password meets the criteria
    if (!passwordRegex.test(state.newPassword)) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Your password must be at least 8 characters long and include at least one lowercase letter and one number.",
      });
      return;
    }

    // Update password in localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    let userIndex = users.findIndex((user) => user.email === id);
    if (userIndex !== -1) {
      users[userIndex].password = state.newPassword;
      localStorage.setItem("users", JSON.stringify(users));
      Swal.fire({
        icon: "success",
        title: "Password Reset",
        text: "Your password has been successfully reset.",
      }).then(() => {
        navigate("/login"); // Redirect to login page
      });
    }
  };

  const handleInputChange = ({ target: { id, value } }) => {
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  return (
    <section className="ES-form-section px-162 d-flex flex-column gap-4">
      <TitleComponent
        title={"Welcome to YourBank.."}
        desc={`Forgot your password? No worries! Simply enter your registered email address and follow the instructions to create a new password. For your security, ensure your new password is strong and unique.
               We take your privacy seriously. All password resets are encrypted and handled securely to protect your account.
               If you encounter any issues, please contact our support team for assistance`}
        highlightedWords={["YourBank.."]}
        fw={false}
      />
      <div className="ES-inputs d-flex gap-4">
        <input
          id="newPassword"
          type="password"
          className="ES-input f-18 fw-300"
          placeholder="Enter new password"
          value={state.newPassword}
          onChange={handleInputChange}
          required
        />
        <input
          id="confirmPassword"
          type="password"
          className="ES-input f-18 fw-300"
          placeholder="Confirm new password"
          value={state.confirmPassword}
          onChange={handleInputChange}
          required
        />
        <button
          type="submit"
          onClick={handleResetPassword}
          className="ES-custom-btn f-18 fw-400 AA-bg-btn-green-60"
        >
          Reset
        </button>
      </div>
    </section>
  );
}
