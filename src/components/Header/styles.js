import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

export const Cart = styled(Link)`
  display: flex;
  color: #fff;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2;

  &:hover {
    opacity: 0.9;
  }
  div {
    text-align: right;
    margin-right: 10px;
  }
  strong {
    font-size: 16px;
    display: block;
    color: #fff;
  }
  span {
    font-size: 12px;
    color: #fff;
  }
`;
