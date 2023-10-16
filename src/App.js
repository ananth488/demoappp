
import './App.css';
import MyComponent from './component/copyapi';
import Formvalidate from './component/Formvalidate';


import Useobject from './component/useobject';
import { useState } from 'react';
import Ratingstar from './component/Ratingstar';

function App() {

  return (
    <div className="App">
      {/* <Api/> */}
      {/* <MyComponent/>
      <Useobject/> */}

     <Formvalidate/>
     <Ratingstar/>
    </div>
  );
}

export default App;
