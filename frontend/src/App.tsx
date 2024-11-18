import React, { useState } from 'react';
import axios from 'axios';
import {API_URL} from './main';



const App = () =>{

  return (
    <div className=" min-h-screen p-5 bg-[#d3e5ed]">
      <header className="flex flex-col items-center justify-center text-2xl text-gray-800 mb-8">
        <b>Kanban Board</b>
      </header>

      <div className="flex flex-row text-gray-800">
        {/* Form Section */}
        <div className="flex flex-col gap-4 m-8">
          <form onSubmit={handleSubmit}>
            <div className='mt-2'>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-1 border rounded-md"
              />
            </div>
            <div className='mt-2'>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="p-1 border rounded-md"
              />
            </div>
            <div className='mt-2'>
              <label htmlFor="age">Age:</label>
              <input
                type="text"
                id="age"
                name="age"
                className="p-1 border rounded-md"
              />
            </div>
            <div className='mt-2'>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                className="p-1 border rounded-md"
              />
            </div>
            <div className='mt-2'>
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="p-1 border rounded-md"
              />
            </div>
          </form>

          <button className="bg-blue-500 text-white p-2 rounded-md mt-4">
            Submit
          </button>
        </div>

        {/* Kanban Board Section */}
        <div className="flex flex-col w-full text-center">
          <div className="flex flex- justify-between gap-2">
            {/* componant */}
            <div className="flex-1 bg-transparent border border-[#bad1e0] border-2 p-2 rounded-lg">
              <div className="flex flex-row justify-between m-3">
                <b>Unclaimed</b>
                <div className='rounded-full w-5 h-5 bg-white m-1 text-center'>1</div>
              </div>
              <div className="max-h-96 overflow-auto mt-2 scroll">

                <div className='h-20 bg-white rounded-lg text-left p-2 mb-2'>
                  <div className='justify-between flex'>
                    <h4 className='text-bold inline'>
                      Member Name
                    </h4>
                    <span className='text-xs text-gray-600'>
                      25 yo
                    </span>
                  </div>
                  <span className='text-sm'>ahemd@gmail.com</span>
                  <br/>
                  <span className='text-sm text-gray-600'>+4412345678</span>
                </div>
                <div className='bg-white rounded-lg text-left p-2 mb-2'>
                  <div className='justify-between flex'>
                    <h4 className='text-bold inline'>
                      Member Name
                    </h4>
                    <span className='text-xs text-gray-600'>
                      25 yo
                    </span>
                  </div>
                  <span className='text-sm'>ahemd@gmail.com</span>
                  <br/>
                  <span className='text-sm text-gray-600'>+4412345678</span>
                </div>
                <div className='bg-white rounded-lg text-left p-2 mb-2'>
                  <div className='justify-between flex'>
                    <h4 className='text-bold inline'>
                      Member Name
                    </h4>
                    <span className='text-xs text-gray-600'>
                      25 yo
                    </span>
                  </div>
                  <span className='text-sm'>ahemd@gmail.com</span>
                  <br/>
                  <span className='text-sm text-gray-600'>+4412345678</span>
                </div>
                <div className='bg-white rounded-lg text-left p-2 mb-2'>
                  <div className='justify-between flex'>
                    <h4 className='text-bold inline'>
                      Member Name
                    </h4>
                    <span className='text-xs text-gray-600'>
                      25 yo
                    </span>
                  </div>
                  <span className='text-sm'>ahemd@gmail.com</span>
                  <br/>
                  <span className='text-sm text-gray-600'>+4412345678</span>
                </div>
                <div className='bg-white rounded-lg text-left p-2 mb-2'>
                  <div className='justify-between flex'>
                    <h4 className='text-bold inline'>
                      Member Name
                    </h4>
                    <span className='text-xs text-gray-600'>
                      25 yo
                    </span>
                  </div>
                  <span className='text-sm'>ahemd@gmail.com</span>
                  <br/>
                  <span className='text-sm text-gray-600'>+4412345678</span>
                </div>
                <div className='bg-white rounded-lg text-left p-2 mb-2'>
                  <div className='justify-between flex'>
                    <h4 className='text-bold inline'>
                      Member Name
                    </h4>
                    <span className='text-xs text-gray-600'>
                      25 yo
                    </span>
                  </div>
                  <span className='text-sm'>ahemd@gmail.com</span>
                  <br/>
                  <span className='text-sm text-gray-600'>+4412345678</span>
                </div>
                <div className='h-20 bg-white rounded-lg text-left p-2 mb-2'>
                  <div className='justify-between flex'>
                    <h4 className='text-bold inline'>
                      Member Name
                    </h4>
                    <span className='text-xs text-gray-600'>
                      25 yo
                    </span>
                  </div>
                  <span className='text-sm'>ahemd@gmail.com</span>
                  <br/>
                  <span className='text-sm text-gray-600'>+4412345678</span>
                </div>
                <div className='bg-white rounded-lg text-left p-2 mb-2'>
                  <div className='justify-between flex'>
                    <h4 className='text-bold inline'>
                      Member Name
                    </h4>
                    <span className='text-xs text-gray-600'>
                      25 yo
                    </span>
                  </div>
                  <span className='text-sm'>ahemd@gmail.com</span>
                  <br/>
                  <span className='text-sm text-gray-600'>+4412345678</span>
                </div>
                <div className='bg-white rounded-lg text-left p-2 mb-2'>
                  <div className='justify-between flex'>
                    <h4 className='text-bold inline'>
                      Member Name
                    </h4>
                    <span className='text-xs text-gray-600'>
                      25 yo
                    </span>
                  </div>
                  <span className='text-sm'>ahemd@gmail.com</span>
                  <br/>
                  <span className='text-sm text-gray-600'>+4412345678</span>
                </div>
                <div className='bg-white rounded-lg text-left p-2 mb-2'>
                  <div className='justify-between flex'>
                    <h4 className='text-bold inline'>
                      Member Name
                    </h4>
                    <span className='text-xs text-gray-600'>
                      25 yo
                    </span>
                  </div>
                  <span className='text-sm'>ahemd@gmail.com</span>
                  <br/>
                  <span className='text-sm text-gray-600'>+4412345678</span>
                </div>
                <div className='bg-white rounded-lg text-left p-2 mb-2'>
                  <div className='justify-between flex'>
                    <h4 className='text-bold inline'>
                      Member Name
                    </h4>
                    <span className='text-xs text-gray-600'>
                      25 yo
                    </span>
                  </div>
                  <span className='text-sm'>ahemd@gmail.com</span>
                  <br/>
                  <span className='text-sm text-gray-600'>+4412345678</span>
                </div>
                <div className='bg-white rounded-lg text-left p-2 mb-2'>
                  <div className='justify-between flex'>
                    <h4 className='text-bold inline'>
                      Member Name
                    </h4>
                    <span className='text-xs text-gray-600'>
                      25 yo
                    </span>
                  </div>
                  <span className='text-sm'>ahemd@gmail.com</span>
                  <br/>
                  <span className='text-sm text-gray-600'>+4412345678</span>
                </div>
              </div>
            </div>

            <div className='border h-[100%] border-[#0e6eb0] border-1'></div>


            <div className="flex-1 bg-[#bad1e0] border border-[#bad1e0] border-2 p-2 rounded-lg">
              <div className="flex flex-row justify-between m-3">
                <b>First Contact</b>
                <div className='rounded-full w-5 h-5 bg-white m-1 text-center'>1</div>
              </div>
              <div className="max-h-96 overflow-auto mt-2 scroll">
                <div className='bg-white rounded-lg text-left p-2 mb-2'>
                  <div className='justify-between flex'>
                    <h4 className='text-bold inline'>
                      Member Name
                    </h4>
                    <span className='text-xs text-gray-600'>
                      25 yo
                    </span>
                  </div>
                  <span className='text-sm'>ahemd@gmail.com</span>
                  <br/>
                  <span className='text-sm text-gray-600'>+4412345678</span>
                </div>
                <div className='bg-white rounded-lg text-left p-2 mb-2'>
                  <div className='justify-between flex'>
                    <h4 className='text-bold inline'>
                      Member Name
                    </h4>
                    <span className='text-xs text-gray-600'>
                      25 yo
                    </span>
                  </div>
                  <span className='text-sm'>ahemd@gmail.com</span>
                  <br/>
                  <span className='text-sm text-gray-600'>+4412345678</span>
                </div>
                <div className='bg-white rounded-lg text-left p-2 mb-2'>
                  <div className='justify-between flex'>
                    <h4 className='text-bold inline'>
                      Member Name
                    </h4>
                    <span className='text-xs text-gray-600'>
                      25 yo
                    </span>
                  </div>
                  <span className='text-sm'>ahemd@gmail.com</span>
                  <br/>
                  <span className='text-sm text-gray-600'>+4412345678</span>
                </div>
                <div className='bg-white rounded-lg text-left p-2 mb-2'>
                  <div className='justify-between flex'>
                    <h4 className='text-bold inline'>
                      Member Name
                    </h4>
                    <span className='text-xs text-gray-600'>
                      25 yo
                    </span>
                  </div>
                  <span className='text-sm'>ahemd@gmail.com</span>
                  <br/>
                  <span className='text-sm text-gray-600'>+4412345678</span>
                </div>
                <div className='bg-white rounded-lg text-left p-2 mb-2'>
                  <div className='justify-between flex'>
                    <h4 className='text-bold inline'>
                      Member Name
                    </h4>
                    <span className='text-xs text-gray-600'>
                      25 yo
                    </span>
                  </div>
                  <span className='text-sm'>ahemd@gmail.com</span>
                  <br/>
                  <span className='text-sm text-gray-600'>+4412345678</span>
                </div>
                <div className='h-20 bg-white rounded-lg text-left p-2 mb-2'>
                  <div className='justify-between flex'>
                    <h4 className='text-bold inline'>
                      Member Name
                    </h4>
                    <span className='text-xs text-gray-600'>
                      25 yo
                    </span>
                  </div>
                  <span className='text-sm'>ahemd@gmail.com</span>
                  <br/>
                  <span className='text-sm text-gray-600'>+4412345678</span>
                </div>
              </div>
            </div>  

            <div className="flex-1 bg-[#bad1e0] border border-[#bad1e0] border-2 p-2 rounded-lg">
              <div className="flex flex-row justify-between m-3">
                <b>Preparing Work Offer</b>
                <div className='rounded-full w-5 h-5 bg-white m-1 text-center'>1</div>
              </div>
              <div className="max-h-96 overflow-auto mt-2 scroll">
                <div className='bg-white rounded-lg text-left p-2 mb-2'>
                  <div className='justify-between flex'>
                    <h4 className='text-bold inline'>
                      Member Name
                    </h4>
                    <span className='text-xs text-gray-600'>
                      25 yo
                    </span>
                  </div>
                  <span className='text-sm'>ahemd@gmail.com</span>
                  <br/>
                  <span className='text-sm text-gray-600'>+4412345678</span>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-[#bad1e0] border border-[#bad1e0] border-2 p-2 rounded-lg">
              <div className="flex flex-row justify-between m-3">
                <b>Send to Therapists</b>
                <div className='rounded-full w-5 h-5 bg-white m-1 text-center'>1</div>
              </div>
              <div className="max-h-96 overflow-auto mt-2 scroll">
                <div className='bg-white rounded-lg text-left p-2 mb-2'>
                  <div className='justify-between flex'>
                    <h4 className='text-bold inline'>
                      Member Name
                    </h4>
                    <span className='text-xs text-gray-600'>
                      25 yo
                    </span>
                  </div>
                  <span className='text-sm'>ahemd@gmail.com</span>
                  <br/>
                  <span className='text-sm text-gray-600'>+4412345678</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
