import '../App.css';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Items from '../components/Items';
import Banner from '../components/Banner';
import Top from '../components/Top';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Top />
      <Header />
      <Categories />
      <Items />
      <Banner />
      <Footer />
    </>
  );
}

export default Home;