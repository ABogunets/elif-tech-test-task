import styled from "styled-components";

export const DishWrapper = styled.li`
  border-radius: 5px;
  background-color: aliceblue;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  > p {
    text-align: right;
    margin-right: 20px;
  }
  > h2 {
    font-size: 16px;
    margin-left: 20px;
    margin-top: 10px;
  }
  > button {
    margin: 0 0 10px 10px;
    padding: 5px 10px;
    background-color: DarkSeaGreen;

    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: yellowgreen;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 225px;
  object-fit: cover;

  border-radius: 5px 5px 0 0;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
  }
`;
