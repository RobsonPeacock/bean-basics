import React from 'react';
import Content from '../content';
import { useParams } from 'react-router-dom';

const CoffeeTypeDetails = () => {
  const { coffeeTypeId } = useParams();
  const upperCoffeeTypeId = coffeeTypeId.charAt(0).toUpperCase() + coffeeTypeId.slice(1);
  const coffeeType = Content.coffeeTypes[upperCoffeeTypeId];

  if (!coffeeType) {
    return <p>Coffee type not found.</p>;
  }

  return (
    <div>
      <p>{upperCoffeeTypeId}</p>
      <p>{coffeeType.description}</p>
    </div>
  )
}

export default CoffeeTypeDetails;