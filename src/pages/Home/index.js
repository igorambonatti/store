import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-md-runner-2-masculino/26/D12-1407-026/D12-1407-026_zoom1.jpg"
          alt="tênis"
        />
        <strong>Nike XQDL</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={20} />
            <strong>3</strong>
          </div>
          <h2>Adicionar ao carrinho</h2>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-md-runner-2-masculino/26/D12-1407-026/D12-1407-026_zoom1.jpg"
          alt="tênis"
        />
        <strong>Nike XQDL</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={20} />
            <strong>3</strong>
          </div>
          <h2>Adicionar ao carrinho</h2>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-md-runner-2-masculino/26/D12-1407-026/D12-1407-026_zoom1.jpg"
          alt="tênis"
        />
        <strong>Nike XQDL</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={20} />
            <strong>3</strong>
          </div>
          <h2>Adicionar ao carrinho</h2>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-md-runner-2-masculino/26/D12-1407-026/D12-1407-026_zoom1.jpg"
          alt="tênis"
        />
        <strong>Nike XQDL</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={20} />
            <strong>3</strong>
          </div>
          <h2>Adicionar ao carrinho</h2>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-md-runner-2-masculino/26/D12-1407-026/D12-1407-026_zoom1.jpg"
          alt="tênis"
        />
        <strong>Nike XQDL</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={20} />
            <strong>3</strong>
          </div>
          <h2>Adicionar ao carrinho</h2>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-md-runner-2-masculino/26/D12-1407-026/D12-1407-026_zoom1.jpg"
          alt="tênis"
        />
        <strong>Nike XQDL</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={20} />
            <strong>3</strong>
          </div>
          <h2>Adicionar ao carrinho</h2>
        </button>
      </li>
    </ProductList>
  );
}
