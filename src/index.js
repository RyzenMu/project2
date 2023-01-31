// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './images/one.jpg'

const First = () => {
  return(
    <div className='ui comments'>


            <div className='comment'>
            <a href='/' className='avatar'> <img src={profile1} alt='profile picture' /> </a>
            
            <div className='content'>
            <a href='/' className='author'> raju </a>
            <div className='metadata'>
            <span className='date'> Today at 3 pm</span> </div>
            <div className='text'>HI this is my first comment</div>
            </div>
            </div>


    </div>

    
  )
}

ReactDOM.render(
  <First />,
  document.querySelector('#root')
)