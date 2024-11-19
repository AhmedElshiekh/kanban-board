import React, { useState } from 'react';

interface Member {
  id: string;
  name: string;
  title: string;
  age: string;
  email: string;
  phone: string;
}

const Member:React.FC<Member> = ({ id, name, title, age, email, phone }) =>{
  return(
    <div className="h-20 bg-white rounded-lg text-left p-2 mb-2">
      <div className="justify-between flex">
        <h4 className="text-bold inline">{title} {name}</h4>
        <span className="text-xs text-gray-600">{age} yo</span>
      </div>
      <span className="text-sm">{email}</span>
      <br />
      <span className="text-sm text-gray-600">{phone}</span>
    </div>
  );
}


export default Member;