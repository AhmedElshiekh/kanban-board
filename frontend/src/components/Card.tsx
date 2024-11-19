import React, { useState } from 'react';
import Member from './Member';

type PropType = {
  status: string
  title?: string
  bg?: string
  count?: number
}

const Card = (prop: PropType) =>{

  var member = {
          'count': prop.count ?? 0
        }

  const Members: any[] = [];


  for (let i = 0; i < (prop.count??0); i++) {
    Members.push(<Member/>);
  }

  return(
    <div id={prop.status} className={`flex-1 bg-${prop.bg??'dark-main-color'} border border-dark-main-color border-2 p-2 rounded-lg`}>
      <div className="flex flex-row justify-between m-3">
        <b>{prop.title}</b>
        <div className="rounded-full w-5 h-5 bg-white m-1 text-center">
          {member.count}
        </div>
      </div>
      <div className="max-h-96 min-h-20 overflow-auto mt-2 scroll">
        {Members}
        {member.count == 0 &&(
          <div className={`mt-2 text-[25px] text-${prop.bg == 'transparent'?'dark-main-color':'main-color'}`}>
            <b>No Members</b>
          </div>
        )}
      </div>
    </div>
  );
}


export default Card;