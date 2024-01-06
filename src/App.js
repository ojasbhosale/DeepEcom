import React from 'react';
import TopNavbar from './TopNavbar';
import Navbar from './Navbar';
import Card from './Card';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <TopNavbar />
    <div className="flex min-h-screen bg-gray-300 gap-32 ml-32 ">
      <Navbar /> 
      <div className="flex flex-row overflow-x-auto  p-8">
        <Card author="Option 1 - Coffee?" authorIcon={faEnvelope} title="Card 1" content="Some information for Card 1." />
        <Card author="Option 2 - Feedback" authorIcon={faEnvelope} title="Card 2" content="Some information for Card 2." />
        <Card author="Option 3 - Post-grad plans" authorIcon={faEnvelope} title="Card 3" content="Some information for Card 3." />
      </div>
    </div>
    </div>
  );
};

export default App;
