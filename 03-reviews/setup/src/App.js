import React from 'react';
import Review from './Review';


function App() {
  return (
  <main>
    <div className='container'>
      <div className='title'>
        <h2 style={{marginBottom:'2.0em'}}>our reviews</h2>
        <div className='underline'></div>
        <Review />
      </div>
    </div>
  </main>
  
  )
}

export default App;
