import React from "react";
import styled from 'styled-components'
const Button = ({ children }) => {
  return <BTN>{children}</BTN>;
};

export default Button;

export const BTN = styled.button`
position: fixed;
right: 20px;
top: 20px;
padding: 10px 20px;
font-size: 1rem;
color: #fff;
background-color: #e50914;
border: none;
cursor: pointer;
font-weight: 600;
`