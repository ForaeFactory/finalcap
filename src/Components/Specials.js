import React from "react";
import SaladCard from "../Images/greek salad.jpg";
import Bruschetta from "../Images/bruchetta.svg";
import LemonCake from "../Images/lemon dessert.jpg";
import { Link } from "react-router-dom";

const contentCards = [
  {
    id: 1,
    title: 'Greek Salad',
    image: SaladCard,
    alt: 'Delicious Greek Salad',
    price: '$12.99',
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
  },
  {
    id: 2,
    title: 'Bruschetta',
    image: Bruschetta,
    alt: 'Bruschetta served on plate',
    price: '$5.99',
    description: "Our Bruchetta is made from grilled breaad that has been smeared with garlic and seasoned with salt and olive oil."
  },
  {
    id: 3,
    title: 'Lemon Cake',
    image: LemonCake,
    alt: 'A slice of Lemon Cake',
    price: '$5.00',
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
  }
]

function Specials() {
  return (
    <>
      <section className="specials-container-top">
        <div className="specials-top">
          <h1 className="specials-title">This Week's Specials</h1>
          <button className="online-menu">Online Menu</button>
        </div>
      </section>
      <section className="specials-container-bottom">
        <div className="specials-cards">
          {contentCards.map((item) => (
            <div key={item.id} className="card-container">
              <img src={item.image} alt={item.alt} width="250px" />
              <div className="card">
                <div className="card-top">
                  <h4 className="specials-name">{item.title}</h4>
                  <h4 className="specials-price">{item.price}</h4>
                </div>
                <p className="specials-desc">{item.description}</p>
                <Link to='/booking'>
                  <button className="specials-order"><b>Order for Delivery</b></button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Specials;
