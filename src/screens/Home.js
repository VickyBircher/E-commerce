import React from "react";
import "../App.css";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Items from "../components/Items";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Categories />
      <Items />
      <Footer />
    </>
  );
}

export default Home;
