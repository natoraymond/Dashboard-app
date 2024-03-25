import React from 'react';
import { CgCodeSlash } from "react-icons/cg";
import { LuCog } from "react-icons/lu";
import { SiW3C, SiPowerpages } from "react-icons/si";
import { RiCheckboxCircleFill } from "react-icons/ri";



function Home() {


  const data =[

    {
      id: 1,
      name: 'John Doe',
      age: 20,
      grade: 'A',
      picture: 'https://example.com/john.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 21,
      grade: 'B',
      picture: 'https://example.com/jane.jpg',
    },
  ];

  return (
   <main className='main-container'>
    <div className='main-title'>
      <h3>DASHBOARD</h3>
    </div>

    <div className='main-cards'>
      <div className='card'>
        <div className='card-inner'>
          <h3>Product Design</h3>
          <SiPowerpages className='card_icon'/>
          <></>
        </div>
        <h1>200</h1>
      </div>
      <div className='card'>
        <div className='card-inner'>
          <h3>Frontend</h3>
          <CgCodeSlash className='card_icon'/>
          <></>
        </div>
        <h1>Number of Interns: 300</h1>
      </div>
      <div className='card'>
        <div className='card-inner'>
          <h3>Backend</h3>
          <LuCog className='card_icon'/> 
          <></>
        </div>
        <h1>150</h1>
      </div>
      <div className='card'>
        <div className='card-inner'>
          <h3>Web3</h3>
          <SiW3C className='card_icon'/>
          <></>
        </div>
        <h1>150</h1>
      </div>
    </div>
    <div className='charts'>

        <table>
          <thead>
            <tr>
              <th>Students Name</th>
              <th>Status</th>
              <th>Email Address</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Serial 1: John Doe</td>
              <td><RiCheckboxCircleFill />Active</td>
              <td><RiCheckboxCircleFill /> example@gmail.com</td>
              <td><RiCheckboxCircleFill /> Grade: 45</td>
            </tr>
            <tr>
              <td>Serial 2: Jane Smith</td>
              <td><RiCheckboxCircleFill />Active</td>
              <td><RiCheckboxCircleFill /> example@gmail.com</td>
              <td><RiCheckboxCircleFill /> Grade: 65</td>
            </tr>
            <tr>
              <td>Serial 3: Okofor Sunday</td>
              <td><RiCheckboxCircleFill />Active</td>
              <td><RiCheckboxCircleFill /> example@gmail.com</td>
              <td><RiCheckboxCircleFill /> Grade: 75</td>
            </tr>
          </tbody>
      </table>
  </div>
   </main>
  );
}

export default Home;
