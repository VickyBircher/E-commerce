import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Top from '../components/Top';
import Footer from '../components/Footer';
import Bannercart from '../components/Bannercart';
import ShopcartTable from '../components/ShopcartTable';

function Shopcart() {

  return (
    <>
      <Top />
      <Header />
      <Bannercart />
      <ShopcartTable />
      <Footer />
    </>
  );
}

export default Shopcart;