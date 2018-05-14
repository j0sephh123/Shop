import React from 'react';
import Backdrop from './backdrop';

const modal = (props) => {

  return (
    <div>
      <Backdrop
        show={props.show} 
        backdropClickHandler={props.backdropClickHandler}  
      />
      <div className='Modal'>
        {props.children}
      </div>
    </div>
  );
}

export default modal;

