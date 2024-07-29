import React from "react";
import styled from "styled-components";

const InputControl = ({label, ...props}) => {
  return <Container>
    {label && <Label>{label}</Label>}
    <Input type="text" {...props}/>
  </Container>;
};

export default InputControl;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 1rem;
`;

const Input = styled.input`
  border: 1px solid #cccccc;
  outline: none;
  padding: 10px 12px;
  font-size: 1rem;
  border-radius: 5px;

  &:hover{
    border: 1px solid #adadad;
  }

  &:focus{
    border: 1px solid #239ce2;
  }
`;
