import React from 'react';
import Navbar from '../Pages/Shared/Navbar/navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer/Footer';

const RootLayout = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;