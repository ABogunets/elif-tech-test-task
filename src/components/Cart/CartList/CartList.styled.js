import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  padding: 10px 10px;
  border-radius: 10px;
  background-color: #90c6f2;
`;
export const Wrapper = styled.div`
  height: 73vh;
  overflow-y: scroll;
`;

export const CartListWrapper = styled.ul`
  /* outline: 1px solid tomato; */
  width: 75%;

  display: grid;
  /* max-width: calc(100vw - 50px); */
  /* grid-template-columns: repeat(auto-fill, minmax(380px, 1fr)); */
  /* grid-template-columns: repeat(auto-fill); */

  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  background-color: #90c6f2;
`;
