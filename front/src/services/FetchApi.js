const baseUrl = 'http://localhost:3030';


export function getProducts(){
    return fetch(`${baseUrl}/product`).then((res) => res.json())
}
export function getOneProduct(id){
  return fetch(`${baseUrl}/product/${id}`).then((res) => res.json())
}

export function getCart(id) {
  const token = JSON.parse(localStorage.getItem('user'))
    return fetch(`${baseUrl}/cart/${id}`,{
      method:'GET',
      headers: {'Authorization':`Bearer ${token.token}`}
    }).then((res) => res.json());
  }
  
  export function addToCart(product) {
    const token = JSON.parse(localStorage.getItem('user'))
    return fetch(`${baseUrl}/cart`, {
      method: 'POST',
      
      body: JSON.stringify({product}),
      headers: {
        'content-type':'application/json',
        'Authorization':`Bearer ${token.token}`
      },
    }).then((res) => res.json());
  }
  
  export function deleteCart(productId) {
    const token = JSON.parse(localStorage.getItem('user'))
    return fetch(`${baseUrl}/cart/${productId}`, {
      method: 'DELETE',
      body: JSON.stringify({productId}),
      headers: {
        'content-type':'application/json',
        'Authorization':`Bearer ${token.token}`
      },
    }).then((res) => res.json());
  }

