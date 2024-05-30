import {  Text, Container, Box } from '@mantine/core';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Usercard = () => {
  const [Products, setProducts] = useState([]);

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
    <Container>
      <Text>
        Products
      </Text>
      {Products.map ((i) => (
        <Box key={i.id}>
          <Text>{i.title}</Text>
            <Text>{i.price}</Text> 
            <Text>{i.description}</Text> 
            <Text>{i.category}</Text> 
            <Text>{i.image}</Text> 
        </Box>
      ))}
    </Container>
      
       
  )
}

export default Usercard;