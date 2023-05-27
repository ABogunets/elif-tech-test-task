import styled from "styled-components";

export const CartCardWrapper = styled.li`
  display: flex;

  border-radius: 5px;
  background-color: aliceblue;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  overflow: hidden;
`;
export const ImageWrapper = styled.div`
  padding: 10px 10px;
  > img {
    max-width: 100%;
    height: auto;

    border-radius: 5px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: scale(1.03);
    }
  }
  > button {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: DarkSeaGreen;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    &:hover {
      background-color: yellowgreen;
    }
  }
`;

export const DataWrapper = styled.div`
  width: 60%;
  padding: 10px 10px;
  > p {
    margin-top: 30px;
    text-align: right;
    margin-right: 20px;
  }
  > h2 {
    font-size: 16px;
    margin-left: 20px;
    margin-top: 10px;
  }
`;

export const Input = styled.input`
  display: block;
  text-align: center;
  outline: none;
  padding: 5px 5px;
  margin-left: auto;
  margin-right: 20px;
  justify-content: ;
  margin-top: 10px;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    opacity: 1;
  }
`;
