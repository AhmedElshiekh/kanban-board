import React, { useEffect, useState } from 'react';
import Member from './Member';
import axios from 'axios';
import { API_URL } from '../main';

interface PropType extends React.HTMLAttributes<HTMLDivElement> {
  status: string
  title?: string
  bg?: string
  count?: number
}

const Card: React.FC<PropType> = (prop) =>{


  const [Members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(API_URL + '/members',{
          params: {
            status: prop.status
          }
        });
        setMembers(response.data.body.data);  
        // setMembers(response.data.body.data);  
        setLoading(false); 
      } catch (err) {
        setError('Failed to fetch members.'); 
        setLoading(false); 
      }
    };

    fetchMembers();
  }, []);

  return(
    <div id={prop.status} className={`flex-1 bg-${prop.bg??'dark-main-color'} border border-dark-main-color border-2 p-2 rounded-lg`}>
      <div className="flex flex-row justify-between m-3">
        <b>{prop.title}</b>
        <div className="rounded-full w-5 h-5 bg-white m-1 text-center">
          {Members.length}
        </div>
      </div>
      <div className="max-h-96 min-h-20 overflow-auto mt-2 scroll">
        {error &&(<span className='text-red-500'>{error}</span>)}
        
        {Members.map((member, index) => (
          <Member id={member.id}  name={member.name} title={member.title} age={member.age} email={member.email} phone={member.phone} />
        ))}

        {Members.length == 0 && !loading &&(
          <div className={`mt-2 text-[25px] text-${prop.bg == 'transparent'?'dark-main-color':'main-color'}`}>
            <b>No Members</b>
          </div>
        )}
        {loading && (
          <div className={`mt-2 text-[25px] text-${prop.bg == 'transparent'?'dark-main-color':'main-color'}`}>
            <b>Loading...</b>
          </div>
        )}
        
      </div>
    </div>
  );
}


export default Card;