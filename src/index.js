import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {Test} from './class_page'
// import {FunctionTest} from './func_test';
import reportWebVitals from './reportWebVitals';
// import ProfileCard from './ProfileCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const profile_card = ReactDOM.createRoot(document.getElementById('profile_card'));
// profile_card.render(
//   <React.StrictMode>
//     <ProfileCard />
//   </React.StrictMode>
// );

// const second_section = ReactDOM.createRoot(document.getElementById('second_section'));
// second_section.render(
//   <React.StrictMode>
//     {/* <Test testData = "mortech test solu" anotherData = "mortech test solu" /> */}
//     <Test testData = "mortech test solu" anotherData = "mortech test solu" >this is the children</Test>
//   </React.StrictMode>
// );

// const third_section = ReactDOM.createRoot(document.getElementById('third_section'));
// third_section.render(
//     //  <FunctionTest testimonial='i am currently studying react' />
//     <FunctionTest testimonial='i am currently studying react' >function chhildren</FunctionTest>
     
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
