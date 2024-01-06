import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-300 mt-4 p-4 fixed left-0 h-full flex flex-col items-center">
        <button className="nav-btn w-full text-left">
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          New flow
        </button>
        <button className="nav-btn w-full text-left selected">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          Option 1 - Coffee?
        </button>
        <button className="nav-btn w-full text-left">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          Option 2 - Feedback
        </button>
        <button className="nav-btn w-full text-left">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          Option 3 - Post-grad plans
        </button>
        <button className="nav-btn w-full text-left">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          Option 4 - Launch plans
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
 