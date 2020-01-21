import { createGlobalStyle } from 'styled-components';

import background from '../assets/background.svg';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }
  *:focus{
    outline: 0
  }

  html, body, #root {
  max-height: 100%;
  }
  body{
    background: #673AB7 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px, 'Roboto', sans-serif;
  }
  a{
    text-decoration:none;
    font: 'Roboto', sans-serif
  }
 ul{
   list-style:none;
 }
 button{
   cursor:pointer;
 }
 #root{
   max-width:1200px;
   margin:0 auto;
   padding: 0 20px 50px;
 }
`;
