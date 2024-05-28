import axios from 'axios';


export async function addToCart(producto_id) {
    const url = `http://127.0.0.1:8000/api/carrito/add/${producto_id}/`;
  
    try {
      const response = await axios.post(url, {}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('token')}`,
        },
      });
      console.log("BIEEEEEN");
      return response.data;
    } catch (error) {
      console.error(`Error al añadir el producto al carrito: ${error}`);
    }
  }
  