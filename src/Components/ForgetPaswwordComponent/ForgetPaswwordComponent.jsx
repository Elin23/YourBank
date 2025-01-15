
import React, { useEffect, useState  } from "react";
import "./ForgetPaswwordComponent.css";
import { useParams } from 'react-router-dom';

export default function ForgetPaswwordComponent() {

  const { id } = useParams();
  let [state,setState] = useState({
    newPassword: ""
  });

  const hanleResetPassword = () =>{
    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users);
    let userIndex = users.findIndex((user) => user.email === id);
    console.log(userIndex);
    if(userIndex != null){
      users[userIndex].password = state.newPassword;
      console.log(users);
      localStorage.setItem('users', JSON.stringify(users));
    }
  }

  const handleInputChange = ({ target: { id, value } }) => {
    setState((prevState) => ({ ...prevState, [id]: value }));
  
  };

  return (
    <section className="AA-form-section AA-px-297 pb-150">
      <input
                        id={"newPassword"}
                        className="AA-input f-18 fw-300"
                        placeholder={`Enter new password`}
                        value={state.newPassword}
                        onChange={handleInputChange}
                        required
                      />

        <button
              type="submit"
              onClick={hanleResetPassword}
              className={`AA-custom-btn f-18 fw-400 AA-bg-btn-green-60`}
              >
              Reset
            </button>
    </section>
  );
}
