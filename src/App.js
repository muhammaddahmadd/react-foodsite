// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import "tailwindcss";


const pizzaData = [
  {
    name: "Behari Kebab",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Chicken Clunker",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "margherita.jpg",
    soldOut: false,
  },
  {
    name: "Crown Crust",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pepporoni",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "funghi.jpg",
    soldOut: false,
  },
  {
    name: "Ranch",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "salamino.jpg",
    soldOut: true,
  },
  {
    name: "Peri Peri",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "prosciutto.jpg",
    soldOut: false,
  },
];



function App() {
  
  const data = pizzaData;
  
  return (
    <div className="container">
      <Header/>
      <MenuText/>
      <Menu data={data}/>
      <Stats/>
    </div>
  );
}




function Header(){
  return <div className="header">
    <h1>Pizza Shop</h1>
  </div>
}

function MenuText() {
  return <div className="menu">
    <h2>Our Menu</h2>
    <p>Authentic Pizzas baked professionally</p>
  </div>
}

function Menu({data}) {
// alert(data.length)
  return <div className="pizzas">
    {data.map(pizza => 
      <Pizza name={pizza.name} ing={pizza.ingredients} pic={pizza.photoName} price={pizza.price} avalibility={pizza.soldOut} />
    )}
  </div>
}


function Pizza(props){
  const { name, pic, ing, price, avalibility } = props;

  return <div className={"pizza " + (avalibility ? "sold-out" : "")}>

    <img className={`${avalibility ? "sold-out" : ""}`} src={`/${pic}`} alt={name} />
      <div>
      <h3>{name}</h3>
      <p>{ing}</p>
      <h3>{avalibility ?"soldout" : `${price + "$"}`}</h3>
    </div>
   </div> 

}



function Stats(){
  const date = new Date();
  const h = date.getHours()
  const open = h >= 12 && h <= 22;
  console.log(open)
 return <footer className='footer'>
   {/* <p>
     {`We are ${open ? "opened, come visit us or order online" : "closed"} `}
   </p> */}
   {!open&& (
    <div className='order'>
       <p>We are closed</p>
       <button className='btn'>Order Now</button>
    </div>
   )}
 </footer>
}

export default App;
