import TpCard1 from "./trendin_products_card/tpCard1";
import TpCard2 from "./trendin_products_card/tpCard2";
import TpCard3 from "./trendin_products_card/tpCard3";
import TpCard4 from "./trendin_products_card/tpCard4";

export default function TrendingProducts(){
    return (
        <div>
            <h1 style={{width:'450px',height:'42px',top:'3792px',left:'778px',color:"rgba(21, 24, 117, 1)",fontSize:'42px',lineHeight:'49.22px',font:'josifen sans'}} className="font-bold mt-10 ml-auto mr-auto  text-5xl">
            Trending Products
            </h1>
            <div className="flex">
                <TpCard1/>
                <TpCard2/>
                <TpCard3/>
                <TpCard4/>
            </div>
        </div>
    )
}