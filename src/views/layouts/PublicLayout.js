import React from 'react'
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function PublicLayout({ children }) {
  
 

    return (
        <>
            <Header />
          
                <main>{children}</main>
            
            <Footer />
        </>
    )
}
