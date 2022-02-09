import React from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Outlet } from 'react-router-dom';

const App: React.FC = ({ children }): JSX.Element => (
  <div className='wrapper'>
    <Header />
    <Outlet></Outlet>
    <Footer />
  </div>
);

export default App;