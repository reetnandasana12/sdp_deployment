import React from "react";

const Description = ({hotel, onQuant, onAdd, onRemove, onSetOrderedQuant }) => {
  return (
    <section className="description">
      <p className="pre">sneaker company</p>
      <h1>{hotel.name}</h1>
      <p className="desc">
        {hotel.description}
      </p>
      
      <div className="buttons">
        {/* <QuantityButton onQuant={onQuant} onRemove={onRemove} onAdd={onAdd} /> */}
        <button
          className="add-to-cart"
          onClick={() => {
            window.location=`/menu/${hotel._id}`;
          }}
        >
         
          menu
        </button>
        <button
          className="add-to-cart secondary"
          onClick={() => {
            window.location=`/bookform/${hotel._id}`;
            
          }}
        >
          
          book
        </button>
      </div>
    </section>
  );
};

export default Description;


