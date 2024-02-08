import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';


function RenderStars(rating) {

    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
        stars.push(<FontAwesomeIcon key={stars.length} icon={faStarHalfAlt} className="text-yellow-400" />);
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
        stars.push(<FontAwesomeIcon key={stars.length + i} icon={faStar} className="text-gray-400" />);
    }

    return stars;
}

export default RenderStars