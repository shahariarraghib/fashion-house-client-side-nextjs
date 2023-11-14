import Navbar from "./component/ShareComponent/navbar";
import BrandNameAndCart from "./component/ShareComponent/BrandNameAndCart";
import OfferBanner from "./component/ShareComponent/OfferBanner";
import SearchBar from "./component/ShareComponent/SearchBar";
import Banner from "./component/ShareComponent/Banner";
import GetProductPage from "./getProductPage/page";
import SecondBanner from "./component/ShareComponent/SecondBanner";
import TrendingNowProduct from "./component/ShareComponent/TrendingNowProduct";
import Footer from "./component/ShareComponent/Footer";

export default function Home() {
  return (
    <div>
      <OfferBanner></OfferBanner>
      <SearchBar></SearchBar>
      <BrandNameAndCart></BrandNameAndCart>
      <Navbar></Navbar>
      <Banner></Banner>
      <GetProductPage></GetProductPage>
      <SecondBanner></SecondBanner>
      <TrendingNowProduct></TrendingNowProduct>
      <Footer></Footer>
    </div>
  );
}
