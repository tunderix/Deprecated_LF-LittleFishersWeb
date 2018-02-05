import React from 'react';
import { Link, IndexLink } from 'react-router';
import './style.css';

import Footer from '../Footer'
import Header from '../Header'
import TitleSection from '../TitleSection'


const Base = ({ children }) => (
  <div>
    
    <Header></Header>
    <TitleSection></TitleSection>

    {children}

    <Footer></Footer>
    
  </div>
);

export default Base;