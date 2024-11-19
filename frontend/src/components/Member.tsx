import React, { useState } from 'react';

type PropType = {
  // status: string
  // title: string
}

const Member = (prop: PropType) =>{
  return(
    <div className="h-20 bg-white rounded-lg text-left p-2 mb-2">
      <div className="justify-between flex">
        <h4 className="text-bold inline">Member Name</h4>
        <span className="text-xs text-gray-600">25 yo</span>
      </div>
      <span className="text-sm">ahemd@gmail.com</span>
      <br />
      <span className="text-sm text-gray-600">+4412345678</span>
    </div>
  );
}


export default Member;