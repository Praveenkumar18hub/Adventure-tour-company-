import React from 'react';
import './Cards.css';
import CardItem from './Carditem';
import img9 from "../images/img-9.jpg"
import img2 from "../images/img-2.jpg"
import img3 from "../images/img-3.jpg"
import img4 from "../images/img-4.jpg"
import img8 from "../images/img-8.jpg"

function Cards() {
  return (
    <div className='cards'>
      {/* <h1>ADVENTURE TOUR COMPANY</h1> */}
      <br></br>
      <h1 >Check out our Destination!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img9}
              text='The Adventure List In Singapore'
              label='Recommended'
              path='/services'
            />
            <CardItem
              src={img4}
              text='The Adventure List In Malaysia'
              label='Recommended'
              path='/Auth'
            />
            <CardItem
              src={img2}
              text='The Adventure List In Canada'
              label='Recommended'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='The Adventure List In America'
              label='Recommended'
              path='/services'
            />
            <CardItem
              src={img4}
              text='The Adventure List In India'
              label='Recommended'
              path='/Auth'
            />
            <CardItem
              src={img8}
              text='The Adventure List In China'
              label='Recommended'
              path='/Auth'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
