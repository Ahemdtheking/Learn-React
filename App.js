import React from "react";
import Card from "./Components/Card";
import data from './data.json';

const Name = 'React From Youtube';
const Owner = 'Channel: Anisul Islam';


function App() {
    return <div>
            
      <h1 className="Name">{Name}</h1>
      <p className="Owner">{Owner}</p>
      <div className="Background">
      <div className="Menu-ber">
                  <a className="A1" href="http://localhost:3000/" target="_blank">Home</a>
                  <a className="A2" href="https://www.w3schools.com/REACT/DEFAULT.ASP" target="_blank">Learn</a>
                  <a className="A3" href="https://reactjs.org/tutorial/tutorial.html" target="_blank">What is React?</a>
                  <a className="A4" href="#" target="_blank">About</a>
                  <a className="A5" href="#" target="_blank">Contact</a>
                  <input className="Search1" type="search" name="Search"  placeholder="Search...."></input>
                  <button className="Submi-Search" type="submit">Search</button>

      </div>
      </div>
     <Card  titleText={data[0].title} desc={data[0].desc}/>
     <Card  titleText={data[1].title} desc={data[1].desc}/>
     <Card  titleText={data[2].title} desc={data[2].desc}/>
        

     <div className='Footer'>
           <h5 className='No'>Contact no: 01034794663</h5>
           <h6 className='FB'><a href='https://www.facebook.com/ahmed.mahim.5811' target="_blank">
                                <img className="fb-image" src='facebook.png'></img>
                              </a> Facebook</h6>
           <h6 className='GH'><a href='https://github.com/Ahemdtheking' target="_blank">
                                 <img src='github Edited.jpg'></img>
                              </a> GitHub</h6>
           <h6 className='Email'>
                 <img src='gmail.png'></img> ahmed.mahim2007@gmail.com</h6>
           <p className='CY'>&copy;Copyright 2022. All right reserved.</p>
     </div>

    </div>
}
export default App;
        

     
