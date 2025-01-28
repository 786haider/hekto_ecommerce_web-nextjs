import SoCard1 from "./shopex_offer_cards/socard1";
import SoCard2 from "./shopex_offer_cards/socard2";
import SoCard3 from "./shopex_offer_cards/socard3";
import SoCard4 from "./shopex_offer_cards/socard4";

export default function ShopexOffer(){
    return(
        <div>
            <h1 style={{height:'42px',top:'2529px',left:'761px',fontSize:'42px',lineHeight:'49.22px',color:'rgba(21, 24, 117, 1)'}} className="flex justify-center items-center font-sans ml-auto mr-auto mt-10">
               What Shopex Offer!
            </h1>
            <div className="grid grid-cols-4">
                <SoCard1/>
                <SoCard2/>
                <SoCard3/>
                <SoCard4/>
            </div>
        </div>
    )
}