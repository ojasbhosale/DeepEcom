
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, content, author, authorIcon }) => {
  return (
    <div className="bg-custom-white occ p-8 m-4 rounded-lg shadow-md" style={{ minWidth: '700px', maxHeight: '500px' }}>
      <div className="header bg-custom-gray flex justify-between items-center p-2 mb-4">
        <div className="flex items-center">
          {authorIcon && <FontAwesomeIcon icon={authorIcon} className="text-black-500 mr-2" />}
          <h2 className="text-xl font-normal">{author}</h2>
        </div>
        <div>
          <FontAwesomeIcon icon={faMicrophone} className="text-black-500" />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
