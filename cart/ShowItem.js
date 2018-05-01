import React from 'react';

const ShowItem = ({characteristics}) => {

    return (
      <div className='container border border-primary ml-3'>
        <div className="card" >
          <div className="card-body">
            <h5 className="card-title">{characteristics.name}</h5>
            <p className="card-text">{characteristics.quantity}</p>
            <p className="card-text">{characteristics.price}</p>
            <p className="card-text">{characteristics.additional.text1}</p>
            <p className="card-text">{characteristics.additional.text2}</p>
            <p className="card-text">{characteristics.additional.text3}</p>
          </div>
        </div>
        {characteristics.name}
      </div>
    );
  }
  

export default ShowItem;