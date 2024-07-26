import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import apiRequest from "../../lib/apiRequest";
// import { AuthContext } from "../../context/AuthContext";
import styled from "styled-components";

function Signin() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const {updateUser} = useContext(AuthContext)

  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
    // setError("");
    // const formData = new FormData(e.target);

    // const username = formData.get("username");
    // const password = formData.get("password");

    // try {
    //   const res = await apiRequest.post("/auth/login", {
    //     username,
    //     password,
    //   });

    //   updateUser(res.data)

    //   navigate("/");
    // } catch (err) {
    //   setError(err.response.data.message);
    // } finally {
    //   setIsLoading(false);
    // }
  };
  return (
    <Login>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
          />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/signup" style={{ textDecoration: 'none' }}>{"Don't"} you have an account?</Link>
        </form>
      </div>
    </Login>
  );
}

export default Signin;


const Login = styled.div` 
    height: 50rem;
    max-width: 1440px;
    margin: auto;
  
    .formContainer {
      flex: 3;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
  
      form {
        display: flex;
        flex-direction: column;
        gap: 20px;
  
        input{
          padding: 20px;
          border: 1px solid gray;
          border-radius: 5px;
        }
  
        button{
          padding: 20px;
          border-radius: 5px;
          border: none;
          background-color: teal;
          color: white;
          font-weight: bold;
          cursor: pointer;
  
          &:disabled{
            background-color: #BED9D8;
            cursor: not-allowed;
          }
        }
  
        span{
          color: rgba(255, 0, 0, 0.591);
        }
  
        a{
          font-size: 14px;
          color: gray;
          border-bottom: 1px solid gray;
          width: max-content;
        }
      }
    }
  
    .imgContainer {
      flex: 2;
      background-color: #fcf5f3;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
      }
    }
  
`