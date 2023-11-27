import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  const data = [
    {
      productImage:"https://www.apple.com/in/iphone/home/images/meta/iphone__ky2k6x5u6vue_og.png",
      productName: "Iphone 14promax",
      price: 100000,
      rating: 91,
    },
    {
      productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3jAmZcKm3NQoK8tlikVJsPAfm3cAhr_IKelWibDsJj3vgZ5BCZuvssOPGjIbljbkWR68&usqp=CAU",
      productName: "Samsung Galaxy",
      price: 95000,
      rating: 95,
    },
    {
      productImage:"https://images.officeworks.com.au/api/2/img/https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/GPX7PR128H_A_google_pixel_7_pro_5g_unlocked_smartphone_128gb_hazel.jpg/resize?size=600&auth=MjA5OTcwODkwMg__",
      productName: "Google Pixel 7pro",
      price: 70000,
      rating: 80,
    },
    {
      productImage:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697625057/Croma%20Assets/Communication/Mobiles/Images/269145_c2mrix.png?tr=w-360",
      productName: "One plus",
      price: 40000,
      rating: 80,
    },
   
  ];

  
  return (
    <div className="App">
      <div className = "card-container">
      {data.map((product, idx)=>(
        <Product
        key ={idx}
        prod ={product}
        />
      ))}
      </div>
    </div>
  );
}

export default App;



function Product({prod}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={prod.productImage} />
    <Card.Body>
      <Card.Title>{prod.productName}</Card.Title>
      <Card.Text>{prod.price}</Card.Text>
      <Card.Text>{prod.rating}</Card.Text>
      <Button variant="primary"
      onClick={()=>console.log(prod.productName)}
      >Add to cart</Button>
    </Card.Body>
  </Card>
  );
}