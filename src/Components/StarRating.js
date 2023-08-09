import React from 'react';

const StarRating = ({ rating }) => {
  const starIcons = [];

  for (let i = 1; i <= 5; i++) {
    starIcons.push(
      <span key={i} className={i <= rating ? 'star-filled' : 'star-empty'}>
        ★
        
      </span>
    );
  }

  return <div className="star-rating">{starIcons}</div>;
};

export default StarRating;
