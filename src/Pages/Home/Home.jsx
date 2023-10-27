import { useLoaderData } from "react-router-dom";
import Brands from "../../Component/Brands/Brands";
import HomeBanner from "../../Component/HomeBanner/HomeBanner";
import CustomerReviews from "../../Component/CustomerReviews/CustomerReviews";
import Categories from "../../Component/Categories/Categories";
import Phones from "../../Component/Phones/Phones";
import Watches from "../../Component/Watches/Watches";
import Tablets from "../../Component/Tablets/Tablets";
import FeatureProducts from "../../Component/FeatureProducts/FeatureProducts";
import CustomerSupport from "../../Component/CustomerSupport/CustomerSupport";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Categories></Categories>
      <Brands brands={brands}></Brands>
      <FeatureProducts></FeatureProducts>
      <Phones></Phones>
      <Watches></Watches>
      <Tablets></Tablets>
      <CustomerSupport></CustomerSupport>
      <CustomerReviews></CustomerReviews>
    </div>
  );
};

export default Home;
