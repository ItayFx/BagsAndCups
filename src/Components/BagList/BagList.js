import React, { useState } from "react";

// import "./BagList.css";
import axios from "axios";
import Bag from '../Bag/Bag';
import { CardDeck } from "react-bootstrap";
const BagList = props => {
  const [bags, setBags] = useState([]);


  if(bags.length === 0){
    axios
    .get("https://api.myjson.com/bins/qn16s")
    .then(res => {
      const bags = res.data.bags;
      setBags(bags);
      console.log(bags)
    })
    .catch(function(error) {
      // handle error
      console.error(error);
    });
  }
  

  

  if (bags.length === 0) {
    return (
      <div className="catalog center">
          <h2>No Bags found.</h2>
          {/* <Button goto='/'>Add Jewelry</Button> */}
      </div>
    );
  }

  return (
    <CardDeck style={{margin:"1rem"}} className="catalog-list">
      {bags.map(bag => (
        <Bag
          id={bag.id}
          brand={bag.brand}
          name={bag.name}
          image={bag.image}
          price={bag.price}
          inStock={bag.inStock}
        />
      ))}
    </CardDeck>
  );
};

export default BagList;

