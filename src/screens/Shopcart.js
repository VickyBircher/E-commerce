import React from "react";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerCart from "../components/BannerCart";
import ShopcartTable from "../components/ShopcartTable";

function Shopcart() {
  return (
    <>
      <Header />
      <BannerCart />
      <ShopcartTable />
      <Footer />
    </>
  );
}

export default Shopcart;
