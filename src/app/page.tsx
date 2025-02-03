import FeatureProduct from "./pages/featureproduct/page";
import HeroPage from "./pages/hero/page";
import LatestProduct from '../../src/app/pages/latestproduct/page';
import ShopexOffer from "./pages/shopex_offer/page";
import UniqueFeature from "./pages/uniquefeature/page";
import TrendingProducts from "./pages/trendingproducts/page";
import DiscountPage from "./pages/discount_items/page";
import TopCatagories from "./pages/top_catagories/page";
import LatestUpdate from "./pages/latestUpdate/page";
import LatestBlog from "./pages/latest_blog/page";



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
   <TopCatagories/>
   <LatestUpdate/>
   <LatestBlog/>
   </div>
  );
}
