import React from 'react';

const Card = ({ id, name, email}) => {
  return (
    <div className='tc bg-light-green gray dib br3 pa3 ma3 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}/bgset_bg1?size=200x200`} alt="a photo" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;
