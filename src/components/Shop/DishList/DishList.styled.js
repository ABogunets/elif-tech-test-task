import styled from "styled-components";

export const Wrapper = styled.div`
  height: 78vh;
  overflow-y: scroll;
`;
export const DishListWrapper = styled.ul`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding-right: 10px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  background-color: #90c6f2;
`;
