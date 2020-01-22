import React, { useState, useEffect } from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';

import { FormatPrice } from '../../config/format';
import { ProductList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(item => ({
        ...item,
        priceFormatted: FormatPrice(item.price),
      }));
      setProducts(data);
    }
    loadProducts();
  }, []);
  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={20} />
              <strong>3</strong>
            </div>
            <h2>Adicionar ao carrinho</h2>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
