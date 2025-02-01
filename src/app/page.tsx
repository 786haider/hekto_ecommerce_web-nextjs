import FeatureProduct from "./pages/featureproduct/page";
import HeroPage from "./pages/hero/page";
import LatestProduct from '../../src/app/pages/latestproduct/page';
import ShopexOffer from "./pages/shopex_offer/page";
import UniqueFeature from "./pages/uniquefeature/page";
import TrendingProducts from "./pages/trendingproducts/page";
import DiscountPage from "./pages/discount_items/page";



export default function Home() {
  return (
   <div>
   <HeroPage/>
   <FeatureProduct/>
   <LatestProduct/>
   <ShopexOffer/>
   <UniqueFeature/>
   <TrendingProducts/>
   <DiscountPage/>
   
   
    <h1>Home</h1>
    <p className="bg-black text-white text-2xl">contniously work on this web an updated it time by time and complete my hakathon project and make it live as soon as possible.</p>
   </div>
  );
}
