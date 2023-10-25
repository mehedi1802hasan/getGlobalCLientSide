import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
const Footer = () => {
    return (
        <div>
            <div className=" mt-16 border-b-2 border-black w-32 mx-auto"></div>

         <footer className="footer footer-center p-10 ">
  <aside>
  
    <p className="font-bold text-2xl">
     Join our Jurney
    </p> 
    <p>Stay in the loop with update,sneakes  peeks and more.Follow our progress</p>
  </aside> 
  <nav>
    <div className="grid grid-flow-col gap-8 text-2xl -mt-5 ">

  <p><BsFacebook/></p>
  <p><FaInstagramSquare/></p>
  <p><BsLinkedin/></p>
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;