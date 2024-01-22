import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';
// import Footer from '../components/shared/Footer';
// import Sidebar from '../components/shared/Sidebar';

function RootLayout() {
  return (
    <>
      <Header />

      {/* <section className="flex flex-1 h-full"> */}
      <Outlet />
      {/* </section> */}

      {/* <Footer /> */}
    </>
  );
}

export default RootLayout;
