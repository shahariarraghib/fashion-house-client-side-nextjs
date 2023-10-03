import Image from "next/image";
import Navbar from "./component/ShareComponent/navbar";
import BrandNameAndCart from "./component/ShareComponent/BrandNameAndCart";
import OfferBanner from "./component/ShareComponent/OfferBanner";
import SearchBar from "./component/ShareComponent/SearchBar";
import Banner from "./component/ShareComponent/Banner";
import Products from "./component/products/products";

export default function Home() {
  return (
    <div>
      <OfferBanner></OfferBanner>
      <SearchBar></SearchBar>
      <BrandNameAndCart></BrandNameAndCart>
      <Navbar></Navbar>
      <Banner></Banner>
      <Products></Products>
    </div>
  );
}
