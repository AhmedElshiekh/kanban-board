import React from 'react';

import Card from './components/Card';
import Form from './components/Form';


const App = () =>{

  return (
    <div className=" min-h-screen p-5 bg-main-color">
      <header className="flex flex-col items-center justify-center text-2xl text-gray-800 mb-8">
        <b>Kanban Board</b>
      </header>

      <div className="flex flex-row text-gray-800">
      
        {/* Form Section */}
        <div className="flex flex-col gap-4 m-8">
          <Form onSubmit={() => {}} />
        </div>

        {/* Kanban Board Section */}
        <div className="flex flex-col w-full text-center">
          <div className="flex flex- justify-between gap-2">
            {/* componant */}       
            <Card 
              bg={'transparent'}
              title='Unclaimed'
              status='Unclaimed'
              // count={5}
            />
            <div className='border h-[100%] border-[#0e6eb0] border-1'></div>
            <Card 
              title='First Contact'
              status='FirstContact'
              // count={1}
            />
            <Card 
              title='Preparing Work Offer'
              status='PreparingWorkOffer'
              // count={3}
            />
            <Card 
              title='Send to Therapists'
              status='SendToTherapists'
              // count={1}
            />

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
