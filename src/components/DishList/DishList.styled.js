import styled from "styled-components";

export const DishListWrapper = styled.ul`
  /* outline: 1px solid tomato; */

  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  background-color: #90c6f2;
`;
