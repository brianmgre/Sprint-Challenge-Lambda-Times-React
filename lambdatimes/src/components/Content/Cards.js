import React, { Component } from 'react';
import Card from './Card';

import PropTypes from 'prop-types';

const Cards = props => {

  console.log(props.cards);
  return (
    <div className="cards-container">
      {props.cards.map(card => (
        <Card key={card.headline} card={card} />
      ))}
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  )
}

Cards.propTypes = {
  card: PropTypes.arrayOf({
    card: PropTypes.string
  })
}

// Make sure you include prop types for all of your incoming props

export default Cards;