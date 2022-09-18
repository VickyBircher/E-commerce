import React from "react";
import "../App.css";
import Header from "../components/Header";
import Top from "../components/Top";
import Footer from "../components/Footer";
import BannerCart from "../components/BannerCart";
import ShopcartTable from "../components/ShopcartTable";

function Shopcart() {
  return (
    <>
      <Top />
      <Header />
      <BannerCart />
      <ShopcartTable />
      <Footer />
    </>
  );
}

export default Shopcart;
