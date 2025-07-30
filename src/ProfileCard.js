import React from 'react'
import kelvin1 from './images/kelvin1.jpg'
import jamike from './images/jamike.jpg'
import charles3 from './images/charles3.png'
import Footer from './footer'
import Header from  './header'
import './profilecard.css'

export default function ProfileCard() {


    var cardStyles = {
        
                border: "2px solid gray",
                borderRadius: "10px",
                padding: "20px",
                margin: "10px",
                textAlign: "center",
                width: "250px",
                
               
            };
             const buttonStyles = {
                backgroundColor: "blue",
                color: "white",
                padding: "10px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
            };
// function Mousein() {

// var cardc= document.getElementById('firstcard')
// var cardc2= document.getElementById('secondcard')
// var cardc3= document.getElementById('thirdcard')
// cardc.style.backgroundColor='red'
// cardc2.style.backgroundColor='red'
// cardc3.style.backgroundColor='red'
  
  
// }
function Mousein(event) {
  const card = event.currentTarget
  card.style.backgroundColor = 'red';
  card.style.color = 'white';
}

function Mouseout(event) {

const card = event.currentTarget;
  card.style.backgroundColor = 'white';
  card.style.color = 'black'; 
}

function showNumber() {
                alert('my number is 07089637195');
                
            }
 var mode='true';
            function toggleMode() {

if (mode==='true'){
document.body.style.backgroundColor = 'black';
document.body.style.color = 'white'; 
mode='false'
document.getElementById("modeButton").innerText = "Change to light mode";
}
else{
document.body.style.backgroundColor = 'white';
document.body.style.color = 'black'; 
mode='true'
document.getElementById("modeButton").innerText = "Change to dark mode";
}
               
            }
  return (

            
<>
<Header/>
{/* toggle */}
 <div style={{display:'flex', justifyContent:'right', alignItems:'center', marginTop:5}}>
      <button id='modeButton' onClick={toggleMode} >Change to dark mode</button>  
        
        
        </div>
  
<div className='container' style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
 
 

        {/* //card1 */}
 <div className='item' id='firstcard' style={cardStyles} onMouseOver={Mousein} onMouseLeave={Mouseout} >
        
     <img src={kelvin1} alt="profilefoto" style={{width: "250px", height: "250px", borderRadius:8}} />
        <h3>Egwi Kelvin </h3>
        <p>I am a UI/UX designer, Video Editor, Web designer, Front End developer and Mobile App Developer, with {5} years experience</p>
         <button onClick={showNumber} style={buttonStyles}>Show phone </button>  
        </div>
        


        {/* //card2 */}
 <div className='item' id='secondcard' style={cardStyles} onMouseOver={Mousein} onMouseLeave={Mouseout}>
        
     <img src={jamike} alt="profilefoto" style={{width: "250px", height: "250px", borderRadius:8}} />
        <h3>Jamike Obikwelu </h3>
        <p>Angular programmer with proficiencty in React, HTML, Javascript, with {4} years hands on experience</p>
         <button onClick={showNumber} style={buttonStyles}>Show phone </button>  
        </div>
        
   


{/* //card3 */}
 <div className='item' id='thirdcard' style={cardStyles} onMouseOver={Mousein} onMouseLeave={Mouseout}>
        
     <img src={charles3} alt="profilefoto" style={{width: "250px", height: "250px", borderRadius:8}} />
        <h3>Egwi Charles </h3>
        <p>Front End/ Backend developer which include Web and Mobile App Developer, with {7} years experience</p>
         <button onClick={showNumber} style={buttonStyles}>Show phone </button>  
        </div>
        
   
</div>  
<Footer/>
</>


  )
}

