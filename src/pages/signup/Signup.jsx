import { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
// import { mobile } from "../responsive";

const Signup = () => {

const [ userFormData, setUserFormData ] = useState({
  name: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
});

const handleOnChange = (e) => {
  const { name, value } = e.target;

  setUserFormData((preve) => {
    return {
      ...preve,
      [name]:value
    }
  })
}

const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, username, email, password } = userFormData

    const sentResponse = await fetch(`http://localhost:5500/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, username, email, password })
    })

    if( sentResponse.status === 200 || sentResponse.ok ){
      alert("Registration successful");
    }
    
}

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="name" type="text" name="name" onChange={handleOnChange} required value={userFormData.name}/>
          <Input placeholder="username" maxLength={20} type="text" name="username" onChange={handleOnChange} required value={userFormData.username}/>
          <Input placeholder="email" type="email" name="email" onChange={handleOnChange} required value={userFormData.email}/>
          <Input placeholder="password" type="password" name="password" onChange={handleOnChange} required value={userFormData.password}/>
          <Input placeholder="confirm password" type="password" name="confirmPassword" onChange={handleOnChange} required value={userFormData.confirmPassword}/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.pinimg.com/564x/10/7d/6e/107d6ea215157907ea7fc8cac142abde.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

