import styled from "styled-components";

export const Container = styled.section`
  width: 400px;
  padding: 10px 10px;
  border-radius: 10px;
  background-color: #90c6f2;
  margin-right: 10px;
`;

export const Title = styled.h1`
  font-size: 16px;
  color: #4b2a99;
  padding: 5px 0px;
`;

export const FormWrapper = styled.form`
  border: 1px solid SteelBlue;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 5px 25px 5px 5px;
`;

export const Label = styled.label`
  padding: 5px 5px;
  color: Navy;
`;

export const Input = styled.input`
  border: none;
  padding: 5px 5px;
  &:focus {
    outline: 2px solid SteelBlue;
  }
  color: Navy;
`;

export const SubmitBtn = styled.button`
  margin-right: auto;
  margin-top: 10px;
  border: none;
  padding: 5px 20px;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  background-color: SteelBlue;

  &:hover {
    background-color: #471ca9;
  }
  &.active {
    background-color: #471ca9;
  }
`;
