import { Select } from '@mantine/core';
import { useState, useEffect } from 'react';
import axios from 'axios';

function DropdownComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Select
      label="Select a product"
      placeholder="Pick one"
      data={products.map((product) => ({ value: product.id, label: product.title }))}
    />
  );
}

export default DropdownComponent;