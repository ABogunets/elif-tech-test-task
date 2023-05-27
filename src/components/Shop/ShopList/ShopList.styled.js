// import { Button } from "pages/Cart-page.styled";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ShopListWrapper = styled.section`
  width: 300px;

  padding: 20px 10px;
  border-radius: 10px;
  background-color: #90c6f2;
  margin-right: 10px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 16px;
  color: #4b2a99;
`;

export const Link = styled(NavLink)`
  display: block;
  width: 250px;
  cursor: pointer;

  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;

  border: none;
  padding: 20px 0px;
  border-radius: 5px;
  color: #373737;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  background-color: azure;

  font-size: 18px;
  line-height: 1.22;
  font-weight: 600;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: beige;
  }
  &.active {
    background-color: #e4bd50;
  }
`;
