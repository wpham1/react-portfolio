import './App.css';
import React from 'react';
import Home from './components/pages';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {

 
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        {/* <Route path='/signin' component={SigninPage} exact/> */}
    
      </Routes>
    </Router>
  );
}

export default App;
