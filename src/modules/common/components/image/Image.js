import React from 'react';
import './Image.css';

const Image = props => (
   <div className="text-center">
      <img width={props.width} className="img-fluid box-image" src={props.path} alt={props.alt} />
   </div>
)

export default Image;