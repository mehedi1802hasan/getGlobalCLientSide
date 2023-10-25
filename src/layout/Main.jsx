import React from 'react';
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';
import BannerPart from '../Pages/BannerPart';
import EmailPart from '../Pages/EmailPart';

const Main = () => {
    return (
        <div>
          <div className='max-w-screen-xl mx-auto p-1'>
          <Navbar ></Navbar>
           <BannerPart></BannerPart>
          </div>
           <EmailPart></EmailPart>
           <Footer></Footer>
        </div>
    );
};

export default Main;
