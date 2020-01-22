import styled from 'styled-components';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  list-style: none;
  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px;
    img {
      max-width: 250px;
      align-self: center;
    }
    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }
    > span {
      margin-bottom: 6px;
      font-weight: bold;
      font-size: 21px;
      margin: 3px 0 10px;
    }
    button {
      margin-top: auto;
      display: flex;
      width: 100%;
      height: 40px;
      overflow: hidden;
      border: 0;
      background: #512da8;
      color: #fff;
      border-radius: 4px;
      h2 {
        font-size: 16px;
        margin: auto;
      }

      &:hover {
        opacity: 0.97;
      }
      div {
        align-items: center;

        display: flex;
        padding: 10px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        margin-right: 2px;
        strong {
          font-size: 15px;
        }
        svg {
          margin-right: 4px;
        }
      }
    }
  }
`;
