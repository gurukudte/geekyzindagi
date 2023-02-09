import { useState } from "react";
import styled from "styled-components";

interface UserLogin {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [user, setuser] = useState<UserLogin>({
    email: "",
    password: "",
  });

  const handleInputChange = (field: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setuser((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };
  };

  return (
    <Formwrapper>
      <div className="about"></div>
      <div className="form">
        <div className="logo">
          <a href="/login">gZ</a>
        </div>
        <div className="welcome">Hello Again</div>
        {/* <div className="discription">

                </div> */}
        <label htmlFor="email">
          <input
            type="email"
            name="loginemail"
            placeholder="Email"
            onChange={handleInputChange("email")}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="loginpassword"
            placeholder="Password"
            onChange={handleInputChange("password")}
          />
        </label>
        <button type="submit"></button>
      </div>
    </Formwrapper>
  );
};

export default Login;

const Formwrapper = styled.div`
  height: 100vh;
  display: flex;

  .about {
    background-color: #056ff5;
    padding: 2rem;
    width: 60%;
  }
  .form {
    padding: 4rem;
    width: 40vw;
    display: flex;
    align-items: center;
    flex-direction: column;

    .logo {
      background-color: #1c105f;
      height: 5rem;
      width: 5rem;
      display: grid;
      place-items: center;
      border-radius: 2.5rem;

      a {
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: 900;
        color: white;
        border-radius: 5rem;
      }
    }

    .welcome {
      padding-top: 2rem;
      font-size: 3rem;
      font-weight: 800;
      color: #0b355f;
    }

    label {
      padding-top: 2rem;
      input {
        width: 24rem;
        height: 3rem;
        border-radius: 0.3rem;
        padding: 0.5rem;
        font-size: 1rem;
        background-color: #313131;
      }
    }
  }
`;
